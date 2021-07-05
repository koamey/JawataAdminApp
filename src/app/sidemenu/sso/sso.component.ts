import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { environment } from 'src/environments/environment';
import { HTTP } from '@ionic-native/http/ngx';
import { TranslateConfigService } from 'src/app/translate-config.service';
import { Platform, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { NetworkInterface } from '@ionic-native/network-interface/ngx';
import { Network } from '@ionic-native/network/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Component({
  selector: 'app-sso',
  templateUrl: './sso.component.html',
  styleUrls: ['./sso.component.scss'],
})

export class SsoComponent implements OnInit {

  ssoForm: FormGroup;
  isSubmitted = false;

  SSOVar = "";
  descriptionVar = "";
  textURL = "";
  userIdvar = "";
  passwordVar = "";
  ssoListing;
  type = "";
  ssoId;
  filter = "";
  heading = this.translateConfigService.get('Resources with ID access');
  keysToExclude: any[] = ['ssoId', 'ssoDesc', 'ssoUrl', 'checked'];
  ssoIDList = [];
  data;
  title = "";
  yesVar = "";
  noVar = "";
  selectedLanguage = localStorage.getItem('selectedL');
  deviceid: any;
  IPAddress = "";
  row_data = [];

  hideDeletePopup = false;
  ssoHeader = true;
  ssoAddHeader = false;
  ssoDetails = true;
  AddSSO = false;
  hideAddButton = true;

  databaseObj: SQLiteObject;//database instance object
  readonly table_name: string = "ssoListingData"; // Table name
  readonly database_name: string = "jawata_datatable.db";//DB name

  constructor(private platform: Platform,
    private menuService: MenuService, public formBuilder: FormBuilder,
    private http: HTTP, private alertCtrl: AlertController,
    private translateConfigService: TranslateConfigService,
    private router: Router, private translate: TranslateService,
    private uniqueDeviceID: UniqueDeviceID, private networkInterface: NetworkInterface,
    private _location: Location, private network: Network,
    private sqlite: SQLite, ) {

    this.platform.ready().then(() => {
      this.createDB();
      this.getIPAddress();
      this.initializeBackButtonCustomHandler();
      this.getuniqueDeviceID();
      this.getSSOListing();
    }).catch(error => { console.log('SSO' + error) });
  }

  ngOnInit() {

    this.ssoForm = this.formBuilder.group({
      ssoName: ['', [Validators.required]],
      ssoDescription: ['', [Validators.required]],
      ssoURL: ['', [Validators.required, Validators.pattern('(?:(?:(?:ht|f)tp)s?://)?[\\w_-]+(?:\\.[\\w_-]+)+([\\w.,@?^=%&:/~+#-]*[\\w@?^=%&/~+#-])?')]],
      ssoUserId: ['', [Validators.required]],
      ssoPassword: ['', [Validators.required]],
    })

    if (localStorage.getItem('routeurlsso') === null || localStorage.getItem('routeurlsso') === 'null') {
      localStorage.setItem('routeurlsso', 'sso');
      localStorage.setItem('routeurl', 'null');
      localStorage.setItem('routeurlaudit-trail', 'null');
      localStorage.setItem('routeurlresource-link', 'null');
      localStorage.setItem('routeurlfeedback', 'null');
    }

    /** heading name change after select language */
    this.translate.use(this.selectedLanguage);
    this.translate.get('Resources with ID access').subscribe((res: string) => {
      this.heading = "";
      this.heading = res;
    });

    /**If userType is "Actor's Parent" then AddSSO disabled */
    /** Parent can create the add sso */
    // if (localStorage.getItem('userType') == "Actor's Parent") {
    //   this.hideAddButton = false;
    // }
  }

  get errorControl() {
    return this.ssoForm.controls;
  }

  initializeBackButtonCustomHandler(): void {
    this.platform.backButton.subscribeWithPriority(999999, () => {
      if (localStorage.getItem('currenturl').toString().split('/')[1] == 'dashboard') {
        navigator['app'].exitApp();
      }
      else if (localStorage.getItem('AddSSO').toString() == "true") {
        this.ssoHeader = true;
        this.ssoAddHeader = false;
        this.ssoDetails = true;
        this.AddSSO = false;
        localStorage.setItem('AddSSO', 'false');
      }
      else {
        this._location.back();
        //this.router.navigate([localStorage.getItem('bckbtnpage').toString().split('/')[1]]);
      }
    });
  }

  getuniqueDeviceID() {
    this.uniqueDeviceID.get().then(
      (uuid: any) => this.deviceid = uuid)
      .catch((error: any) => console.log(error));
  }

