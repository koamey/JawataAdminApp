import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { LoginService } from 'src/app/services/login.service';
import { first, filter, pairwise } from 'rxjs/operators';
import { Storage } from '@ionic/storage'
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { environment } from 'src/environments/environment';
import { HTTP } from '@ionic-native/http/ngx';
import { Platform, LoadingController, AlertController } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { Network } from '@ionic-native/network/ngx';
import { NetworkInterface } from '@ionic-native/network-interface/ngx';

import { TranslateConfigService } from 'src/app/translate-config.service';
import { DatePipe, Location } from '@angular/common';
import { Router, RoutesRecognized } from '@angular/router';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { TranslateService } from '@ngx-translate/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { __awaiter, __await } from 'tslib';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { removeSummaryDuplicates } from '@angular/compiler';
import { error } from 'protractor';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Downloader, DownloadRequest, NotificationVisibility } from '@ionic-native/downloader/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Uid } from '@ionic-native/uid/ngx';
import { BarcodeScannerOptions, BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';
import { Console } from 'console';
import { stat } from 'fs';


// import { BarcodeFormat } from '@zxing/library';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss'],
})
export class SubjectsComponent implements OnInit {


  descending: boolean = false;
  isExist: boolean = false;
  order: number;
  column: string = 'name';
  dircreatedforJawata = false;
  dircreatedforEntity = false;
  dircreatedforClass = false;
  dircreatedforSubject = false;
  disableAttendance = false
  entryFlag = true
  exitFlag = true
  attendanceFlag = true
  attendancesheetCreate = false
  attendancesheet = false
  attainMark
  fileTransfer: FileTransferObject = this.transfer.create();
  selectedLanguage = localStorage.getItem('selectedL');
  loaderLanguage = "";
  selectedCheckBox: boolean;
  uniqueSubjectName;
  subjectName = [];
  isLoading = false;
  disable = false;

  header = true;
  subjectHeader = false;

  subName;
  subjectWiseArr;
  entityArr;
  entityName = "";
  filepath = "";
  filter = "";
  temp = [];
  IPAddress = "";
  fileName = "";
  subjectID = "";
  subjectDetailId = "";
  notificationDetails = [];
  notification;
  data;
  deviceid: any;

  flag = true;
  notificationId = 0;
  notificationFlag = true;
  haspermission = false;

  todaysDate = "";
  heading = this.translateConfigService.get('Attendance Sheet');
  keysToExclude: any[] = ['subjectId', 'subject_name'];

  row_data = [];
  permissonArray = [];


  databaseObj: SQLiteObject;
  readonly database_name: any = "Jawata_App.db";
  readonly table_name: string = "subjectListData";

  options: BarcodeScannerOptions = {
    preferFrontCamera: false,
    showFlipCameraButton: true,
    showTorchButton: true,
    disableSuccessBeep: true,
    torchOn: false,
    prompt: 'Place a QR code inside the scan area',
    resultDisplayDuration: 500,
    formats: 'EAN_13,EAN_8,QR_CODE,PDF_417 ',
    orientation: 'portrait',
    // saveHistory: true, // Android, save scan history (default false)
  };

  scannedData: any;
  encodedData: '';
  encodeData: any;
  inputData: any;
  qrResultString: string;
  categories = [
    {
      title: this.langTransalate('Present'),
      id: 0
    },
    {
      title: this.langTransalate('Absent'),
      id: 1
    },
    {
      title: this.langTransalate('Late'),
      id: 2
    },
    {
      title: this.langTransalate('Excused'),
      id: 3
    }];
  EntityID: string;
  classListArr: any[];
  subjectListArr: any[];
  defaultSubject: string;
  defaultClass: any;
  defaultEntity: any;
  AttendanceArr: any[];
  AttendanceListArr: any[];
  date: Date;
  attendance_id: any;
  AttendanceListArr2: any[];
  Attendance_Sheet_id: any;
  createdAttendanceArr: any;
  sendArr: any[];
  msgFlag: boolean = false;
  sendAPIMsg: any;
  selectedSchedules: any[];
  AttendanceScanArr: any[];
  defaultStatus: any = 'Present';
  citizenID: any;
  manualAttendance: string;
  selected: any;
  checked = [];
  EmptyArr: string;
  emptyData: any = false;
  send_attendance: any;
  emptyDataA: boolean = false;
  selecteddate: Date;
  CreatedTime: string;
  MultiButtonDisable: boolean = true;
  defaultAttendance: any;
  doneButtonString: string;
  AttendanceTempArr: any[];
  sendbutton: boolean = true;
  doneButton: boolean = true;
  datePickerTime: any = new Date();
  scanArr: boolean = true;
  checkdonebutton: string;
  subjectNameList: boolean;

  subjectWiseData: boolean;
  page: number = 20;
  temp1: any;
  page2: number = 20;
  disablebuttons: boolean = false;
  ;


  constructor(
    private barcodeScanner: BarcodeScanner,
    private transfer: FileTransfer, private file: File,
    private loginService: LoginService,
    private localNotifications: LocalNotifications,
    private http: HTTP, private menuService: MenuService,
    private storage: Storage,
    private nativeStorage: NativeStorage,
    private platform: Platform,
    private sqlite: SQLite,
    public loadingController: LoadingController,
    private fileOpener: FileOpener,
    private alertCtrl: AlertController,
    private network: Network,
    private datepipe: DatePipe,
    private translateConfigService: TranslateConfigService,
    private networkInterface: NetworkInterface,
    private router: Router, private translate: TranslateService,
    private _location: Location, private downloader: Downloader,
    private splashScreen: SplashScreen,
    private uniqueDeviceID: UniqueDeviceID,
    private androidPermissions: AndroidPermissions,
    private filePath: FilePath,
    private uid: Uid,
    private vibration: Vibration) {

    this.platform.ready().then(() => {
      //this.getuniqueDeviceID();
      //this.getID_UID('MAC');
      this.getID_UID('UUID');

      //this.getstoragepermission();
      this.createDB();
      //this.todaysDate = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
      // this.getSubjectName();
      this.getIPAddress();
      this.initializeBackButtonCustomHandler();
      this.createdirSubjects();
      //this.createdirJawata();  // create Jawata folder if exist throws error
      //this.createdirEntity();  // create Entity folderin Jawata dir if exist throws error
      // this.createdirClass();  // create class folderin Jawata/Entity dir if exist throws error

      //this.createdirectory();
    }).catch(error => { console.log('subjects' + error) });
  }

  clearResult(): void {
    this.qrResultString = null;
  }

