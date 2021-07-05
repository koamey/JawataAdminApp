import { Component, OnInit } from '@angular/core';
import { DatePipe, Location, JsonPipe } from '@angular/common';
import { environment } from 'src/environments/environment';
import { EntitymodalPage } from 'src/app/components/entitymodal/entitymodal.page';
import { PopoverController, Platform } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { MenuService } from 'src/app/services/menu.service';

import { TranslateConfigService } from 'src/app/translate-config.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { File } from '@ionic-native/file/ngx';
import { SQLiteObject, SQLite } from '@ionic-native/sqlite/ngx';
import { Network } from '@ionic-native/network/ngx';
import { BarcodeScannerOptions, BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ExtendedDeviceInformation } from '@ionic-native/extended-device-information/ngx';
// import * as Background from 'src/assets/js/Background';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';

declare var cordova: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  selectedLanguage = localStorage.getItem('selectedL');
  heading = '';
  notification;
  notificationDetails = [];
  // totalstorage: any;
  // freestorage: any;
  // storagepercentage: any;
  // usedstorage: any;
  // usedstoragepercentage: any;
  flag = false;

  dashboard;
  uniqueEntity = [];
  perEntityData = []
  tempArr;
  entityWithSign = [];

  encodeData: any = [];
  showScannedData = false;
  scannedData: {};
  barcodeScannerOptions: BarcodeScannerOptions;

  title = 'QR CODE';
  elementType = 'url';
  value;//=localStorage.getItem('citizen_id');
  // value1; value2;
  // value3;
  scanneddata: any = [];
  temp;
  databaseObj: SQLiteObject;//database instance object
  readonly table_name: string = "dashboard_data"; // Table name
  readonly database_name: string = "jawata_datatable.db";//DB name

  constructor(public popoverCtrl: PopoverController,
    private menuService: MenuService, private platform: Platform,
    private datepipe: DatePipe, private http: HTTP,
    private localNotifications: LocalNotifications,
    private translateConfigService: TranslateConfigService,
    private router: Router, private barcodeScanner: BarcodeScanner,
    private translate: TranslateService,
    private _location: Location,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar, private sqlite: SQLite,
    private file: File, private network: Network,
    private extendedDeviceInformation: ExtendedDeviceInformation,
    private camera: Camera,
    private transfer: FileTransfer
    , private webview: WebView) {

    // this.networkInfo();
    // this.systemInfo();
    // console.log('localStorage.getItem(profile_image_path)' + localStorage.getItem('profile_image_path'));
    console.log('localStorage.getItem(entityName)' + localStorage.getItem('entityName') + '---actorName :- ' + localStorage.getItem('actorName') + '--ClassName---' + localStorage.getItem('className') + 'localStorage.getItem(remembermechecked) :- ' + localStorage.getItem('remembermechecked'));
    if (localStorage.getItem('userType') == "Actor") {
      // for QR code value set
      // this.value = localStorage.getItem('userId') + ',' + localStorage.getItem('email') + ',' + localStorage.getItem('citizen_id') + ',' + `${environment.apiUrl}`;
      this.value = localStorage.getItem('citizen_id').toString() + ' ';
      console.log('dashboard citizen_id' + localStorage.getItem('citizen_id'))

      if (localStorage.getItem('entityName') == null || localStorage.getItem('className') == null) {
        this.showEntityModalPopup();
      }
    }
    else {
      if (localStorage.getItem('entityName') == null || localStorage.getItem('actorName') == null || localStorage.getItem('className') == null) {
        this.showEntityModalPopup();
      }
    }

    this.encodeData = {
      'actorId': localStorage.getItem('userId'),
      'email': localStorage.getItem('email'),
      'citizen_id': localStorage.getItem('citizen_id'),
      'server': `${environment.apiUrl}`
    };

    //Options
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };

    this.platform.ready().then(() => {
      // this.encodedText();
    });

  }


  ngOnInit() {
    // sso if cond check for add form :- false for listing
    localStorage.setItem('AddSSO', 'false');
    // after refresh it shows null for first time in subject screen
    localStorage.setItem('onClickSubjectName', 'false');
    this.platform.ready().then(() => {
      localStorage.setItem('loggedinflag', 'true');
      this.createDB();
      // this.devicememory();
      // call device backbtn functionality
      this.initializeBackButtonCustomHandler();

      // create directory for jawata and user to store profile images
      this.createdirjawata();

      // Get Notification List
      this.getNotification();

      // Get dashboard data
      this.getDashboardDetails();

      // call this method to fetch image and filename
      this.Imagepathcallfromserver();

      this.statusBar.styleDefault();
      setTimeout(() => {
        this.splashScreen.hide();
      }, 10000);
    });


    this.translate.use(this.selectedLanguage);
    this.translate.get('Dashboard').subscribe((res: string) => {
      this.heading = "";
      this.heading = res;
    });

    if (localStorage.getItem('notificationFlag') == 'true') {
      localStorage.removeItem('notificationFlag');
      localStorage.setItem('notificationFlag', 'false');

    }

    localStorage.setItem('routeurlsso', 'null');
    localStorage.setItem('routeurl', 'null');
    localStorage.setItem('routeurlaudit-trail', 'null');
    localStorage.setItem('routeurlresource-link', 'null');
    localStorage.setItem('routeurlfeedback', 'null');
  }

  Imagepathcallfromserver() {
    if (this.network.type != 'none') {
      var forrmdata = {
        'userId': localStorage.getItem('userId')
      }
      let headers = {
        'Content-Type': 'application/json'
      }
      console.log(`${environment.apiUrl}/api/image_info`, forrmdata);
      this.http.post(`${environment.apiUrl}/api/image_info`, forrmdata, headers).then((res: any) => {
        // console.log('dashboard API response  :-' + JSON.stringify(res));
        this.temp = [];
        this.temp = JSON.parse(res.data);
        console.log('dashboard this.temp :-' + JSON.stringify(this.temp));
        var fileName = this.temp.message;
        localStorage.setItem('filename', this.temp.message);
        let folderdir = 'Documents/Jawata/' + localStorage.getItem('userName') + '/';
        let storedpath = this.file.externalRootDirectory + folderdir + '/';
        var url = `${environment.apiUrl}/img/profile_images/` + fileName;

        this.file.checkDir(this.file.externalRootDirectory, folderdir.toString()).then(response => {

          const fileTransfer1: FileTransferObject = this.transfer.create();
          fileTransfer1.download(encodeURI(url), storedpath + fileName, true).then((entry) => {
            //console.log('this.fileTransfer.download (entry) if :-' + JSON.stringify(entry));
            console.log("dashboard Downloaded File Path :-" + entry.toURL());
            localStorage.setItem('entry_path', entry.toURL());
          });

        }, error => {
          this.createdirjawata();
          const fileTransfer1: FileTransferObject = this.transfer.create();
          fileTransfer1.download(encodeURI(url), storedpath + fileName, true).then((entry) => {
            //console.log('this.fileTransfer.download (entry) if :-' + JSON.stringify(entry));
            console.log("dashboard Downloaded File Path :-" + entry.toURL());
            localStorage.setItem('entry_path', entry.toURL());
          });

        });

        if (localStorage.getItem('profile_image_path') != this.temp.data) {
          localStorage.setItem('profile_image_path', this.temp.data);
          window.location.reload(true);
        }

      }).catch(error => {
        console.log(" Error Here move file in API :-!" + JSON.stringify(error));
      });

    }
    else {
      const newBaseFilesystemPath = this.file.externalRootDirectory + 'Documents/Jawata/' + localStorage.getItem('userName') + '/';
      const storedPhoto = newBaseFilesystemPath + localStorage.getItem('filename');
      const displayImage = this.webview.convertFileSrc(storedPhoto);
      console.log('dashboard imagecall() displayImage :-' + displayImage);
      localStorage.setItem('profile_image_path', displayImage);
    }
  }

  createdirjawata() {
    this.platform.ready().then(() => {
      this.file.checkDir(this.file.externalRootDirectory, 'Documents').then(response => {
        console.log('Directory already present for this Jawata :- ' + response);

        this.file.checkDir(this.file.externalRootDirectory + 'Documents' + '/', 'Jawata').then(response => {
          console.log('Directory already present for this Jawata :- ' + response);

          this.file.checkDir(this.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/', localStorage.getItem('userName') + '/').then(response => {
            console.log('Directory already present for this userName :- ' + response);
          },
            error => {
              this.file.createDir(this.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/', localStorage.getItem('userName').toString(), false).then(response => {
                console.log('createDir for userName ', response);
              });
            });
        }, error => {
          // create directory for jawata 
          this.file.createDir(this.file.externalRootDirectory + 'Documents' + '/', 'Jawata', false).then(response => {
            console.log('createDir for jawata ', response);
            // create directory for username
            this.file.createDir(this.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/', localStorage.getItem('userName').toString(), false).then(response => {
              console.log('createDir for userid ', response);
            });
          });
        });

      },
        error => {
          this.file.createDir(this.file.externalRootDirectory, 'Documents', false).then(response => {
            console.log('createDir for jawata ', response);

            this.file.createDir(this.file.externalRootDirectory + 'Documents' + '/', 'Jawata', false).then(response => {
              console.log('createDir for jawata ', response);

              this.file.createDir(this.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/', localStorage.getItem('userName').toString(), false).then(response => {
                console.log('createDir for userid ', response);

              });

            });
          });

          this.file.createDir(this.file.externalRootDirectory + 'Documents' + '/', 'Jawata', false).then(response => {
            console.log('createDir for jawata ', response);
          });

          this.file.createDir(this.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/', localStorage.getItem('userName').toString(), false).then(response => {
            console.log('createDir for userid ', response);
          });
        });
    });
  }

  scanQRcode() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);

      // this.scannedData.push(barcodeData.text)
      //({
      //"citizenid":barcodeData.text
      //})

    }).catch(err => {
      console.log('Error', err);
    });
  }

  encodedText() {
    this.barcodeScanner
      .encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodeData)
      .then(
        encodedData => {
          alert('encodedData' + encodedData);
          console.log('encodedData' + encodedData + '--Json encodedData :-' + JSON.stringify(encodedData));
          //this.encodeData = encodedData;
        },
        err => {
          console.log("Error occured : " + JSON.stringify(err));
        }
      );
  }



  // devicememory() {
  // this.totalstorage = Math.round(cordova.plugins['extended-device-information'].totalstorage / 1024);
  // this.freestorage = Math.round(cordova.plugins['extended-device-information'].freestorage / 1024);
  // this.usedstorage = Math.round(this.totalstorage - this.freestorage);
  // this.usedstoragepercentage = Math.round((this.usedstorage / this.totalstorage) * 100);
  //     alert('this.totalstorage' + cordova.plugins['extended-device-information'].totalstorage + '--this.freestorage :-' + cordova.plugins['extended-device-information'].freestorage +  '-- memory ---' + cordova.plugins['extended-device-information'].memory);
  //     //alert('this.totalstorage' + cordova.plugins['extended-device-information'].totalstorage + '--this.freestorage :-' + cordova.plugins['extended-device-information'].freestorage + '--- this.storagepercentage:-' + this.storagepercentage + '--this.usedstorage:-' + this.usedstorage + '--memory---' + Math.round(cordova.plugins['extended-device-information'].memory / 1024));
  // alert('totalstorage'+ this.extendedDeviceInformation.totalstorage);
  //  alert('freestorage'+ this.extendedDeviceInformation.freestorage);
  //  alert('memory'+ this.extendedDeviceInformation.memory);

  // alert( 'this.extendedDeviceInformation[totalstorage] :-' + this.extendedDeviceInformation['totalstorage']);
  //   }

  initializeBackButtonCustomHandler(): void {
    this.platform.backButton.subscribeWithPriority(999990, () => {
      //alert('dashboard :'+localStorage.getItem('bckbtnpage'));
      if (localStorage.getItem('currenturl') == localStorage.getItem('currenturl')) {
        navigator['app'].exitApp();
      }
      if (localStorage.getItem('currenturl').toString().split('/')[1] == 'dashboard') {
        navigator['app'].exitApp();
      }
      else {
        this._location.back();
        //this.router.navigate([localStorage.getItem('bckbtnpage').toString().split('/')[1]]);
      }
    });
  }

  async showEntityModalPopup() {
    const popover = await this.popoverCtrl.create({
      component: EntitymodalPage,
      translucent: true,
      backdropDismiss: false,
      // event: value,
    });
    return await popover.present();
  }

  getNotification() {

    /**For web API called Here  */

    // this.menuService.getNotification(localStorage.getItem('entityId'), localStorage.getItem('userId')).subscribe(data => {
    //   this.notification = data;
    //   console.log("notification is ==", this.notification)
    // })

    var data = {
      'userId': localStorage.getItem('userId')
    }

    var headers = {
      'Content-Type': 'application/json'
    }
    console.log(`${environment.apiUrl}/api/notification`, JSON.stringify(data));
    this.http.post(`${environment.apiUrl}/api/notification`, data, headers).then(res => {

      // alert("Notification res.data :-" + res.data);
      this.notification = []
      this.notification = JSON.parse(res.data);
      console.log('this.notification' + JSON.stringify(this.notification))
      this.notificationDetails = [];
      for (var i = 0; i < this.notification.length; i++) {
        this.notificationDetails.push({
          id: i + 1,
          title: ' Subject ' + this.notification[i]['subject_name'] + ' has been created',
          text: ' In class ' + this.notification[i]['class_reference'] + ' ' + this.notification[i]['class_grade'] + ' Entity is ' + this.notification[i]['entity_name'],
          // color: 'FF0000',
          icon: 'res://drawable-hdpi/notification.png',
          smallIcon: 'res://drawable-hdpi/notification_small_icon',
        })
      }
      // alert("this.notificationDetails.length is =" + this.notificationDetails.length);
      this.localNotifications.schedule(this.notificationDetails);
    })
      .catch(error => {
        // alert("Notification Error Here !");
      });
  }

  getDashboardDetails() {

    /**Web API Called Here */
    // this.menuService.getDashboardData(localStorage.getItem('userId')).subscribe(data => {

    //   var temp;
    //   temp = [];

    //   temp = data;

    //   this.dashboard = [];
    //   this.dashboard = temp.data;

    //   var tempArr = [];
    //   tempArr = [];
    //   for (var i = 0; i < this.dashboard.length; i++) {
    //     tempArr.push(this.dashboard[i]['entity_name'])
    //   }

    //   this.uniqueEntity = [];
    //   this.uniqueEntity = Array.from(new Set(tempArr))
    // })

    if (this.network.type != 'none') {

      if (localStorage.getItem('userType') == 'Actor') {
        var data = {
          'userId': localStorage.getItem('userId')
        }

      } else if (localStorage.getItem('userType') == "Actor's Parent") {
        var data = {
          'userId': localStorage.getItem('actorId')
        }
      }

      var headers = {
        'Content-Type': 'application/json'
      }
      console.log(`${environment.apiUrl}/api/actor_dashboard`, JSON.stringify(data));
      this.http.post(`${environment.apiUrl}/api/actor_dashboard`, data, headers).then(res => {
        // console.log('temp'+ JSON.stringify(res.data));
        var temp;
        temp = [];
        temp = JSON.parse(res.data);

        this.dashboard = [];
        this.dashboard = temp.data;

        var tempArr = [];
        tempArr = [];
        for (var i = 0; i < this.dashboard.length; i++) {
          tempArr.push(this.dashboard[i]['entity_name'])
        }

        // get unique entity here
        this.uniqueEntity = []
        this.uniqueEntity = Array.from(new Set(tempArr))
        this.entityWithSign = [];

        for (var i = 0; i < this.uniqueEntity.length; i++) {
          this.entityWithSign.push(
            {
              'entityName': this.uniqueEntity[i],
              'sign': '+'
            }
          )
        }

        /** check data is present in table and store data  */
        this.platform.ready().then(() => {
          this.sqlite.create({
            name: this.database_name,
            location: 'default'
          }).then((db: SQLiteObject) => {
            this.databaseObj = db;
            this.databaseObj.executeSql("SELECT * FROM " + this.table_name + " WHERE userId=?", [localStorage.getItem('userId')]).then((result) => {
              // alert('result is :-' + result.rows.length);

              if (result.rows.length == 0) {
                this.insertRow();
              }
              else {
                this.databaseObj.executeSql("DELETE FROM " + this.table_name + " WHERE userId=?", [localStorage.getItem('userId')]).then((res) => {
                  // alert('row deleted successfully...');
                  this.insertRow();
                });
              }
            });
          }).catch(e => {
            console.log("Error to Database Create ! " + JSON.stringify(e));
          });
        });

      }).catch(error => {
        console.log("actor_dashboard Error :-" + JSON.stringify(error));
      });
    } else {

      this.platform.ready().then(() => {
        this.sqlite.create({
          name: this.database_name,
          location: 'default'
        }).then((db: SQLiteObject) => {
          this.databaseObj = db;
          this.getRows();
        }).catch(e => {
          console.log("Error to Database Create ! " + JSON.stringify(e))
        });
      });
    }
  }

  tempVar = "";

  entityWiseData(entity, index) {

    this.perEntityData = [];
    this.tempVar = "";

    for (var i = 0; i < this.dashboard.length; i++) {
      if (entity == this.dashboard[i]['entity_name']) {
        this.perEntityData.push(this.dashboard[i]);
        this.tempVar = "";
      }
    }

    this.tempArr = [];
    this.tempArr = this.entityWithSign;
    this.entityWithSign = [];

    for (var i = 0; i < this.tempArr.length; i++) {

      if (this.tempArr[i]['sign'] == '-' && this.tempArr[i]['entityName'] == entity) {
        this.perEntityData = []
        this.tempVar = "";
        this.tempVar = "-";
      }

      if (this.tempArr[i]['sign'] == '+' && this.tempArr[i]['entityName'] == entity) {
        this.entityWithSign.push(
          {
            'entityName': this.tempArr[i]['entityName'],
            'sign': '-'
          }
        )
      }
      else {
        this.entityWithSign.push(
          {
            'entityName': this.tempArr[i]['entityName'],
            'sign': '+'
          }
        )
      }
    }


    // for (var i = 0; i < this.tempArr.length; i++) {

    //   if (this.tempArr[i]['sign'] == '-' && this.tempArr[i]['entityName'] == entity) {
    //     this.perEntityData = []
    //     this.tempVar = "";
    //     this.tempVar = "-";
    //   }

    // }


    if (this.tempVar != "-" && entity != "" && this.perEntityData.length == 0) {

      this.translate.get('There is no class under this entity').subscribe((res: string) => {
        alert(res)
      });
    }
  }



  createDB() {
    this.sqlite.create({
      name: this.database_name,
      location: 'default'
    }).then((db: SQLiteObject) => {
      this.databaseObj = db;
      this.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' + this.table_name + ' (id INTEGER PRIMARY KEY AUTOINCREMENT, userId varchar(2), file_name varchar(2), file_priority varchar(2), file_size varchar(2), file_type varchar(2), is_download varchar(2), class_ref varchar(2), subject_name varchar(2), entity_name varchar(2))', [])
        .then(() => {
          // if (this.network.type == 'none') {
          //   this.getRows();
          // }
        })
        .catch(e => {
          console.log("Error to Create Profile Table !" + JSON.stringify(e))
        });
    })
      .catch(e => {
        console.log("Error to Database Create ! " + JSON.stringify(e))
      });
  }


  insertRow() {
    this.platform.ready().then(() => {
      for (var i = 0; i < this.dashboard.length; i++) {
        this.databaseObj.executeSql('INSERT INTO ' + this.table_name + ' (userId, file_name, file_priority, file_size, file_type, is_download, class_ref, subject_name, entity_name) VALUES ("' + localStorage.getItem('userId') + '","' +
          this.dashboard[i]['file_name'] + '","' +
          this.dashboard[i]['file_priority'] + '","' +
          this.dashboard[i]['file_size'] + '","' +
          this.dashboard[i]['file_type'] + '","' +
          this.dashboard[i]['is_download'] + '","' +
          this.dashboard[i]['class_ref'] + '","' +
          this.dashboard[i]['subject_name'] + '","' +
          this.dashboard[i]['entity_name'] + '")', [])
          .then(() => {
            // alert('Row Inserted!' + this.table_name);
            //this.getRows();
          }).catch(e => {
            console.log("Error Is insert Rows:- " + JSON.stringify(e))
          });
      }
    });
  }

  getRows() {

    this.platform.ready().then(() => {
      this.databaseObj.executeSql("SELECT * FROM " + this.table_name + " WHERE userId=?", [localStorage.getItem('userId')]).then((res) => {
        // alert('result' + res.rows.length);
        if (res.rows.length > 0) {
          this.dashboard = [];
          for (var i = 0; i < res.rows.length; i++) {
            this.dashboard.push(res.rows.item(i));
          }
        }

        var tempArr = [];
        tempArr = [];
        for (var i = 0; i < this.dashboard.length; i++) {
          tempArr.push(this.dashboard[i]['entity_name'])
        }

        // get unique entity here
        this.uniqueEntity = []
        this.uniqueEntity = Array.from(new Set(tempArr))

        this.entityWithSign = [];

        for (var i = 0; i < this.uniqueEntity.length; i++) {
          this.entityWithSign.push(
            {
              'entityName': this.uniqueEntity[i],
              'sign': '+'
            }
          )
        }

      });
    });

  }



}



  //   systemInfo() {
  //     Background.runtime.sendMessage("chrome extension id",
  //             {type: 'systemInfo', id: 1}, null,
  //             function (data) {
  //                 console.log(data);
  //             }
  //     );
  // }
  // networkInfo() {

  //   Background.runtime.sendMessage("chrome extension id",
  //           {type: 'memory', id: 1}, null,
  //           function (data) {
  //               console.log(data);
  //           }
  //   );
  // }