  getIPAddress() {
    if (this.network.type != 'none') {
      this.networkInterface.getCarrierIPAddress()
        .then(address =>
          this.IPAddress = (`${address.ip}`)
        ).catch();
    }
    if (this.network.type === 'wifi') {
      this.networkInterface.getWiFiIPAddress()
        .then(address => this.IPAddress = (`${address.ip}`))
        .catch(error => console.error(`Unable to get IP: ${error}`)
        );
    }
  }

  doRefresh(event) {
    this.getSSOListing();
    event.target.complete();
  }

  trimSearchValues(value) {
    this.filter = value.trim();
  }

  onClickAddSSO() {

    if (this.network.type != "none") {
      this.isSubmitted = false;
      this.ssoHeader = false;
      this.ssoAddHeader = true;
      this.ssoDetails = false;
      this.AddSSO = true;
      this.ssoId = "";
      this.SSOVar = "";
      this.descriptionVar = "";
      this.textURL = "";
      this.userIdvar = "";
      this.passwordVar = "";
      this.type = "Insert";
      localStorage.setItem('AddSSO', "true");
    } else {
      this.translate.use(this.selectedLanguage);
      this.translate.get('Before to add Resource with ID Name, Please connect internet connection').subscribe((res) => {
        alert(res);
      });
    }
  }

  onClickBackButton() {
    this.ssoHeader = true;
    this.ssoAddHeader = false;
    this.ssoDetails = true;
    this.AddSSO = false;
    localStorage.setItem('AddSSO', "false");
  }

  onClickCancel() {
    this.ssoHeader = true;
    this.ssoDetails = true;
    this.ssoAddHeader = false;
    this.AddSSO = false;

    this.textURL = "";
    this.ssoId = "";
    this.SSOVar = "";
    this.descriptionVar = "";
    this.textURL = "";
    this.userIdvar = "";
    this.passwordVar = "";
    this.isSubmitted = false;

    for (var i = 0; i < this.ssoListing.length; i++) {
      this.ssoListing[i]['checked'] = false;
    }
  }

  onSubmitSSO() {

    this.isSubmitted = true;
    if (!this.ssoForm.valid) {
      return false;
    } else {

      if (this.network.type != "none") {
        if (this.type == 'Insert') {

          /**Web API Called Here */
          // this.menuService.ssoInsert(this.SSOVar, this.descriptionVar, this.textURL, this.userIdvar, this.passwordVar).subscribe(data => {

          //   this.ssoHeader = true;
          //   this.ssoDetails = true;
          //   this.ssoAddHeader = false;
          //   this.AddSSO = false;

          //   this.ssoId = "";
          //   this.SSOVar = "";
          //   this.descriptionVar = "";
          //   this.textURL = "";
          //   this.userIdvar = "";
          //   this.passwordVar = "";
          //   this.type = "";
          //   this.getSSOListing();
          // })

          var data = {
            'userId': localStorage.getItem('userId'),
            'entityId': localStorage.getItem('entityId'),
            'userType': localStorage.getItem('userType'),
            'txtsso_name': this.SSOVar,
            'txtsso_description': this.descriptionVar,
            'txtsso_url': this.textURL,
            'txtuser_id': this.userIdvar,
            'txtpassword': this.passwordVar
          }
          var headers = {
            'Content-Type': 'application/json'
          }

          this.http.post(`${environment.apiUrl}/api/ssoInsert`, data, headers).then(res => {

            // alert("sso insert is :-" + res.data);

            this.ssoHeader = true;
            this.ssoDetails = true;
            this.ssoAddHeader = false;
            this.AddSSO = false;

            localStorage.setItem('AddSSO', "false");
            this.ssoId = "";
            this.SSOVar = "";
            this.descriptionVar = "";
            this.textURL = "";
            this.userIdvar = "";
            this.passwordVar = "";
            this.type = "";
            this.getSSOListing();
          }).catch(error => {
            // alert("SSO Insert Error !");
          });

        } else if (this.type = 'Modify') {

          /**Web API Called Here */
          // this.menuService.modifySSO(localStorage.getItem('userType'), this.ssoId, this.SSOVar, this.descriptionVar, this.textURL, this.userIdvar, this.passwordVar).subscribe(data => {

          //   this.ssoHeader = true;
          //   this.ssoDetails = true;
          //   this.ssoAddHeader = false;
          //   this.AddSSO = false;

          //   this.ssoId = "";
          //   this.SSOVar = "";
          //   this.descriptionVar = "";
          //   this.textURL = "";
          //   this.userIdvar = "";
          //   this.passwordVar = "";
          //   this.type = "";
          //   this.getSSOListing();
          // })

          if (localStorage.getItem('userType') == "Actor's Parent") {
            this.data = {
              "actor_id": localStorage.getItem('actorId'),
              "userType": localStorage.getItem('userType'),
              'entityId': localStorage.getItem('entityId'),
              'entity_id': localStorage.getItem('entityId'),
              "createdBy": this.ssoId,
              'userId': this.ssoId,
              'txtsso_name': this.SSOVar,
              'txtsso_description': this.descriptionVar,
              'txtsso_url': this.textURL,
              'txtuser_id': this.userIdvar,
              'txtpassword': this.passwordVar
            }
          } else {
            this.data = {
              "userType": localStorage.getItem('userType'),
              'entityId': localStorage.getItem('entityId'),
              'entity_id': localStorage.getItem('entityId'),
              "createdBy": this.ssoId,
              'userId': this.ssoId,
              'txtsso_name': this.SSOVar,
              'txtsso_description': this.descriptionVar,
              'txtsso_url': this.textURL,
              'txtuser_id': this.userIdvar,
              'txtpassword': this.passwordVar
            }
          }

          var headers = {
            'Content-Type': 'application/json'
          }

          this.http.post(`${environment.apiUrl}/api/ssoUpdate`, this.data, headers).then(res => {
            // alert("SSO Modify res.data :-" + res.data);
            this.ssoHeader = true;
            this.ssoDetails = true;
            this.ssoAddHeader = false;
            this.AddSSO = false;

            this.ssoId = "";
            this.SSOVar = "";
            this.descriptionVar = "";
            this.textURL = "";
            this.userIdvar = "";
            this.passwordVar = "";
            this.type = "";
            this.getSSOListing();
          }).catch(error => {
            // alert("SSO Modify Error !");
          });
        }
      } else {
        this.translate.use(this.selectedLanguage);
        this.translate.get('Before to submit Resource with ID Name, Please connect internent connection').subscribe((res) => {
          alert(res);
        });

      }
    }
  }