  onCodeResult(resultString: string) {
    this.qrResultString = resultString;
  }
  scanBarcode() {
    if (localStorage.getItem('cameraActionID') == '1') {
      this.options.preferFrontCamera = true;
    } else {
      this.options.preferFrontCamera = false;
    }
    localStorage.setItem('scan', 'true')
    this.manualAttendance == 'ScaNAttendance'
    if (localStorage.getItem('scanAlarmID') == '0' || localStorage.getItem('scanAlarmID') == '2')
      this.options.disableSuccessBeep = false;

    this.barcodeScanner.scan(this.options).then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.scannedData = barcodeData;
      var data = {
        'attendanceSheetId': this.attendance_id,
        'selectedStatus': 'Present',
        'cureentUserId': localStorage.getItem('userId'),
        'actorId': localStorage.getItem('actorId'),
        'citizenId': barcodeData.text,
        "entityId": localStorage.getItem('entityId'),
        'locale': localStorage.getItem('selectedL')
      }
      console.log('scan API req', data)
      var headers = {
        'Content-Type': 'application/json'
      }
      if (barcodeData.text != "") {
        console.log('scan attendance API-- =' + `${environment.apiUrl}/api/scan_qr_code`, JSON.stringify(data));
        this.http.post(`${environment.apiUrl}/api/scan_qr_code`, data, headers).then(async res => {
          // this.showLoader();
          this.AttendanceScanArr = [];
          this.AttendanceScanArr = JSON.parse(res.data);
          console.log('AttendanceScanArr', this.AttendanceScanArr)
          console.log('this.Attendance-ID', this.attendance_id)
          this.loadAttendanceCreatedData(this.attendance_id)
          if (localStorage.getItem('scanAlarmID') != '0') { this.vibrate(); }
          if (this.AttendanceScanArr['actor_not_belong'] == true) {
            console.log('scan message', this.AttendanceScanArr['msg'])
            var temp = this.AttendanceScanArr['msg'];
            var temp1 = this.langTransalate('OK');
            let alert = await this.alertCtrl.create({
              message: temp,
              buttons: [{
                text: temp1,
                handler: () => {
                  this.loadAttendanceCreatedData(this.attendance_id)
                  if (localStorage.getItem('scanActionID') == '0') {
                    if (barcodeData.cancelled == true)
                      return false
                    else
                      this.scanBarcode();
                  }

                }
              }]
            });
            alert.present();
          }
          else {
            if (localStorage.getItem('scanActionID') == '0') {
              if (barcodeData.cancelled == true)
                return false
              else
                this.scanBarcode();
            }

          }

        }).catch(error => {

          console.log("attendance listing second screen Error Here !" + JSON.stringify(error));
        });
      }
    }).catch(err => {
      console.log('Error in Barcode scanning', err);

    });
  }


  ngOnInit() {
    this.platform.ready().then(() => {
      //this.createdirectory();
      /** heading name change after select language */
      console.log('selecteddate ngOnInit', this.selecteddate)

      this.translate.use(this.selectedLanguage);
      this.translate.get('Attendance').subscribe((res: string) => {
        this.heading = "";
        this.heading = res;
      });
      // this.translate.get('Done').subscribe((res: string) => {
      //   this.heading = "";
      //   this.heading = res;
      // });
      // this.translate.get('Attendance').subscribe((res: string) => {
      //   this.heading = "";
      //   this.heading = res;
      // });
      this.translate.get('Done').subscribe((res: string) => {
        this.doneButtonString = "";
        this.doneButtonString = res;
      });

      if (localStorage.getItem('routeurl') === null || localStorage.getItem('routeurl') === 'null') {
        localStorage.setItem('routeurl', 'subjects');
        localStorage.setItem('routeurlsso', 'null');
        localStorage.setItem('routeurlaudit-trail', 'null');
        localStorage.setItem('routeurlresource-link', 'null');
        localStorage.setItem('routeurlfeedback', 'null');
      }

      this.ChooseOption('Attendance');
    });
  }
  langTransalate(changeText) {
    var localChnageText = changeText;
    this.translate.use(this.selectedLanguage);
    this.translate.get(changeText).subscribe((res: string) => {
      // this.heading = "";
      // this.heading = res;
      localChnageText = res;
    });
    console.log('localChnageText', localChnageText)
    return localChnageText;
  }
  getuniqueDeviceID() {
    this.uniqueDeviceID.get().then(
      (uuid: any) => this.deviceid = uuid)
      .catch((error: any) => console.log(error));
  }


  getID_UID(type) {
    // if(type == "IMEI"){
    //   return this.uid.IMEI;
    // }else if(type == "ICCID"){
    //   return this.uid.ICCID;
    // }else if(type == "IMSI"){
    //         return this.uid.IMSI;
    // }else if(type == "MAC"){
    //   console.log('this.uid.MAC :-' + this.uid.MAC);
    //   return this.uid.MAC;
    // }else 
    if (type == "UUID") {
      console.log('this.uid.UUID :-' + this.uid.UUID);
      this.deviceid = this.uid.UUID;
      return this.uid.UUID;
    }
  }

  // storage permission on adnroid device
  getstoragepermission() {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE).then(
      result => {
        if (result.hasPermission) {
          console.log('Has permission?', result.hasPermission);
          this.haspermission = result.hasPermission;
        }
        else {
          console.log('Has permission?', result.hasPermission);
          this.haspermission = result.hasPermission;
          this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE).then(
            res => {
              if (res.hasPermission) {
                console.log('Has permission?', res.hasPermission)
                this.haspermission = res.hasPermission;
              }
              else {
                this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE);
                this.permissonArray.push('No Permission');
                if (this.permissonArray.length == 1) {
                  this.permissonArray = [];
                  //alert("To allow permission, Please set 'Reset app preferences' manually to your device settting");
                  this.translate.use(this.selectedLanguage);
                  this.translate.get('Jawata needs permission to your Phone storage. To allow permission go to the  app permissions in your device setting').subscribe((res: string) => {
                    alert(res);
                  });
                }
              }
            });
        }
      },
      err =>
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE)
    );
  }

  initializeBackButtonCustomHandler(): void {
    this.platform.backButton.subscribeWithPriority(999999, () => {
      //alert('subject :'+ this.router.url+' --backurl--'+localStorage.getItem('bckbtnpage'));
      if (localStorage.getItem('currenturl').toString().split('/')[1] == 'dashboard') {
        navigator['app'].exitApp();
      }
      else if (localStorage.getItem('subjectWiseData') == 'true') {
        this.header = true;
        this.subjectNameList = true;
        this.subjectHeader = false;
        this.subjectWiseData = false;
        localStorage.setItem('subjectWiseData', 'false');
      }
      else {

        if (localStorage.getItem('secondScreen') == 'true') {
          if (localStorage.getItem('scan') == 'true') {
            this.attendancesheetCreate = true
            this.attendancesheet = false
            localStorage.setItem('scan', 'false')
          } else {
            this.onClickClose()
          }

        }
        else {
          this.onClickBack();
        }

        //this.router.navigate([localStorage.getItem('bckbtnpage').toString().split('/')[1]]);
      }
    });
  }
  onClickBack() {
    if (localStorage.getItem('currenturl') == '/subjects') {
      localStorage.setItem('currenturl', '/tablinks/scanpage')
      window.location.reload(true)
    }
    //this._location.back();
  }
  fileTypeArr = [
    { fileType: 'aac', fileExtension: 'audio/aac' },
    { fileType: 'abw', fileExtension: 'application/x-abiword' },
    { fileType: 'arc', fileExtension: 'application/x-freearc' },
    { fileType: 'avi', fileExtension: 'video/x-msvideo' },
    { fileType: 'azw', fileExtension: 'application/vnd.amazon.ebook' },
    { fileType: 'bin', fileExtension: 'application/octet-stream' },
    { fileType: 'bmp', fileExtension: 'image/bmp' },
    { fileType: 'bz', fileExtension: 'application/x-bzip' },
    { fileType: 'bz2', fileExtension: 'application/x-bzip2' },
    { fileType: 'csh', fileExtension: 'application/x-csh' },

    { fileType: 'css', fileExtension: 'text/css' },
    { fileType: 'csv', fileExtension: 'text/csv' },
    { fileType: 'doc', fileExtension: 'application/msword' },
    { fileType: 'docx', fileExtension: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' },
    { fileType: 'eot', fileExtension: 'application/vnd.ms-fontobject' },
    { fileType: 'epub', fileExtension: 'application/epub+zip' },
    { fileType: 'gif', fileExtension: 'image/gif' },
    { fileType: 'htm', fileExtension: 'text/html' },
    { fileType: 'html', fileExtension: 'text/html' },
    { fileType: 'ico', fileExtension: 'image/vnd.microsoft.icon' },

    { fileType: 'ics', fileExtension: 'text/calendar' },
    { fileType: 'jar', fileExtension: 'application/java-archive' },
    { fileType: 'jpeg', fileExtension: 'image/jpeg' },
    { fileType: 'jpg', fileExtension: 'image/jpeg' },
    { fileType: 'js', fileExtension: 'text/javascript' },
    { fileType: 'json', fileExtension: 'application/json' },
    { fileType: 'jsonld', fileExtension: 'application/ld+json' },
    { fileType: 'mid', fileExtension: 'audio/midi' },
    { fileType: 'midi', fileExtension: 'audio/midi' },
    { fileType: 'mjs', fileExtension: 'text/javascript' },

    { fileType: 'mp3', fileExtension: 'audio/mpeg' },
    { fileType: 'mpeg', fileExtension: 'video/mpeg' },
    { fileType: 'mpkg', fileExtension: 'application/vnd.apple.installer+xml' },
    { fileType: 'odp', fileExtension: 'application/vnd.oasis.opendocument.presentation' },
    { fileType: 'ods', fileExtension: 'application/vnd.oasis.opendocument.spreadsheet' },
    { fileType: 'odt', fileExtension: 'application/vnd.oasis.opendocument.text' },
    { fileType: 'oga', fileExtension: 'audio/ogg' },
    { fileType: 'ogv', fileExtension: 'video/ogg' },
    { fileType: 'ogx', fileExtension: 'application/ogg' },
    { fileType: 'otf', fileExtension: 'font/otf' },

    { fileType: 'png', fileExtension: 'image/png' },
    { fileType: 'pdf', fileExtension: 'application/pdf' },
    { fileType: 'ppt', fileExtension: 'application/vnd.ms-powerpoint' },
    { fileType: 'pptx', fileExtension: 'application/vnd.openxmlformats-officedocument.presentationml.presentation' },
    { fileType: 'rar', fileExtension: 'application/x-rar-compressed' },
    { fileType: 'rtf', fileExtension: 'application/rtf' },
    { fileType: 'sh', fileExtension: 'application/x-sh' },
    { fileType: 'svg', fileExtension: 'image/svg+xml' },
    { fileType: 'swf', fileExtension: 'application/x-shockwave-flash' },
    { fileType: 'tar', fileExtension: 'application/x-tar' },

    { fileType: 'tif', fileExtension: 'image/tiff' },
    { fileType: 'tiff', fileExtension: 'image/tiff' },
    { fileType: 'ttf', fileExtension: 'font/ttf' },
    { fileType: 'txt', fileExtension: 'text/plain' },
    { fileType: 'vsd', fileExtension: 'application/vnd.visio' },
    { fileType: 'wav', fileExtension: 'audio/wav' },
    { fileType: 'weba', fileExtension: 'audio/webm' },
    { fileType: 'webm', fileExtension: 'video/webm' },
    { fileType: 'webp', fileExtension: 'image/webp' },
    { fileType: 'woff', fileExtension: 'font/woff' },

    { fileType: 'woff2', fileExtension: 'font/woff2' },
    { fileType: 'xhtml', fileExtension: 'application/xhtml+xml' },
    { fileType: 'xls', fileExtension: 'application/vnd.ms-excel' },
    { fileType: 'xlsx', fileExtension: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' },
    { fileType: 'xml', fileExtension: 'application/xml&nbsp;' },
    { fileType: 'xul', fileExtension: 'application/vnd.mozilla.xul+xml' },
    { fileType: 'zip', fileExtension: 'application/zip' },
    { fileType: '3gp', fileExtension: 'video/3gpp' },
    { fileType: '3g2', fileExtension: 'video/3gpp2' },
    { fileType: '7z', fileExtension: 'application/x-7z-compressed' },
  ]

  trimSearchValues(value) {
    this.filter = "";
    this.filter = value.trim();
  }

  getIPAddress() {
    if (this.network.type != 'none') {
      this.networkInterface.getCarrierIPAddress()
        .then(address =>
          this.IPAddress = (`${address.ip}`)
          // alert('Ip address is:-' + `${address.ip}`)
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
    // this.getSubjectName();
    event.target.complete();
    // this.onClickSubjectName(this.subName);
    event.target.complete();
  }

  getSubjectName() {

    /**For Web API Called Here */
    // this.menuService.getSubjectName(localStorage.getItem('entityId'), localStorage.getItem('entityName'), localStorage.getItem('userId'), localStorage.getItem('userType'), localStorage.getItem('class_id')).subscribe(data => {

    //   this.subjectName = [];
    //   this.subjectName = data;

    //   console.log("subjectName is ==", this.subjectName);

    //   // get Unique subject Name
    //   var temp = []
    //   temp = []
    //   for (var i = 0; i < this.subjectName.length; i++) {
    //     temp.push(this.subjectName[i]['subject_name'])
    //   }
    //   this.uniqueSubjectName = []
    //   this.uniqueSubjectName = Array.from(new Set(temp))
    // })

    if (localStorage.getItem('userType') == "Actor's Parent") {
      this.data = {
        'actor_id': localStorage.getItem('actorId'),
        'entityId': localStorage.getItem('entityId'),
        'entityName': localStorage.getItem('entityName'),
        'userId': localStorage.getItem('userId'),
        'userType': localStorage.getItem('userType'),
        'class_id': localStorage.getItem('class_id')
      }

    } else {
      this.data = {
        'entityId': localStorage.getItem('entityId'),
        'entityName': localStorage.getItem('entityName'),
        'userId': localStorage.getItem('userId'),
        'userType': localStorage.getItem('userType'),
        'class_id': localStorage.getItem('class_id')
      }
    }

    var headers = {
      'Content-Type': 'application/json',
    }
    if (localStorage.getItem('class_id') == null) {
      this.translate.use(this.selectedLanguage);
      this.translate.get('Please select class or if class is not yet assigned to this account, then contact your entity manager.').subscribe((res: string) => {
        alert(res);
      });
    }
    else {
      console.log(`${environment.apiUrl}/api/subject`, JSON.stringify(this.data));
      this.http.post(`${environment.apiUrl}/api/subject`, this.data, headers).then(res => {
        console.log("subject List:-", JSON.parse(res.data));

        var tempArr;
        tempArr = [];

        this.subjectName = [];
        tempArr = JSON.parse(res.data);

        for (var i = 0; i < tempArr.length; i++) {
          this.subjectName.push(tempArr[i])
        }
        console.log('this.subjectName Get method' + JSON.stringify(this.subjectName));
        //if subject length =0
        if (this.subjectName.length == 0) {
          this.translate.use(this.selectedLanguage);
          this.translate.get('The Subject is not yet assigned. Please contact to the Entity Manager.').subscribe((res: string) => {
            alert(res);
          });
        }

        this.insertRow();
      })
        .catch(error => {
          //alert("Error In Get Subject !");
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
      this.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' + this.table_name + ' (id INTEGER PRIMARY KEY AUTOINCREMENT, userId varchar(2), class_id varchar(2), subjectDetailId varchar(20),entityId varchar(2), subjectId varchar(2), subject_name varchar(2), subjectdetail_filename varchar(2), size varchar(2))', [])
        .then(() => {
          // alert('Database Created :-' + this.database_name);
          // alert('Table Created :-' + this.table_name);

          if (this.network.type == 'none') {
            this.getRows();
          }
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

    this.databaseObj.executeSql("SELECT DISTINCT userId, class_id, entityId, subjectDetailId,subjectId, subject_name, subjectdetail_filename, size  FROM " + this.table_name, [])
      .then((res) => {

        // alert("res is:-" + JSON.stringify(res));

        this.row_data = [];
        for (var i = 0; i < res.rows.length; i++) {
          this.row_data.push(res.rows.item(i));
        }

        if (this.network.type != 'none') {
          if (res.rows.length >= 0) {

            // delete rows here
            for (var i = 0; i < this.row_data.length; i++) {

              if (this.row_data[i]['userId'] == localStorage.getItem('userId') && this.row_data[i]['entityId'] == localStorage.getItem('entityId') && this.row_data[i]['class_id'] == localStorage.getItem('class_id')) {

                this.databaseObj.executeSql(`DELETE FROM ${this.table_name} WHERE userId = ${this.row_data[i]['userId']}`, [])
                  .then((res) => {
                    // alert("Row Deleted :-" + JSON.stringify(res));
                  })
                  .catch(e => {
                    // alert("error to delete rows " + JSON.stringify(e))
                  });
              }
            }
            // Inserting rows here
            for (var i = 0; i < this.subjectName.length; i++) {
              this.databaseObj.executeSql('INSERT INTO ' + this.table_name + ' (userId, class_id, entityId, subjectDetailId,subjectId, subject_name, subjectdetail_filename, size ) VALUES ("' + localStorage.getItem('userId') + '","' +
                localStorage.getItem('class_id') + '","' +
                localStorage.getItem('entityId') + '","' +
                this.subjectName[i]['subjectDetailId'] + '","' +
                this.subjectName[i]['subjectId'] + '","' +
                this.subjectName[i]['subject_name'] + '","' +
                this.subjectName[i]['subjectdetail_filename'] + '","' +
                this.subjectName[i]['size'] + '")', [])
                .then(() => {
                  // alert('Row Inserted!' + this.table_name);
                  this.getRows();
                })
                .catch(e => {
                  // alert("Error Is insert Rows:- " + JSON.stringify(e))
                });
            }
          }
        }
      })
      .catch(e => {
        // alert("Error Is to get Rows:- " + JSON.stringify(e))
      });
  }

  getRows() {

    this.databaseObj.executeSql("SELECT  DISTINCT userId, class_id, entityId, subjectDetailId,subjectId, subject_name, subjectdetail_filename, size  FROM " + this.table_name, [])
      .then((res) => {

        // alert("res is :-" + JSON.stringify(res));

        this.row_data = [];

        if (res.rows.length > 0) {
          this.subjectName = [];

          for (var i = 0; i < res.rows.length; i++) {
            this.row_data.push(res.rows.item(i));
          }

          for (var i = 0; i < this.row_data.length; i++) {

            if (this.row_data[i]['userId'] == localStorage.getItem('userId') && this.row_data[i]['entityId'] == localStorage.getItem('entityId') && this.row_data[i]['class_id'] == localStorage.getItem('class_id')) {
              this.subjectName.push(this.row_data[i])
            }
          }

          // alert("this.subjectName :-" + JSON.stringify(this.subjectName));

          // alert("this.subjectName.length :-" + JSON.stringify(this.subjectName.length));

          var temp = [];
          temp = [];
          for (var i = 0; i < this.subjectName.length; i++) {
            temp.push(this.subjectName[i]['subject_name'])
          }
          this.uniqueSubjectName = []
          this.uniqueSubjectName = Array.from(new Set(temp))

          // alert("this.uniqueSubjectName  :-" + JSON.stringify(this.uniqueSubjectName));
        }
      })
      .catch(e => {
        // alert("Error Is to get Rows:- " + JSON.stringify(e))
      });
  }

  createdirSubjects() {
    this.platform.ready().then(() => {

      this.file.checkDir(this.file.externalRootDirectory, 'Documents').then(response => {
        console.log('Directory already present for this Jawata :- ' + response);

        this.file.checkDir(this.file.externalRootDirectory + 'Documents' + '/', 'Jawata').then(response => {
          console.log('Directory already present for this Jawata :- ' + response);

          this.file.checkDir(this.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/', localStorage.getItem('citizen_id') + '/').then(response => {
            console.log('Directory already present for this userName :- ' + response);

            this.file.checkDir(this.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id') + '/', localStorage.getItem('entity_no').toString() + '/').then(response => {
              console.log('Directory already present for this userName :- ' + response);

              this.file.checkDir(this.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id') + '/' + localStorage.getItem('entity_no').toString() + '/', 'Subjects' + '/').then(response => {
                console.log('Directory already present for this userName :- ' + response);


                this.file.checkDir(this.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id') + '/' + localStorage.getItem('entity_no').toString() + '/' + 'Subjects' + '/', localStorage.getItem('className') + '/').then(response => {
                  console.log('Directory already present for this userName :- ' + response);

                }, error => {
                  //Create class
                  this.file.createDir(this.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id').toString() + '/' + localStorage.getItem('entity_no').toString() + '/' + 'Subjects' + '/', localStorage.getItem('className') + '/', false).then(response => {
                    console.log('createDir for userid ', response);
                  });
                });
              }, error => {
                // Create Subjects and remaining directory
                this.file.createDir(this.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id').toString() + '/' + localStorage.getItem('entity_no').toString(), 'Subjects' + '/', false).then(response => {
                  console.log('createDir for userid ', response);

                  this.file.createDir(this.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id').toString() + '/' + localStorage.getItem('entity_no').toString() + '/' + 'Subjects' + '/', localStorage.getItem('className') + '/', false).then(response => {
                    console.log('createDir for userid ', response);

                  });
                });

              });

            },
              error => {
                // Create Entity No. and remaining directory
                this.file.createDir(this.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id').toString() + '/', localStorage.getItem('entity_no').toString(), false).then(response => {
                  console.log('createDir for userid ', response);

                  this.file.createDir(this.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id').toString() + '/' + localStorage.getItem('entity_no').toString(), 'Subjects' + '/', false).then(response => {
                    console.log('createDir for userid ', response);

                    this.file.createDir(this.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id').toString() + '/' + localStorage.getItem('entity_no').toString() + '/' + 'Subjects' + '/', localStorage.getItem('className') + '/', false).then(response => {
                      console.log('createDir for userid ', response);

                    });
                  });
                });
              });

          },
            error => {
              // citizen Id create and remaining directory
              this.file.createDir(this.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/', localStorage.getItem('citizen_id').toString(), false).then(response => {
                console.log('createDir for userid ', response);

                this.file.createDir(this.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id').toString() + '/', localStorage.getItem('entity_no').toString(), false).then(response => {
                  console.log('createDir for userid ', response);

                  this.file.createDir(this.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id').toString() + '/' + localStorage.getItem('entity_no').toString(), 'Subjects' + '/', false).then(response => {
                    console.log('createDir for userid ', response);

                    this.file.createDir(this.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id').toString() + '/' + localStorage.getItem('entity_no').toString() + '/' + 'Subjects' + '/', localStorage.getItem('className') + '/', false).then(response => {
                      console.log('createDir for userid ', response);

                    });
                  });
                });
              });
            });
        }, error => {
          //  create Jawata and remaining directory
          this.file.createDir(this.file.externalRootDirectory + 'Documents' + '/', 'Jawata', false).then(response => {
            console.log('createDir for jawata ', response);

            this.file.createDir(this.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/', localStorage.getItem('citizen_id').toString(), false).then(response => {
              console.log('createDir for userid ', response);

              this.file.createDir(this.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id').toString() + '/', localStorage.getItem('entity_no').toString(), false).then(response => {
                console.log('createDir for userid ', response);

                this.file.createDir(this.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id').toString() + '/' + localStorage.getItem('entity_no').toString(), 'Subjects' + '/', false).then(response => {
                  console.log('createDir for userid ', response);

                  this.file.createDir(this.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id').toString() + '/' + localStorage.getItem('entity_no').toString() + '/' + 'Subjects' + '/', localStorage.getItem('className') + '/', false).then(response => {
                    console.log('createDir for userid ', response);

                  });
                });
              });
            });
          });
        });

      },
        error => {
          //  create Documents and remaining directory

          this.file.createDir(this.file.externalRootDirectory, 'Documents', false).then(response => {
            console.log('createDir for jawata ', response);
            // create directory for jawata 
            this.file.createDir(this.file.externalRootDirectory + 'Documents' + '/', 'Jawata', false).then(response => {
              console.log('createDir for jawata ', response);
              // create directory for username
              this.file.createDir(this.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/', localStorage.getItem('citizen_id').toString(), false).then(response => {
                console.log('createDir for userid ', response);

                this.file.createDir(this.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id').toString() + '/', localStorage.getItem('entity_no').toString(), false).then(response => {
                  console.log('createDir for userid ', response);

                  this.file.createDir(this.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id').toString() + '/' + localStorage.getItem('entity_no').toString(), 'Subjects' + '/', false).then(response => {
                    console.log('createDir for userid ', response);

                    this.file.createDir(this.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id').toString() + '/' + localStorage.getItem('entity_no').toString() + '/' + 'Subjects' + '/', localStorage.getItem('className') + '/', false).then(response => {
                      console.log('createDir for userid ', response);

                    });
                  });
                });
              });
            });
          });

        });
    });
  }

  //recent code

  ChooseOption(type) {

    // if (type == 'Entry') {
    //   this.entryFlag = true
    //   // this.exitFlag=false
    //   // this.attendanceFlag=false
    //   this.attendancesheet = false
    //   this.scanBarcode();
    // } else if (type == 'Exit') {
    //   console.log('exit click function.......')
    //   this.exitFlag = true
    //   this.entryFlag = false
    //   this.attendanceFlag = false
    //   this.attendancesheet = false
    //   //  this.scanBarcode();
    // } else
    this.platform.ready().then(() => {
      if (type == 'Attendance') {
        console.log('checked array', this.checked)
        console.log('this.checked.length', this.checked.length)
        this.attendanceFlag = false;
        this.attendancesheet = true;
        this.entryFlag = false;
        this.exitFlag = false;
        this.disableAttendance = true;
        this.disablebuttons = false
        //  this.scanBarcode();
        this.showLoader();
        this.getClass();
        this.getSubject();
        this.EntityID = localStorage.getItem('entityId');
        this.entityName = localStorage.getItem('entityName');
        ;

        var data = {
          'entityid': localStorage.getItem('entityId'),
          'userid': localStorage.getItem('userId')
        }
        var headers = {
          'Content-Type': 'application/json'
        }
        console.log('Attendance List API-- =' + `${environment.apiUrl}/api/list_attendance_sheet`, JSON.stringify(data));
        this.http.post(`${environment.apiUrl}/api/list_attendance_sheet`, data, headers).then(res => {
          this.AttendanceTempArr = []
          this.AttendanceListArr = [];
          var date = "";
          this.AttendanceTempArr = JSON.parse(res.data); // data received by server
          this.AttendanceTempArr = this.AttendanceTempArr['getAttendanceSheetData']
          this.checked = [];
          console.log('AttendanceTempArr', this.AttendanceTempArr)
          for (let i = 0; i < this.page; i++)//15<16 
          {
            date = this.utcdateToLocal(this.AttendanceTempArr[i]["created_at"]);
            this.AttendanceListArr.push({
              "ref_grade": this.AttendanceTempArr[i]["ref_grade"],
              "subject_name": this.AttendanceTempArr[i]["subject_name"],
              // "Name":  this.AttendanceTempArr[i]["firstname"] + " " +  this.AttendanceTempArr[i]["lastname"],
              "created_at": date,//this.result[i]["check_in_date_time"],
              "attendance_sheet_date": this.AttendanceTempArr[i]['attendance_sheet_date'],
              "attendance_id": this.AttendanceTempArr[i]['attendance_id'],
              "send_attendance": this.AttendanceTempArr[i]['send_attendance'],
              "attendance_status_disabled": this.AttendanceTempArr[i]['attendance_status_disabled'],
            });
            this.todaysDate = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
            this.defaultClass = localStorage.getItem('className');
            this.defaultSubject = localStorage.getItem('subject_name')
            this.selecteddate = new Date()
            this.CreatedTime = this.datepipe.transform(this.selecteddate, 'HH:mm:ss')
            this.MultiButtonDisable = true
            console.log('sleected Date', this.selecteddate + '' + this.CreatedTime)
            this.dismissLodader();
            this.emptyDataA = false
            this.emptyData = false

          }
          console.log(' this.AttendanceListArr', this.AttendanceListArr)

          if (this.AttendanceTempArr.length == 0) {
            this.selecteddate = new Date()
            this.todaysDate = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
            this.emptyDataA = true
            this.EmptyArr = this.langTransalate("No records to display")
          }

          // getAttendanceSheetData
        }).catch(error => {
          this.defaultClass = localStorage.getItem('className');
          this.defaultSubject = localStorage.getItem('subject_name')
          this.selecteddate = new Date()
          this.todaysDate = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
          this.dismissLodader();

          console.log("attendance List display Error Here !" + JSON.stringify(error));
        });

      }
    });

  }
  utcdateToLocal(utcdate: any) {
    let utcDate: Date = new Date(utcdate);
    let tzOffset: number = new Date().getTimezoneOffset() * 60 * 1000;
    let newTime: number = utcDate.getTime() - tzOffset;
    let localDate: Date = new Date(newTime);
    return this.datepipe.transform(localDate, 'yyyy-MM-dd HH:mm:ss');
  }


  onClickopen() {

    // if (this.defaultClass == null || this.defaultSubject == null) {
    //   this.translate.get('Please Select class and subject').subscribe((res: string) => {
    //     alert(res);
    //   });
    // }else
    if (this.checked.length == 0) {
      this.translate.get('Please Select Attendance').subscribe(async (res: string) => {
        var temp = this.langTransalate(res)
        var temp1 = this.langTransalate('OK')
        console.log('translated lang', temp)
        let alert = await this.alertCtrl.create({

          message: temp,
          buttons: [{
            text: temp1,
          }]
        });
        alert.present();
        // alert(temp);
      });
    }
    // if ( this.send_attendance == 'no') {
    //   this.translate.get('no mail id').subscribe((res: string) => {
    //     alert(res);
    //   });
    // }
    else {
      this.attendanceFlag = false;
      this.attendancesheet = false;
      this.entryFlag = false;
      this.exitFlag = false;
      this.attendancesheetCreate = true;
      for (var i = 0; i < this.AttendanceListArr.length; i++) {
        console.log('inside for ')
        if (this.AttendanceListArr[i].attendance_id == this.attendance_id) {
          if (this.AttendanceListArr[i]['attendance_status_disabled'] == true) {
            this.doneButton = true; // enable
          }
          else {
            this.doneButton = false;//disable
          }
          if (this.AttendanceListArr[i]['send_attendance'] == 'no') {
            console.log('this.sendbutton111', this.sendbutton);
            this.sendbutton = true;//enble

          } else {
            console.log('this.sendbutton222', this.sendbutton);
            this.sendbutton = false;//disable
          }
          this.defaultClass = this.AttendanceListArr[i].ref_grade;
          this.defaultSubject = this.AttendanceListArr[i].subject_name;
          this.selecteddate = new Date()
          this.CreatedTime = this.datepipe.transform(this.AttendanceListArr[i].created_at, 'HH:mm:ss')
          console.log('checking  date', this.CreatedTime)
          this.selecteddate = this.AttendanceListArr[i].attendance_sheet_date;

          console.log('selecteddate on open', this.selecteddate)
        }
      }
      this.loadAttendanceCreatedData(this.attendance_id)
    }

  }
  presentConfirm() {

  }
  onClickCreate() {

    if (this.defaultClass == null || this.defaultClass == '' || this.defaultSubject == null || this.defaultSubject == '') {
      this.translate.get(this.langTransalate('Please Select class and subject')).subscribe(async (res: string) => {
        this.langTransalate(res)
        var temp = this.langTransalate(res)
        var temp1 = this.langTransalate('OK')
        console.log('translated lang', temp)
        let alert = await this.alertCtrl.create({
          message: temp,
          buttons: [{
            text: temp1,
          }]
        });
        alert.present();
        // alert(res);
      });
    } else {

      this.attendanceFlag = false;
      this.attendancesheet = false;
      this.MultiButtonDisable = false
      this.entryFlag = false;
      this.exitFlag = false;
      this.doneButton = true;
      this.sendbutton = true;
      this.selecteddate = this.selecteddate

      console.log('this.datePickerTime', this.datePickerTime)
      var date = this.datePickerTime.split('T');
      console.log('slected Date b', date)
      var utctime = new Date().toISOString();
      var datetime1 = utctime.split('T');
      var datetieme2 = datetime1[1].split('.');
      console.log('date:-', date[0] + ' ' + datetieme2[0])


      // var temp = this.datepipe.transform(this.selecteddate, 'yyyy-MM-dd');
      // console.log('temp date', temp)

      var data = {
        'class': localStorage.getItem('class_id'),
        'subject': localStorage.getItem('subject_id'),
        'attendance_date': date[0] + ' ' + datetieme2[0],
        'entityid': localStorage.getItem('entityId'),
        'ipAddress': this.deviceid,
        'userType': localStorage.getItem('userType'),
        'userid': localStorage.getItem('userId')
      }

      console.log('create API req', data)
      var headers = {
        'Content-Type': 'application/json'
      }
      console.log('create API-- =' + `${environment.apiUrl}/api/create_attendance_sheet`, JSON.stringify(data));
      this.http.post(`${environment.apiUrl}/api/create_attendance_sheet`, data, headers).then(res => {

        this.attendancesheetCreate = true;
        this.createdAttendanceArr = [];

        this.createdAttendanceArr = JSON.parse(res.data); // data received by server
        this.Attendance_Sheet_id = this.createdAttendanceArr['attendance_sheet_id']
        this.attendance_id = this.createdAttendanceArr['attendance_sheet_id']
        // localStorage.setItem('Attendance_Sheet_id', this.Attendance_Sheet_id)
        // console.log('Attendance_Sheet_id', this.Attendance_Sheet_id)

        this.CreatedTime = this.datepipe.transform(new Date(), 'HH:mm:ss')

        this.loadAttendanceCreatedData(this.Attendance_Sheet_id)
        //for disable send button if selected date is grater than todays date
        // var TodayDate: Date = new Date()
        // var year = this.datepipe.transform(TodayDate, 'yyyy')
        // var month = this.datepipe.transform(TodayDate, 'MM')
        // var day = this.datepipe.transform(TodayDate, 'dd')
        // console.log('API date-', year + month + day)
        // var yearselected = this.datepipe.transform(this.selecteddate, 'yyyy')
        // var monthselected = this.datepipe.transform(this.selecteddate, 'MM')
        // var dayselected = this.datepipe.transform(this.selecteddate, 'dd')
        // console.log('selected  date', yearselected + monthselected + dayselected)
        // this.CreatedTime = this.datepipe.transform(new Date(), 'HH:mm:ss')
        // console.log('CreatedTime for create', this.CreatedTime)
        // if (day < dayselected)//12>12
        // {
        //   console.log('disable send 1')
        //   this.MultiButtonDisable = false
        //   if (month < monthselected) {
        //     console.log('disable send 4')
        //     this.MultiButtonDisable = false
        //   } else {
        //     console.log('enable send 5')

        //   }
        // } else {
        //   if (month < monthselected)//07>05
        //   {
        //     console.log('disable send 2')
        //     this.MultiButtonDisable = false
        //   } else {
        //     console.log('enable send 3')
        //     this.MultiButtonDisable = true
        //   }

        //        }
      }).catch(error => {
        console.log("attendance create Error Here !" + JSON.stringify(error));
      });
    }



  }
  loadAttendanceCreatedData(Attendance_Sheet_id) {
    //API for Attendance Second list data Display
    localStorage.setItem('secondScreen', 'true')

    var data1 = {
      'attendance_sheet_id': Attendance_Sheet_id,
      'entityid': localStorage.getItem('entityId'),
      'locale': localStorage.getItem('selectedL')
    }
    console.log('Take API req', data1)
    var headers = {
      'Content-Type': 'application/json'
    }
    this.showLoader();
    console.log('take attendance API-- =' + `${environment.apiUrl}/api/take_attendance_sheet`, JSON.stringify(data1));
    this.http.post(`${environment.apiUrl}/api/take_attendance_sheet`, data1, headers).then(res => {

      this.AttendanceListArr2 = [];
      temp = [];
      var temp = JSON.parse(res.data);
      this.temp1 = [];
      this.temp1 = temp['assignedUserDataOfClass'];
      console.log('temp1 data Array', this.temp1)

      for (let i = 0; i < this.page2; i++) {
        if (this.temp1[i]["attendance_status"] != null) {
          this.disablebuttons = true
        }


        var statusId = 4;
        var status = null;
        if (this.temp1[i]["attendance_status"] == 'present') {
          statusId = 0;
          status = 'Present';
        }
        else if (this.temp1[i]["attendance_status"] == 'absent') {
          statusId = 1;
          status = 'Absent';
        }
        else if (this.temp1[i]["attendance_status"] == 'late') {
          statusId = 2;
          status = 'Late';

        }
        else if (this.temp1[i]["attendance_status"] == 'excused') {
          statusId = 3;
          status = 'Excused';

        }

        this.AttendanceListArr2.push({
          "attendance_status": status,//temp1[i]["attendance_status"],
          "fullName": this.temp1[i]["fullName"],
          "citizen_id": this.temp1[i]["citizen_id"],
          "statusId": statusId
        });

      }
      // this.AttendanceListArr2 = this.AttendanceListArr2['assignedUserDataOfClass']
      this.defaultAttendance = 'Select'
      console.log('this.AttendanceListArr2', this.AttendanceListArr2)
      this.emptyData = false
      this.emptyDataA = false
      if (this.temp1.length == 0) {

        this.emptyData = true
        this.EmptyArr = this.EmptyArr = this.langTransalate("No records to display")
      }
      this.dismissLodader();

    }).catch(error => {
      this.dismissLodader();
      console.log('checking 2222')
      console.log("attendance listing second screen Error Here !" + JSON.stringify(error));

      // this.translate.get('Something went wrong').subscribe((res: string) => {
      //   alert(res);

      // });
    });

  }

  //loaderLanguage = "";


  async showLoader() {
    this.translate.use(this.selectedLanguage);
    this.translate.get('Loading').subscribe((res: string) => {
      this.loaderLanguage = "";
      this.loaderLanguage = res;
    });
    return await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: this.loaderLanguage + ' ....',
      duration: 20000,

    }).then(a => {
      a.present().then(() => {
        console.log('presented');
      });
    });
  }

  dismissLodader() {
    this.loadingController.dismiss().then(() => console.log('dismissed'));
  }

  onClickClose() {
    this.MultiButtonDisable = true
    this.ChooseOption('Attendance');
    this.checked = [];
    // this.selecteddate = new Date();
    this.attendancesheetCreate = false;
    this.attendancesheet = true;
    this.emptyData = false;
    this.emptyDataA = false;

    localStorage.setItem('secondScreen', 'false');

    // this.translate.get('Please select only one record while performing operation').subscribe((res) => {
    //   alert(res);
    if (this.checked.length > 1) {
      this.ChooseOption('Attendance');
      this.checked = [];
    }
    localStorage.setItem('scan', 'false')
    // });

    //window.location.reload(true)

  }


  onCancel() {

  }

  onClickScan() {
    // if (this.manualAttendance == 'manualAttendance') {
    // var data = {
    //   'attendanceSheetId': localStorage.getItem('Attendance_Sheet_id'),
    //   'selectedStatus': this.defaultStatus,
    //   'cureentUserId': localStorage.getItem('userId'),
    //   'actorId': localStorage.getItem('actorId'),
    //   'citizenId': this.citizenID
    // }
    // var headers = {
    //   'Content-Type': 'application/json'
    // }

    // console.log('scan attendance API-- =' + `${environment.apiUrl}/api/scan_qr_code`, JSON.stringify(data));
    // this.http.post(`${environment.apiUrl}/api/scan_qr_code`, data, headers).then(res => {
    //   // this.showLoader();
    //   this.AttendanceScanArr = [];
    //   this.AttendanceScanArr = JSON.parse(res.data);
    //   console.log('AttendanceScanArr', JSON.stringify(this.AttendanceScanArr));

    //   this.translate.get('Attendandance Updated Successfully').subscribe((res: string) => {
    //     alert(res);
    //   });

    // });

    // } else {
    this.scanBarcode();
    //}
    // this.manualAttendance = ''

    // this.defaultStatus = 'present';
    // console.log('event ', status);

    // this.citizenID = '';
    // console.log('citizenId', this.citizenID);

  }
  vibrate() {
    this.vibration.vibrate(500);
  }
  async onClickSend(type) {
    this.showSendLoader();
     if (this.scanArr == false) {
      var error = this.langTransalate('There was error sending attendance sheet.Please send it again')
      var temp1 = this.langTransalate('OK')
      console.log('translated lang', temp)
      let alert = await this.alertCtrl.create({
        message: error,
        buttons: [{
          text: temp1,
          handler: () => {
            this.dismissLodader();
            // this.onClickClose();
          }
        }]
      });
      alert.present();
    } else {
      var temp = this.datepipe.transform(this.selecteddate, 'yyyy-MM-dd');
      console.log('temp date', temp)
      var data = {
        'attendanceSheetID': this.attendance_id,
        'locale': this.selectedLanguage,
        'current_user_id': localStorage.getItem('userId'),
        'entityid': localStorage.getItem('entityId'),
        'dateTime': temp,
        'userType': localStorage.getItem('userType'),
        'ipAdress': this.deviceid,
      }

      var headers = {
        'Content-Type': 'application/json'
      }
      // this.showSendLoader();
    //  var interval1 = setInterval(async () => {

        console.log('send attendance API-- =' + `${environment.apiUrl}/api/send_attendance_sheet`, JSON.stringify(data));
        this.http.post(`${environment.apiUrl}/api/send_attendance_sheet`, data, headers).then(res => {
          this.sendArr = JSON.parse(res.data);
          this.sendAPIMsg = this.sendArr['msg'];
          console.log('sendAPIMsg', this.sendAPIMsg);
          console.log('sendAPIMsg2', res.data);
          console.log('this.sendArr', this.sendArr);


          var alert
          this.translate.get(this.sendAPIMsg).subscribe(async (res: string) => {

            var temp1 = this.langTransalate('OK')
            console.log('translated lang', temp)
            alert = await this.alertCtrl.create({
              message: res,
              buttons: [{
                text: temp1,
                handler: () => {
                  this.dismissLodader();
                  this.onClickClose();
                },
              }],
              backdropDismiss: false,
            });
            alert.present();
            this.dismissLodader();
          });


        }).catch(async error => {
          this.dismissLodader();
          var error = this.langTransalate('There was error sending attendance sheet.Please send it again')
          var temp1 = this.langTransalate('OK')
          console.log('translated lang', temp)
          let alert = await this.alertCtrl.create({
            message: error,
            buttons: [{
              text: temp1,
              handler: () => {
                this.dismissLodader();
                // this.onClickClose();
              }
            }]
          });
          alert.present();

          console.log("attendance listing second screen Error Here !" + JSON.stringify(error));
        });


      //   clearInterval(interval1);
      // }, 6000);
    }

  }
  async showSendLoader() {
    this.translate.use(this.selectedLanguage);
    this.translate.get('Sending').subscribe((res: string) => {
      this.loaderLanguage = "";
      this.loaderLanguage = res;
    });
    return await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: this.loaderLanguage + ' ....',
      duration: 100000,

    }).then(a => {
      a.present().then(() => {
        console.log('presented');
      });
    });
  }
  getEntityName() {
    if (this.network.type != 'none') {

      if (localStorage.getItem('userType') == 'Manager') {

        var data = {
          'APuserId': 'null',
          'token': localStorage.getItem('token'),
          'userId': localStorage.getItem('userId')
        }
      } else if (localStorage.getItem('userType') == "Actor's Parent") {

        var data = {
          'APuserId': localStorage.getItem('userId'),
          'token': localStorage.getItem('token'),
          'userId': localStorage.getItem('actorId')
        }
      }

      var headers = {
        'Content-Type': 'application/json'
      }
      console.log(`${environment.apiUrl}/api/entityPopup`, JSON.stringify(data));
      this.http.post(`${environment.apiUrl}/api/entityPopup`, data, headers).then(res => {

        this.entityArr = [];

        this.entityArr = JSON.parse(res.data); // data received by server
        console.log('this.entityArr' + JSON.stringify(this.entityArr));
        if (this.entityArr.length == 0) {
          this.translate.use(this.selectedLanguage);
          this.translate.get('Entity is not assigned to this account,please contact your Entity Manager').subscribe((res: string) => {
            alert(res);
            //  this.popoverCtrl.dismiss();
            window.location.reload(true);
          });
        } else {

          // this.insertActorEntity();
          this.getClass();
        }
      }).catch(error => {
        console.log("getEntityName Error Here !" + JSON.stringify(error));
      });
    }
  }
  getClass() {
    //  set class_id =0 to load class......
    var data = {
      'userid': localStorage.getItem('userId'),
      'entityid': localStorage.getItem('entityId'),
      'classid': 0
    }
    var headers = {
      'Content-Type': 'application/json'
    }
    console.log('class_subject_load Get class =' + `${environment.apiUrl}/api/class_subject_load`, JSON.stringify(data));
    this.http.post(`${environment.apiUrl}/api/class_subject_load`, data, headers).then(res => {

      console.log('API response:-' + JSON.stringify(res.data));

      this.classListArr = [];
      var temp;
      temp = [];
      temp = JSON.parse(res.data);

      this.classListArr = [];
      this.classListArr = temp.classArray;
      console.log('classListArr :-' + JSON.stringify(this.classListArr));

    }).catch(error => {
      // alert("getClassName Error Here !" + error);
    });

  }
  getSubject() {

    var data = {
      'userid': localStorage.getItem('userId'),
      'entityid': localStorage.getItem('entityId'),
      'classid': localStorage.getItem('class_id')
    }
    console.log('class_id req', data)
    var headers = {
      'Content-Type': 'application/json'
    }
    console.log(`${environment.apiUrl}/api/class_subject_load`, JSON.stringify(data));
    this.http.post(`${environment.apiUrl}/api/class_subject_load`, data, headers).then(res => {
      console.log(JSON.stringify(res.data));

      this.subjectListArr = [];
      var temp;
      temp = [];
      temp = JSON.parse(res.data);

      this.subjectListArr = [];
      this.subjectListArr = temp.subjectArray;
      console.log('subjectListArr :-' + JSON.stringify(this.subjectListArr));

    }).catch(error => {
      //alert('checdkchchjchcch')
      console.log('API failed', this.subjectListArr)

      // alert("getClassName Error Here !" + error);
    });

  }
  changeEntity(value) {

    this.defaultEntity = "";
    this.defaultClass = "";
    this.defaultSubject = ""
    localStorage.removeItem('className');
    localStorage.removeItem('class_id');//class_id    
    localStorage.removeItem('subject_id');
    localStorage.removeItem('subject_name');//class_id    
    this.defaultEntity = value.trim();

    for (var i = 0; i < this.entityArr.length; i++) {

      if (this.defaultEntity == this.entityArr[i]['name_town']) {

        /**set entityId & entityName to localStorage */
        localStorage.setItem('entityId', this.entityArr[i]['id']);
        localStorage.setItem('entityName', this.entityArr[i]['name_town']);
        localStorage.setItem('entity_no', this.entityArr[i]['entity_no']);

        /**Modal Popup Close Here */
        //this.popoverCtrl.dismiss();

        //this.getClass();



        // navigate to same path
        //  this.router.navigated = false;
        //this.OnEntityChangeLoadData();
      }
    }
  }

  changeClass(value) {

    this.defaultClass = "";
    this.defaultClass = value.trim();
    localStorage.removeItem('subject_name')

    for (var i = 0; i < this.classListArr.length; i++) {
      if (this.defaultClass == this.classListArr[i]['ref_grade']) {

        /**set classId to localStorage */
        localStorage.setItem('class_id', this.classListArr[i]['class_id']);
        localStorage.setItem('className', this.classListArr[i]['ref_grade']);
        // localStorage.setItem('defaultClass', this.classListArr[i]['ref_grade']);
        // console.log('defaultclass',this.defaultClass)
        // console.log('className',localStorage.getItem('className'))
        /**Modal Popup Close Here */
        // this.popoverCtrl.dismiss();
        //this.router.navigated = false;
        console.log('classId', localStorage.getItem('class_id'));

        this.getSubject()

      }
    }
  }

  changeSubject(value) {

    this.defaultSubject = "";
    this.defaultSubject = value.trim();

    for (var i = 0; i < this.subjectListArr.length; i++) {
      if (this.defaultSubject == this.subjectListArr[i]['subject_name']) {

        /**set classId to localStorage */
        localStorage.setItem('subject_id', this.subjectListArr[i]['subject_id']);
        localStorage.setItem('subject_name', this.subjectListArr[i]['subject_name']);

      }
    }
  }
  /** Change status and store in separate array */
  changeStatus(status, citizen_id) {
    console.log('changed status id', status + '--citizen_id--' + citizen_id);
    this.disablebuttons = true
    this.platform.ready().then(() => {
      if (status == 0) {
        this.defaultStatus = 'Present';
        console.log('status inside..', status)
      }
      if (status == 1) {
        this.defaultStatus = 'Absent';
        console.log('status inside..', status)
      }
      if (status == 2) {
        this.defaultStatus = 'Late';
        console.log('status inside 2..', status)
      }
      if (status == 3) {
        this.defaultStatus = 'Excused';
        console.log('status inside 3..', status)
      }
      this.citizenID = citizen_id;

      console.log('selected status...', JSON.stringify(this.AttendanceListArr2));
      for (let i = 0; i < this.AttendanceListArr2.length; i++) {
        console.log('citizen_id :-' + this.AttendanceListArr2[i]["citizen_id"]);
        if (citizen_id == this.AttendanceListArr2[i]["citizen_id"]) {
          this.AttendanceListArr2[i]["attendance_status"] = this.defaultStatus;
          this.AttendanceListArr2[i]["statusId"] = status;
        }
      }

      console.log('AttendanceListArr2 After changestatus :-' + JSON.stringify(this.AttendanceListArr2));

    });
  }


  async onChangeSaveAttendance(type) {
  //  this.showLoader();
     await this.platform.ready().then(async () => {
      for (let i = 0; i < this.AttendanceListArr2.length; i++) {
        this.showLoader();
        if (this.AttendanceListArr2[i]["attendance_status"] != null) {
          var data = {
            'attendanceSheetId': this.attendance_id,
            'selectedStatus': this.AttendanceListArr2[i]["attendance_status"],
            'cureentUserId': localStorage.getItem('userId'),
            'actorId': localStorage.getItem('actorId'),
            'citizenId': this.AttendanceListArr2[i]["citizen_id"],
            'entityId': localStorage.getItem('entityId'),
            'locale': localStorage.getItem('selectedL')
          }
          var headers = {
            'Content-Type': 'application/json'
          }
          console.log('onChange status scan:- ' + `${environment.apiUrl}/api/scan_qr_code`, JSON.stringify(data));
          await this.http.post(`${environment.apiUrl}/api/scan_qr_code`, data, headers).then(async res => {
          this.AttendanceScanArr = [];
            this.AttendanceScanArr = JSON.parse(res.data);
            console.log('On change status AttendanceScanArr :-' + JSON.stringify(this.AttendanceScanArr));
            this.scanArr = true
       
           }).catch(error => {
            this.scanArr = false
            this.dismissLodader();
            console.log('api/scan_qr_code on Done btn :' + error)
          });
        }
       
        this.dismissLodader();
      }
      // window.location.reload(true);
      // this.dismissLodader();
      // this.onClickClose();
   });
    if (this.scanArr == true) {

      if (type == 'send') {
       
          // this.dismissLodader();
        this.onClickSend('send');
          console.log('calling send function')
       } else {
        console.log('close screen if you clicked on Done button')
        this.dismissLodader();
        this.onClickClose();
      }
    }
  }
  selectdate(event) {
    console.log('event', event)
    this.selecteddate = event
    this.datePickerTime = event


    // localStorage.removeItem('date');
    // localStorage.setItem('date', this.date);
  }


  addCheckbox(event, attendance_id, send_attendance, attendance_status_disabled) {
    console.log('checkbox event', event);
    console.log('ischeck :', event.target.checked + 'attendance_id' + attendance_id);
    this.attendance_id = attendance_id;

    if (event.target.checked) {

      this.checked.push(attendance_id);

      console.log('checkbox', this.checked);
      console.log('send_attendance', send_attendance)
      this.send_attendance = send_attendance
    }
    else {
      this.checked = [];
    }
    if (this.checked[0] != this.checked[1]) {
      if (this.checked.length > 1) {
        this.translate.get(this.langTransalate('Please select only one record while performing operation')).subscribe(async (res) => {
          this.langTransalate(res)
          var temp = this.langTransalate(res)
          var temp1 = this.langTransalate('OK')
          console.log('translated lang', temp)
          let alert = await this.alertCtrl.create({
            message: temp,
            buttons: [{
              text: temp1,
              handler: () => {
                // this.ChooseOption('Attendance');
                //  this.checked = [];
              }
            }]
          });
          alert.present();
          // alert(res);

          // alert(res);
          this.ChooseOption('Attendance');
          this.checked = [];
        });
      }

    } else {
      this.ChooseOption('Attendance');
      this.checked = []
    }

    // for (var i = 0; i < this.AttendanceListArr.length; i++) {
    //   console.log('inside for ')
    //   if (this.AttendanceListArr[i].attendance_id == this.attendance_id) {
    //     var year = this.datepipe.transform(this.AttendanceListArr[i].attendance_sheet_date, 'yyyy')
    //     var month = this.datepipe.transform(this.AttendanceListArr[i].attendance_sheet_date, 'MM')
    //     var day = this.datepipe.transform(this.AttendanceListArr[i].attendance_sheet_date, 'dd')
    //     console.log('API date-', year + month + day)
    //     var yearselected = this.datepipe.transform(this.selecteddate, 'yyyy')
    //     var monthselected = this.datepipe.transform(this.selecteddate, 'MM')
    //     var dayselected = this.datepipe.transform(this.selecteddate, 'dd')
    //     console.log('selected  date', yearselected + monthselected + dayselected)

    //     if (day > dayselected)//15>12
    //     {
    //       console.log('disable send 1')
    //       this.MultiButtonDisable = false
    //       if (month > monthselected)//05>05
    //       {
    //         console.log('disable send 4')
    //         this.MultiButtonDisable = false
    //       } else {
    //         if (month == monthselected && day > dayselected)//05==05 && 15>13
    //         {
    //           console.log('enable send 5')
    //           this.MultiButtonDisable = false
    //         }
    //         else {
    //           this.MultiButtonDisable = true
    //         }
    //       }
    //     } else {
    //       if (month > monthselected)//07>05
    //       {
    //         console.log('disable send 2')
    //         this.MultiButtonDisable = false
    //       } else {
    //         console.log('enable send 3')
    //         this.MultiButtonDisable = true
    //       }
    //     }
    //   }
    // }
  }
  loadData(event, scroll) {
    if (scroll == 'A') {
      setTimeout(() => {
        console.log('Done');

        console.log('this.len', this.page)//23
        // App logic to determine if all data is loaded
        // and disable the infinite scroll
        console.log('this.AttendanceTempArr.length', this.AttendanceTempArr.length)//29
        if (this.page > this.AttendanceTempArr.length)//23>29
        {
          console.log('this.page return', this.page)
          event.target.disabled = true;
          return false;
        } else {

          this.GetInfinityPageData1(event, this.page);
          event.target.complete();
        }
      }, 2000);
    } else {
      setTimeout(() => {
        console.log('Done2');
        console.log('this.temp1', this.temp1)
        console.log('this.temp1.length', this.temp1.length)
        console.log('this.len2', this.page2)
        if (this.page2 > this.temp1.length)//23>29
        {
          console.log('this.page return', this.page2)
          event.target.disabled = true;
          return false;
        } else {
          console.log('second screen Data load')
          this.GetInfinityPageData2(event, this.page2)
          event.target.complete();
        }
      }, 2000);
    }

  }
  GetInfinityPageData1(event, page) {
    var date = "";
    console.log('----> page', page)//23
    this.page = this.page + 15  //23+7=30
    console.log('--> this.page', this.page)
    for (let i = page; i < this.page; i++)//29<30
    {
      if (i < this.AttendanceTempArr.length)//29<29
      {
        console.log('index', i)
        date = this.utcdateToLocal(this.AttendanceTempArr[i]["created_at"]);
        this.AttendanceListArr.push({
          "ref_grade": this.AttendanceTempArr[i]["ref_grade"],
          "subject_name": this.AttendanceTempArr[i]["subject_name"],
          // "Name":  this.AttendanceTempArr[i]["firstname"] + " " +  this.AttendanceTempArr[i]["lastname"],
          "created_at": date,//this.result[i]["check_in_date_time"],
          "attendance_sheet_date": this.AttendanceTempArr[i]['attendance_sheet_date'],
          "attendance_id": this.AttendanceTempArr[i]['attendance_id'],
          "send_attendance": this.AttendanceTempArr[i]['send_attendance'],
          "attendance_status_disabled": this.AttendanceTempArr[i]['attendance_status_disabled'],
        });
      } else {
        event.target.disabled = true;
        return false;
      }
    }
    console.log('AttendanceListArr.length', this.AttendanceListArr.length)
    console.log('AttendanceListArr', this.AttendanceListArr)
  }
  GetInfinityPageData2(event, page) {
    console.log('----> page', page)//23
    this.page2 = this.page2 + 15;  //23+7=30
    console.log('--> this.page2', this.page2)
    for (let i = page; i < this.page2; i++) {
      if (i < this.temp1.length)//29<29
      {
        var statusId = 4;
        var status = null;
        if (this.temp1[i]["attendance_status"] == 'present') {
          statusId = 0;
          status = 'Present';
        }
        else if (this.temp1[i]["attendance_status"] == 'absent') {
          statusId = 1;
          status = 'Absent';
        }
        else if (this.temp1[i]["attendance_status"] == 'late') {
          statusId = 2;
          status = 'Late';

        }
        else if (this.temp1[i]["attendance_status"] == 'excused') {
          statusId = 3;
          status = 'Excused';

        }
        this.AttendanceListArr2.push({
          "attendance_status": status,//temp1[i]["attendance_status"],
          "fullName": this.temp1[i]["fullName"],
          "citizen_id": this.temp1[i]["citizen_id"],
          "statusId": statusId
        });
      }
      else {
        event.target.disabled = true;
        return false;
      }

    }
  }

}