  getSSOListing() {

    /**For Web API Call */
    // this.menuService.getSSO(localStorage.getItem('userId'), localStorage.getItem('entityId'), localStorage.getItem('userType')).subscribe(data => {
    //   this.ssoListing = []
    //   this.ssoListing = data
    // })
    if (this.network.type != 'none') {
      if (localStorage.getItem('userType') == "Actor's Parent") {
        this.data = {
          "actor_id": localStorage.getItem('actorId'),
          'userId': localStorage.getItem('userId'),
          'entityId': localStorage.getItem('entityId'),
          'userType': localStorage.getItem('userType'),
        }
      } else {
        this.data = {
          'userId': localStorage.getItem('userId'),
          'entityId': localStorage.getItem('entityId'),
          'userType': localStorage.getItem('userType'),
        }
      }

      var headers = {
        'Content-Type': 'application/json'
      }

      console.log(`${environment.apiUrl}/api/ssoListing`, JSON.stringify(this.data));
      this.http.post(`${environment.apiUrl}/api/ssoListing`, this.data, headers).then(res => {
        this.ssoListing = []
        this.ssoListing = JSON.parse(res.data);

        /** check data is present in table and store data  */
        this.platform.ready().then(() => {
          this.sqlite.create({
            name: this.database_name,
            location: 'default'
          }).then((db: SQLiteObject) => {
            this.databaseObj = db;
            this.databaseObj.executeSql("SELECT * FROM " + this.table_name + " WHERE userId=? AND entityId=?", [localStorage.getItem('userId'), localStorage.getItem('entityId')]).then((result) => {
              //alert('result' + result.rows.length);
              if (result.rows.length == 0) {
                this.insertRow();
              }
              else {
                this.databaseObj.executeSql("DELETE FROM " + this.table_name + " WHERE userId=? AND entityId=?", [localStorage.getItem('userId'), localStorage.getItem('entityId')]).then((res) => {
                  //alert('row deleted successfully...');
                  this.insertRow();
                });
              }
            });
          }).catch(e => {
            // alert("Error to Database Create ! " + JSON.stringify(e))
          });
        });
        //this.insertRow();

      }).catch(error => {
        // alert("SSO List Error !");
      });
    }
    else {
      this.platform.ready().then(() => {
        this.sqlite.create({
          name: this.database_name,
          location: 'default'
        }).then((db: SQLiteObject) => {
          this.databaseObj = db;
          this.getRows();
        }).catch(e => {
          //alert("Error to Database Create ! " + JSON.stringify(e))
        });
      });
    }
  }

  editSSOData(ssoId) {

    /**For Web API Call */

    // this.menuService.editSSO(ssoId).subscribe(data => {

    //   this.AddSSO = true;
    //   this.ssoDetails = false;
    //   this.ssoId = "";
    //   this.SSOVar = "";
    //   this.descriptionVar = "";
    //   this.textURL = "";
    //   this.userIdvar = "";
    //   this.passwordVar = "";
    //   this.type = "Modify";

    //   this.ssoId = data[0]['sso_id']
    //   this.SSOVar = data[0]['sso_name']
    //   this.descriptionVar = data[0]['sso_description']
    //   this.textURL = data[0]['sso_url']
    //   this.userIdvar = data[0]['user_id']
    //   this.passwordVar = data[0]['password']
    // })

    if (this.network.type != "none") {

      var data = {
        'userId': ssoId
      }

      var headers = {
        'Content-Type': 'application/json'
      }
      localStorage.setItem('AddSSO', "true");
      this.http.post(`${environment.apiUrl}/api/ssoEdit`, data, headers).then(res => {
        // alert("SSO Edit res.data :-" + res.data);

        var temp;
        temp = [];
        temp = JSON.parse(res.data)

        this.AddSSO = true;
        this.ssoDetails = false;

        this.ssoId = "";
        this.SSOVar = "";
        this.descriptionVar = "";
        this.textURL = "";
        this.userIdvar = "";
        this.passwordVar = "";
        this.type = "Modify";

        this.ssoId = temp[0]['sso_id']
        this.SSOVar = temp[0]['sso_name']
        this.descriptionVar = temp[0]['sso_description']

        this.textURL = temp[0]['sso_url']
        this.userIdvar = temp[0]['user_id']
        this.passwordVar = temp[0]['password']
      }).catch(error => {
        // alert("SSO Edit Error !");
      });
    } else {
      this.translate.use(this.selectedLanguage);
      this.translate.get('Before to Edit Resource with ID Name, Please connect internet connection').subscribe((res) => {
        alert(res);
      });
    }
  }

  onClickChechbox(value, item) {
    for (var i = 0; i < this.ssoListing.length; i++) {
      if (value == false && item.ssoId == this.ssoListing[i]['ssoId']) {
        this.ssoListing[i]['checked'] = true;
      } else if (value == true && item.ssoId == this.ssoListing[i]['ssoId']) {
        this.ssoListing[i]['checked'] = false;
      }
    }

    this.ssoIDList = [];
    this.hideDeletePopup = false;

    for (var i = 0; i < this.ssoListing.length; i++) {
      if (this.ssoListing[i]['checked'] == true) {
        this.ssoIDList.push(this.ssoListing[i]['ssoId']);
        this.hideDeletePopup = true;
      }
    }
  }

  onClickGetURL(ssoId, ssoName, ssoDesc, ssoUrl, user_id, password) {

    localStorage.setItem('AddSSO', "true");

    if (this.network.type != "none") {
      if (user_id == "" && password == "") {

        /**If "user_id" & "password" is null then show alert */
        this.translate.use(this.selectedLanguage);
        this.translate.get("Before accesing this service please set your User ID and Password for it").subscribe((res: string) => {
          alert(res);
        });

        this.ssoHeader = false;
        this.ssoAddHeader = true;
        this.ssoDetails = false;
        this.AddSSO = true;

        this.ssoId = "";
        this.SSOVar = "";
        this.descriptionVar = "";
        this.textURL = "";
        this.userIdvar = "";
        this.passwordVar = "";
        this.type = "Modify";

        this.ssoId = ssoId
        this.SSOVar = ssoName
        this.descriptionVar = ssoDesc
        this.textURL = ssoUrl
        this.userIdvar = user_id
        this.passwordVar = password

      } else if (user_id != "" && password != "") {

        if (this.deviceid == undefined) {
          this.getuniqueDeviceID();
        }
        else {
          this.getIPAddress();

          var data = {
            "user_id": localStorage.getItem('userId'),
            "action_id": ssoId,
            "userType": localStorage.getItem('userType'),
            "entity_id": localStorage.getItem('entityId'),
            "deviceid": this.deviceid,
            "ip_address": this.IPAddress
          }
          var headers = {
            'Content-Type': 'application/json'
          }
          // alert("Data is :-" + JSON.stringify(data));
          this.http.post(`${environment.apiUrl}/api/sso_log`, data, headers).then(res => {
            //alert("SSO Access res is :-" + res + '--- ssourl --' + ssoUrl);
            window.open(ssoUrl)
          }).catch(error => {
            // alert("Error to SSO Access :- " + JSON.stringify(error));
          });
        }
      }
    } else {
      this.translate.use(this.selectedLanguage);
      this.translate.get('Before to Access Resource with ID Name, Please connect internet connection').subscribe((res) => {
        alert(res);
      });

    }
  }

  async showConfirmAlert() {


    if (this.network.type != "none") {
      if (this.hideDeletePopup == true) {

        this.translate.use(this.selectedLanguage);
        this.translate.get("Are you sure you want to delete ?").subscribe((res: string) => {
          this.title = "";
          this.title = res;
        });

        this.translate.get("Yes").subscribe((res: string) => {
          this.yesVar = "";
          this.yesVar = res;
        });

        this.translate.get("No").subscribe((res: string) => {
          this.noVar = "";
          this.noVar = res;
        });


        let alertConfirm = this.alertCtrl.create({
          header: this.title,
          buttons: [
            {
              text: this.noVar,
              role: 'cancel',
              handler: () => {
              }
            },
            {
              text: this.yesVar,
              handler: () => {
                var ssoIDListJSON = JSON.stringify(this.ssoIDList);
                var data = {
                  'ssoId': ssoIDListJSON,
                  'entityId': localStorage.getItem('entityId'),
                  'entity_id': localStorage.getItem('entityId'),
                  'userType': localStorage.getItem('userType'),
                  'userId': localStorage.getItem('userId'),
                }
                var headers = {
                  'Content-Type': 'application/json'
                }

                // alert("data SSO Delete :-" + JSON.stringify(data));

                this.http.post(`${environment.apiUrl}/api/ssoDelete`, data, headers).then(res => {
                  // alert("ssoDelete res is:-" + JSON.stringify(res));
                  ssoIDListJSON = "";
                  this.hideDeletePopup = false;

                  /** Get SSO List Here*/
                  this.getSSOListing();
                }).catch(error => {
                  // alert("SSO Delete Error :- " + JSON.stringify(error));
                });
              }
            },
          ]
        });
        (await alertConfirm).present();
      } else {
        // alert("Please select SSO from list to Delete");
        this.translate.use(this.selectedLanguage);
        this.translate.get("Please select Resource with ID Name from list to Delete").subscribe((res: string) => {
          alert(res);
        });
      }
    } else {
      this.translate.use(this.selectedLanguage);
      this.translate.get('Before to Delete Resource with ID Name, Please connect internet connection').subscribe((res) => {
        alert(res);
      });

    }
  }


  /**Offline App Code Start Here */

  createDB() {
    this.sqlite.create({
      name: this.database_name,
      location: 'default'
    }).then((db: SQLiteObject) => {
      this.databaseObj = db;
      this.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' + this.table_name + ' (id INTEGER PRIMARY KEY AUTOINCREMENT,userId varchar(2), entityId varchar(2), ssoId varchar(2), ssoName varchar(2), ssoUrl varchar(2) )', [])
        .then(() => {
          // if (this.network.type == 'none') {
          //   this.getRows();
          // }
        })
        .catch(e => {
          // alert("Error to Create Profile Table !" + JSON.stringify(e))
        });
    })
      .catch(e => {
        // alert("Error to Database Create ! " + JSON.stringify(e))
      });
  }

  insertRow() {
    this.platform.ready().then(() => {
      for (var i = 0; i < this.ssoListing.length; i++) {
        this.databaseObj.executeSql('INSERT INTO ' + this.table_name + ' (userId, entityId, ssoId, ssoName, ssoUrl) VALUES ("' + localStorage.getItem('userId') + '","' + localStorage.getItem('entityId') + '","' + this.ssoListing[i]['ssoId'] + '","' + this.ssoListing[i]['ssoName'] + '","' + this.ssoListing[i]['ssoUrl'] + '")', [])
          .then(() => {
            //alert('Row Inserted!' + this.table_name);
            //this.getRows();
          }).catch(e => {
            //alert("Error Is insert Rows:- " + JSON.stringify(e))
          });
      }
    });
  }

  getRows() {

    this.platform.ready().then(() => {
      this.databaseObj.executeSql("SELECT * FROM " + this.table_name + " WHERE userId=? AND entityId=?", [localStorage.getItem('userId'), localStorage.getItem('entityId')]).then((res) => {
        // alert('SSO offline result' + res.rows.length);
        if (res.rows.length > 0) {
          this.ssoListing = [];
          for (var i = 0; i < res.rows.length; i++) {
            this.ssoListing.push(res.rows.item(i));
            //alert('this.ssoListing' + JSON.stringify(this.ssoListing) + 'entityid' + localStorage.getItem('entityId'));
          }
        }
      });
    });
  }


}