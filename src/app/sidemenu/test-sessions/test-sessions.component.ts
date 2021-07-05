import { Component, OnInit, NgZone, EventEmitter } from '@angular/core';
import { TranslateConfigService } from 'src/app/translate-config.service';
import { TranslateService } from '@ngx-translate/core';
import { HTTP } from '@ionic-native/http/ngx';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { JsonPipe, DatePipe } from '@angular/common';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { MenuService } from 'src/app/services/menu.service';
import { Network } from '@ionic-native/network/ngx';
import { Platform, LoadingController, AlertController, Events } from '@ionic/angular';
import { Location } from '@angular/common';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { SQLiteObject, SQLite } from '@ionic-native/sqlite/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { mergeMap, timestamp } from 'rxjs/operators';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';
import { concat } from 'rxjs';
import { DownloadRequest, NotificationVisibility, Downloader } from '@ionic-native/downloader/ngx';
import { NetworkInterface } from '@ionic-native/network-interface/ngx';
//import { error, EventEmitter } from 'protractor';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { timeStamp } from 'console';
import { formattedError } from '@angular/compiler';
import { Uid } from '@ionic-native/uid/ngx';

@Component({
  selector: 'app-test-sessions',
  templateUrl: './test-sessions.component.html',
  styleUrls: ['./test-sessions.component.scss'],
})
export class TestSessionsComponent implements OnInit {

  public fileUploader: FileUploader = new FileUploader({});
  fileUploadedcount = 0;
  IPAddress = "";
  checkgradfiles: string = '';
  isActor = true;
  disabled = false;
  gradedfilesent: string = 'no';
  deadlinedate: string = 'no';
  lengthCheckedArr = [];
  testIDFlag = false;
  servercurrentdate: any;
  deadlineDateonsubmit: string = '';
  heading = this.translateConfigService.get('Test Sessions');
  selectedLanguage = localStorage.getItem('selectedL');
  image: string = '';

  testSessionHeader = true;
  testSessionData = true;
  testSessionSubHeader = false;
  fileUploadPage = false;
  fileName = "";
  flag = true;
  openFileSubForm = false;
  testSessionFileSubHeader = false;
  isLoading = false;
  isExist: boolean = false;
  notificationFlag = true;
  haspermission = false;
  checkboxFlag = false;
  gradeFlag = false;
  viewGradeSubHeader = false;
  viewGradeSubForm = false;

  notificationDetails = [];
  notification;
  notificationId = 0;
  testSessionArr;
  row_data = [];
  testSessionFiles = [];
  filter = "";
  fileFilter = "";
  loaderLanguage = "";
  filepath = "";
  testSessionId = "";
  filterGrade = "";
  tempArr;
  temp;
  tempGradeList;
  gradeListArr = [];
  permissonArray = [];
  fileTransfer: FileTransferObject = this.transfer.create();

  deviceid: any;
  imageURI: any;
  imageFileName: any;
  fileListArr;
  uploadedFile = "";
  // selectedFiles: string[] = [];

  selectedFiles: File[];
  images = [];
  // myForm = new FormGroup({
  //   name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  //   file: new FormControl('', [Validators.required]),
  //   fileSource: new FormControl('', [Validators.required])
  // });

  keysToExclude: any[] = ['class_id', 'class_reference', 'class_grade', 'start_date', 'id', 'actor_id', 'test_file',
    'test_created_by', 'answer_file', 'is_received', 'grade', 'grade_decided_manager_id', 'created_at',
    'updated_at', 'firstname', 'lastname', 'checked', 'disabled'];

  keysToExcludeField: any[] = ['id', 'entity_id', 'class_id', 'subject_id', 'start_date', 'deadline_date', 'is_delete',
    'send_and_start', 'created_at', 'updated_at', 'detail_id', 'test_session_id', 'test_created_by', 'firstname', 'lastname'];

  keysToExcludeGrade = ["id", "test_session_id", "actor_id", "deadline_date", "test_file", "test_created_by",
    "answer_file", "answer_date", "is_received", "graded_date", "grade_decided_manager_id", "graded_file_sent",
    "avg_grade", "created_at", "updated_at", "entity_id", "class_id", "subject_id", "start_date", "is_delete", "send_and_start"]

  databaseObj: SQLiteObject;
  readonly database_name: any = "Jawata_App.db";
  readonly table_name: string = "testList"; // Table declared for test list
  readonly testFile_table: string = "openTestFile"; // Table declared for open test file list
  readonly grade_Table: string = "studentsGradeList"; // Table declared for Grade list

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

  constructor(private translateConfigService: TranslateConfigService, private datepipe: DatePipe,
    private http: HTTP,
    private translate: TranslateService,
    private menuService: MenuService,
    private platform: Platform,
    private transfer: FileTransfer,
    private network: Network,
    private _location: Location,
    public loadingController: LoadingController,
    private file: File, private sqlite: SQLite,
    private alertCtrl: AlertController, private events: Events,
    private fileOpener: FileOpener, public _zone: NgZone,
    private localNotifications: LocalNotifications,
    private androidPermissions: AndroidPermissions,
    private downloader: Downloader,
    private networkInterface: NetworkInterface,
    private uid: Uid) {

    this.platform.ready().then(() => {
      if (localStorage.getItem('userType') == 'Actor') {
        this.isActor = true;
      }
      else {
        this.isActor = false;
      }
      this.getID_UID('UUID');
      let dateTime = this.datepipe.transform(new Date(), 'yyyy-MM-dd HH-mm-ss');
      // let date = new Date();
      // let myDate: String = new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString();
      console.log('myDate :-' + dateTime);

      this.createDB();
      this.createDBGrade();
      this.getIPAddress();
      this.getstoragepermission();
      localStorage.removeItem('testSessionId');
      this.initializeBackButtonCustomHandler();
      this.getTestSessionList();
      //this.checkgradeforallfiles();
    }).catch(error => { console.log('test session error' + error) });
  }


  ngOnInit() {
    /** heading name change after select language */
    this.translate.setDefaultLang(this.selectedLanguage);
    this.translateConfigService.setLanguage(this.selectedLanguage);

    this.translate.use(this.selectedLanguage);
    this.translate.get('Test Sessions').subscribe((res: string) => {
      this.heading = "";
      this.heading = res;
    });
  }

  doRefresh(event) {
    if (this.network.type == "none") {
      this.getTestRows();
    }
    this.getTestSessionList();
    //unhide the submit answer file
    this.disabled = false;
    event.target.complete();
  }

  getIPAddress() {
    if (this.network.type != 'none') {
      this.networkInterface.getCarrierIPAddress()
        .then(address =>
          this.IPAddress = (`${address.ip}`)
          //alert('Ip address is:-' + `${address.ip}`)
        ).catch(error => console.error(`Unable to get IP: ${error}`));
    }
    if (this.network.type === 'wifi') {
      this.networkInterface.getWiFiIPAddress()
        .then(address => this.IPAddress = (`${address.ip}`))
        .catch(error => console.error(`Unable to get IP: ${error}`)
        );
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
                  alert("To allow permission, Please set 'Reset app preferences' manually to your device settting");
                }
              }
            });
        }
      },
      err =>
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE)
    );
  }


  getFileList() {

    if (this.network.type != "none") {
      // var data = {
      //   "test_session_id": localStorage.getItem('testSessionId'),
      //   "operation": "open"
      // }
      var data = {
        'user_id': localStorage.getItem('userId'),
        'ip_address': this.deviceid,//this.IPAddress,
        "test_session_id": localStorage.getItem('testSessionId'),
        "operation": "open",
        "entity_id": localStorage.getItem('entityId')
      }

      var headers = {
        'Content-Type': 'appllication/json'
      }
      console.log(`${environment.apiUrl}/api/list_test_session_files/open`, JSON.stringify(data));
      this.http.post(`${environment.apiUrl}/api/list_test_session_files/open`, data, headers)
        .then((res: any) => {
          // console.log("list_test_session_files/open res :-" + JSON.stringify(res));
          this.fileListArr = [];
          this.fileListArr = JSON.parse(res.data);
          if (this.fileListArr.length > 0) {
            //this.defaultFile = this.fileListArr[0]['test_file'];
            let utcDate: Date = new Date(this.fileListArr[0]['server_time']);
            let tzOffset: number = new Date().getTimezoneOffset() * 60 * 1000;
            let newTime: number = utcDate.getTime() - tzOffset;
            let localDate: Date = new Date(newTime);
            this.servercurrentdate = this.datepipe.transform(localDate, 'yyyy-MM-dd');
            //this.servercurrentdate=this.fileListArr[0]['server_time'];
          }
          else {
            //this.defaultFile = '';
          }
          // console.log("this.fileListArr Online GET Res Is :-" + JSON.stringify(this.fileListArr));
        }).catch(error => {
          // cosnole.log("this.fileListArr error  !" + JSON.stringify(error));
        });
    } else {
      // this.getTestRows();
    }
  }

  LogEntryForDownloadTestFile() {

    if (this.network.type != "none") {
      var data = {
        'user_id': localStorage.getItem('userId'),
        'ip_address': this.deviceid,//this.IPAddress,
        "test_session_id": localStorage.getItem('testSessionId'),
        "operation": "open",
        "entity_id": localStorage.getItem('entityId')
      }

      var headers = {
        'Content-Type': 'appllication/json'
      }
      console.log(`${environment.apiUrl}/api/download_test_session_files`, JSON.stringify(data));
      this.http.post(`${environment.apiUrl}/api/download_test_session_files`, data, headers)
        .then((res: any) => {
          console.log("download_test_session_files res :-" + JSON.stringify(res));
        }).catch(error => {
          // cosnole.log("this.fileListArr error  !" + JSON.stringify(error));
        });
    } else {
      // this.getTestRows();
    }
  }

  /** removed test file dropdown 24-12-2020 as new CR */
  // onChangeSelectFile(value) {
  //   this.defaultFile = "";
  //   this.defaultFile = value.trim();
  //   for (var i = 0; i < this.fileListArr.length; i++) {
  //     if (this.defaultFile == this.fileListArr[i]['ref_grade']) {
  //       /**set to localStorage */
  //       // localStorage.setItem('test_file', this.fileListArr[i]['test_file']);
  //       // localStorage.setItem('detail_id', this.fileListArr[i]['detail_id']);
  //       alert("this.fileListArr[i]['ref_grade'] :-" + this.fileListArr[i]['ref_grade']);
  //     }
  //   }
  // }

  trimSearchValues(value) {
    this.filter = "";
    this.filter = value.trim();
  }

  trimSearchFiles(value) {
    this.fileFilter = "";
    this.fileFilter = value.trim();
  }

  trimSearchGrade(value) {
    this.filterGrade = "";
    this.filterGrade = value.trim();
  }

  initializeBackButtonCustomHandler(): void {
    this.platform.backButton.subscribeWithPriority(999999, () => {
      if (localStorage.getItem('currenturl').toString().split('/')[1] == 'dashboard') {
        navigator['app'].exitApp();
      }
      else if (localStorage.getItem('TestSession').toString() == "true") {
        this.testSessionHeader = true;
        this.testSessionData = true;
        this.testSessionSubHeader = false;
        this.fileUploadPage = false;
        this.testSessionFileSubHeader = false;
        this.openFileSubForm = false;
        this.viewGradeSubHeader = false;
        this.viewGradeSubForm = false;
        localStorage.setItem('TestSession', 'false');


        if (this.network.type != "none") {
          this.getTestSessionList();

        } else if (this.network.type == "none") {
          this.getTestRows();
        }
      }
      else {
        this._location.back();
        //this.router.navigate([localStorage.getItem('bckbtnpage').toString().split('/')[1]]);
      }
    });
  }

  onClickSubmitAnswer() {
    this.lengthCheckedArr = [];
    this.checkgradeforallfiles();
    this.getFileList();
    this.images = [];
    if (this.servercurrentdate > this.deadlineDateonsubmit) {
      this.deadlinedate = 'yes';
    }
    else {
      this.deadlinedate = 'no';
    }
    //if (localStorage.getItem('userType') == 'Actor') {
    console.log('this.checkgradfiles' + this.checkgradfiles + ' -- this.falg' + this.flag + '--this.gradedfilesent--' + this.gradedfilesent + '---this.deadlinedate' + this.deadlinedate + '--servercurrentdate---' + this.servercurrentdate + '--deadline date--' + this.deadlineDateonsubmit);
    if (this.network.type != "none") { // select one record
      if (this.flag) {
        this.translate.use(this.selectedLanguage);
        this.translate.get('Please select single Test session record.').subscribe((res) => {
          alert(res);
          this.getTestSessionList();
          this.flag = true;
        });
      }
      else if (this.deadlinedate.toString() == 'yes') { //compare todays date with deadline and show alert 
        this.translate.use(this.selectedLanguage);
        this.translate.get('The time for submmitting an answer for this test is finished').subscribe((res) => {
          alert(res);
          this.getTestSessionList();
          this.deadlinedate = 'yes';
        });
      }
      else if (this.gradedfilesent.toString() == 'yes') {  // if grade sent then validate for submit answers
        console.log('onClickSubmitAnswer in this.gradedfilesent' + this.gradedfilesent);
        this.translate.use(this.selectedLanguage);
        this.translate.get('You are not allowed to submit answers as grade has been received for this test').subscribe((res) => {
          alert(res);
          this.getTestSessionList();
          this.gradedfilesent = 'yes';
        });
      }
      else if (this.checkgradfiles == 'no') {
        console.log('onClickSubmitAnswer in this.checkgradfiles' + this.checkgradfiles);
        this.translate.use(this.selectedLanguage);
        this.translate.get('You are not allowed to submit answers as grade has been received for this test').subscribe((res) => {
          alert(res);
          this.getTestSessionList();
          this.checkgradfiles = 'no';
          //return;
        });
      }
      else {

        for (var i = 0; i < this.testSessionArr.length; i++) {
          if (this.testSessionArr[i]['checked'] == true) {
            this.filter = "";
            this.fileFilter = "";
            this.filterGrade = "";
            this.testSessionHeader = false;
            this.testSessionData = false;
            this.testSessionSubHeader = true;
            this.fileUploadPage = true;
            this.testSessionFileSubHeader = false;
            this.viewGradeSubHeader = false;
            this.viewGradeSubForm = false;
            this.permissonArray = [];
            this.getFileList();
          }
        }
        if (this.flag == true) {
          this.translate.use(this.selectedLanguage);
          this.translate.get('Please select single Test session record.').subscribe((res) => {
            alert(res);
            this.flag = true;
          });
        }
      }
    } else if (this.network.type == "none") {
      if (this.flag == true) {
        this.translate.use(this.selectedLanguage);
        this.translate.get('Before click to submit,please connect internet connection').subscribe((res) => {
          alert(res);
          this.flag = true;
        });
      }
    }
    // }
    // else
    // {
    // }
  }

  onClickBackButton() {
    this.testSessionHeader = true;
    this.testSessionData = true;
    this.testSessionSubHeader = false;
    this.fileUploadPage = false;
    this.testSessionFileSubHeader = false;
    this.openFileSubForm = false;
    this.viewGradeSubHeader = false;
    this.viewGradeSubForm = false;
    this.lengthCheckedArr = [];

    if (this.network.type != "none") {
      this.getTestSessionList();

    } else if (this.network.type == "none") {
      this.getTestRows();
    }
  }

  onClickCancel() {
    this.platform.ready().then(() => {
      this.testSessionHeader = true;
      this.testSessionData = true;
      this.testSessionSubHeader = false;
      this.fileUploadPage = false;
      this.testSessionFileSubHeader = false;
      this.getTestSessionList();
    });
  }

  onClickChechbox(value, item) {
    console.log("value :-" + value);
    for (var i = 0; i < this.testSessionArr.length; i++) {
      if (item.id == this.testSessionArr[i]['id']) {
        /** select record */
        if (value == false) {
          this.flag = false;
          this.lengthCheckedArr.push(item.id);
          console.log("this.lengthCheckedArr.length :-" + this.lengthCheckedArr.length);
          if (this.lengthCheckedArr.length > 1) {
            //this.lengthCheckedArr = [];
            this.disabled = false;
            this.testIDFlag = true;
            this.translate.use(this.selectedLanguage);
            this.translate.get('Please select only one record while performing operation').subscribe((res) => {
              alert(res);
              this.getTestSessionList();
              this.lengthCheckedArr = [];
              this.testIDFlag = false;
              this.disabled = false;
            });
          }
          else {
            localStorage.setItem('testSessionId', this.testSessionArr[i]['test_session_id']);
            localStorage.setItem('testSessionNo', this.testSessionArr[i]['test_session_count_for_that_entity']);
            this.testSessionArr[i]['checked'] = true;
            this.checkboxFlag = false;
            this.checkgradeforallfiles();
            this.getFileList();
            this.gradedfilesent = this.testSessionArr[i]['graded_file_sent'];

            this.deadlineDateonsubmit = this.testSessionArr[i]['deadline_date'];
            let date = this.datepipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');
            console.log('deadline date' + date + '----' + this.testSessionArr[i]['deadline_date'])
            if (this.servercurrentdate > this.testSessionArr[i]['deadline_date']) {
              this.deadlinedate = 'yes';
            }
            else {
              this.deadlinedate = 'no';
            }
            /** disable submit button */
            if (this.testSessionArr[i]['is_received'] == '1' || this.deadlinedate.toString() == 'yes' || this.gradedfilesent.toString() == 'yes' || this.checkgradfiles == 'no') { this.disabled = true; }
            console.log('graded_file_sent :-' + this.testSessionArr[i]['graded_file_sent'] + ' -this.deadlinedate :-' + this.deadlinedate + ' -this.disabled :- ' + this.disabled);

          }
        }  /** select record */

        else if (value == true) {
          this.lengthCheckedArr = [];
          this.testSessionArr[i]['checked'] = false;
          this.testSessionArr[i]['disabled'] = false;
          this.checkboxFlag = true;
          localStorage.removeItem('testSessionId');
          this.gradedfilesent = 'no';
          this.deadlinedate = 'no';
          this.disabled = false;
          this.flag = true;
        }
      }
    }
    // if (this.testIDFlag == true) {
    //   this.translate.use(this.selectedLanguage);
    //   this.translate.get('Please select only one record while performing operation').subscribe((res) => {
    //     alert(res);
    //     this.getTestSessionList();
    //     this.lengthCheckedArr = [];
    //     this.testIDFlag = false;
    //   });
    // }
    if (this.testIDFlag == true) {
      this.translate.use(this.selectedLanguage);
      this.translate.get('Please select only one record while performing operation').subscribe((res) => {
        alert(res);
        if (this.network.type != "none") {
          this.getTestSessionList();
          this.lengthCheckedArr = [];
          this.testIDFlag = false;
          this.disabled = false;
        } else if (this.network.type == "none") {
          this.getTestRows();
          this.lengthCheckedArr = [];
          this.testIDFlag = false;
        }
      });
    }

    if (this.network.type != "none" && this.checkboxFlag == true) {
      this.getTestSessionList();
    } else if (this.network.type == "none" && this.checkboxFlag == true) {
      this.getTestRows();
    }
    for (var i = 0; i < this.testSessionArr.length; i++) {
      if (this.testSessionArr[i]['test_session_id'] != localStorage.getItem('testSessionId')) {
        this.testSessionArr[i]['disabled'] = true;
      }
      if (this.testSessionArr[i]['checked'] == true) {
        this.flag = false;
      }
    }
    for (var i = 0; i < this.testSessionArr.length; i++) {
      if (this.testSessionArr[i]['test_session_id'] != localStorage.getItem('testSessionId')) {
        this.testSessionArr[i]['disabled'] = true;
      }
    }
  }

  checkgradeforallfiles() {
    if (this.network.type != "none") {

      if (localStorage.getItem('userType') == 'Actor') {
        var data = {
          'testSessionId': localStorage.getItem('testSessionId'),
          'actorId': localStorage.getItem('userId'),
        }
      }
      else {
        var data = {
          'testSessionId': localStorage.getItem('testSessionId'),
          'actorId': localStorage.getItem('actorId'),
        }
      }
      var headers = {
        'Content-Type': 'appllication/json'
      }
      console.log(`${environment.apiUrl}/api/can_submit_test_file`, JSON.stringify(data));
      this.http.post(`${environment.apiUrl}/api/can_submit_test_file`, data, headers)
        .then((res: any) => {
          this.temp = [];
          this.temp = JSON.parse(res.data);
          console.log('this.temp ' + JSON.stringify(this.temp));
          this.checkgradfiles = this.temp.can_upload;
          console.log('this.checkgradfiles API' + this.checkgradfiles);
        }).catch(error => {
          console.log("Error In  !" + JSON.stringify(error));
        });
    }
  }

  getTestSessionList() {

    /**web API code start here */
    // this.menuService.getTestSessionData(localStorage.getItem('userId'), 264).subscribe(data => {

    //   this.temp = [];
    //   this.temp = data;

    //   this.testSessionArr = [];
    //   this.checkboxFlag == false;

    //   // for (var i = 0; i < this.temp.length; i++) {
    //   //   this.testSessionArr.push({
    //   //     'id': this.temp[i]['id'],
    //   //     'test_session_id': this.temp[i]['test_session_id'],
    //   //     'ref_grade': this.temp[i]['ref_grade'],
    //   //     'subject_name': this.temp[i]['subject_name'],
    //   //     'deadline_date': this.temp[i]['deadline_date'],
    //   //     'answer_date': this.temp[i]['answer_date'],
    //   //     'answer_file': this.temp[i]['answer_file'],
    //   //     'checked': false,
    //   //     'disabled': false
    //   //   })
    //   // }
    //   for (var i = 0; i < this.temp.length; i++) {

    //     if (this.temp[i]['answer_date'] == "0000-00-00 00:00:00") {

    //       this.testSessionArr.push({

    //         "class_id": this.temp[i]['class_id'],
    //         "class_reference": this.temp[i]['class_reference'],
    //         "class_grade": this.temp[i]['class_grade'],
    //         "ref_grade": this.temp[i]['ref_grade'],
    //         "subject_name": this.temp[i]['subject_name'],
    //         "start_date": this.temp[i]['start_date'],
    //         "test_session_id": this.temp[i]['test_session_id'],
    //         "id": this.temp[i]['id'],
    //         "actor_id": this.temp[i]['actor_id'],
    //         "deadline_date": this.temp[i]['deadline_date'],
    //         "test_file": this.temp[i]['test_file'],
    //         "test_created_by": this.temp[i]['test_created_by'],
    //         "answer_file": this.temp[i]['answer_file'],
    //         // "answer_date": this.temp[i]['answer_date'],
    //         "answer_date": "",
    //         "is_received": this.temp[i]['is_received'],
    //         "grade": this.temp[i]['grade'],
    //         "grade_decided_manager_id": this.temp[i]['grade_decided_manager_id'],
    //         "created_at": this.temp[i]['created_at'],
    //         "updated_at": this.temp[i]['updated_at'],
    //         "firstname": this.temp[i]['firstname'],
    //         "lastname": this.temp[i]['lastname'],
    //         'checked': false,
    //         'disabled': false
    //       })
    //     }

    //     if (this.temp[i]['answer_date'] != "0000-00-00 00:00:00") {
    //       this.testSessionArr.push({
    //         "class_id": this.temp[i]['class_id'],
    //         "class_reference": this.temp[i]['class_reference'],
    //         "class_grade": this.temp[i]['class_grade'],
    //         "ref_grade": this.temp[i]['ref_grade'],
    //         "subject_name": this.temp[i]['subject_name'],
    //         "start_date": this.temp[i]['start_date'],
    //         "test_session_id": this.temp[i]['test_session_id'],
    //         "id": this.temp[i]['id'],
    //         "actor_id": this.temp[i]['actor_id'],
    //         "deadline_date": this.temp[i]['deadline_date'],
    //         "test_file": this.temp[i]['test_file'],
    //         "test_created_by": this.temp[i]['test_created_by'],
    //         "answer_file": this.temp[i]['answer_file'],
    //         "answer_date": this.temp[i]['answer_date'],
    //         "is_received": this.temp[i]['is_received'],
    //         "grade": this.temp[i]['grade'],
    //         "grade_decided_manager_id": this.temp[i]['grade_decided_manager_id'],
    //         "created_at": this.temp[i]['created_at'],
    //         "updated_at": this.temp[i]['updated_at'],
    //         "firstname": this.temp[i]['firstname'],
    //         "lastname": this.temp[i]['lastname'],
    //         'checked': false,
    //         'disabled': false
    //       })
    //       // console.log("this.testSessionArr :-" + JSON.stringify(this.testSessionArr));
    //     }
    //   }

    //   //   console.log("this.testSessionArr  :-" + JSON.stringify(this.testSessionArr));
    // })
    /**Web API code end here */

    if (this.network.type != "none") {
      if (localStorage.getItem('userType') == "Actor's Parent") {
        var data = {
          "user_id": localStorage.getItem('actorId'),
          "entity_id": localStorage.getItem('entityId')
          // "user_id": "1722"
        }
      }
      else {
        var data = {
          "user_id": localStorage.getItem('userId'),
          "entity_id": localStorage.getItem('entityId')
          // "user_id": "1722"
        }
      }
      var headers = {
        'Content-Type': 'appllication/json'
      }
      console.log(`${environment.apiUrl}/api/actor_test_listing`, JSON.stringify(data));
      this.http.post(`${environment.apiUrl}/api/actor_test_listing`, data, headers)
        .then((res: any) => {
          this.temp = [];
          this.temp = JSON.parse(res.data);
          this.lengthCheckedArr = [];
          this.testIDFlag = false;
          console.log('actor_test_listing this.temp :-' + JSON.stringify(this.temp));
          this.testSessionArr = [];
          this.checkboxFlag = false;
          this.flag = true;

          localStorage.setItem('TestSession', "true");

          // grade=avg_grade
          for (var i = 0; i < this.temp.length; i++) {
            try {
              //let gradedate = new Date(this.temp[i]['graded_date']);
              let grademyDate: String = '';
              // console.log('this.temp[i][graded_date]' + this.temp[i]['graded_date']);
              if (this.temp[i]['graded_date'] != "0000-00-00 00:00:00" && this.temp[i]['graded_file_sent'] == 'yes') {
                let utcDate: Date = new Date(this.temp[i]['graded_date']);
                let tzOffset: number = new Date().getTimezoneOffset() * 60 * 1000;
                let newTime: number = utcDate.getTime() - tzOffset;
                let localDate: Date = new Date(newTime);
                grademyDate = this.datepipe.transform(localDate, 'yyyy-MM-dd HH:mm:ss');

                // console.log('if graded_date date :' + grademyDate);
              }
              else {
                grademyDate = "";
                // console.log('else graded_date date :' + grademyDate);
              }

              let date = new Date(this.temp[i]['answer_date']);
              let myDate: String = '';
              // console.log('this.temp[i][answer_date]' + this.temp[i]['answer_date']);
              if (this.temp[i]['answer_date'] == "0000-00-00 00:00:00") {
                myDate = "";
                //console.log('else answer date 00 :' + myDate);
              }
              else {
                //let localDateString: string;
                let utcDate: Date = new Date(date);
                let tzOffset: number = new Date().getTimezoneOffset() * 60 * 1000;
                let newTime: number = utcDate.getTime() - tzOffset;
                let localDate: Date = new Date(newTime);
                myDate = this.datepipe.transform(localDate, 'yyyy-MM-dd HH:mm:ss');

                // console.log('if answer date localDate:' + myDate);
              }

              // console.log('myDate :-' + this.temp[i]['test_session_count_for_that_entity'] + '--' + myDate.toString() + ' -grade -' + grademyDate.toString());

              this.testSessionArr.push({
                "class_id": this.temp[i]['class_id'],
                "class_reference": this.temp[i]['class_reference'],
                "class_grade": this.temp[i]['class_grade'],
                "ref_grade": this.temp[i]['ref_grade'],
                "subject_name": this.temp[i]['subject_name'],
                "start_date": this.temp[i]['start_date'],
                "test_session_id": this.temp[i]['test_session_id'],
                "id": this.temp[i]['id'],
                "actor_id": this.temp[i]['actor_id'],
                "deadline_date": this.temp[i]['deadline_date'],
                "test_file": this.temp[i]['test_file'],
                "test_created_by": this.temp[i]['test_created_by'],
                "answer_file": this.temp[i]['answer_file'],
                "answer_date": myDate,//this.temp[i]['answer_date'], // myDate, //  myDate.toString(),// 
                "is_received": this.temp[i]['is_received'],
                "grade": this.temp[i]['avg_grade'],
                "grade_decided_manager_id": this.temp[i]['grade_decided_manager_id'],
                "created_at": this.temp[i]['created_at'],
                "updated_at": this.temp[i]['updated_at'],
                "firstname": this.temp[i]['firstname'],
                "lastname": this.temp[i]['lastname'],
                'checked': false,
                'disabled': false,
                'test_session_count_for_that_entity': this.temp[i]['test_session_count_for_that_entity'],
                'graded_date': grademyDate, //this.temp[i]['graded_date'],  //grademyDate.toString(),//
                'graded_file_sent': this.temp[i]['graded_file_sent']
              })
            }
            catch (error) {
              console.log('this.temp error' + error + '--json' + JSON.stringify(error));
            }
          }
          /** Enable submit button which was disabled while file uploading  */
          this.disabled = false;
          //console.log('this.testSessionArr' + JSON.stringify(this.testSessionArr));
          this.insertTestRow();
          // alert("this.testSessionArr Online GET Res Is :-" + this.testSessionArr);
        }).catch(error => {
          // alert("Test listing error  !" + JSON.stringify(error));
        });
    } else {
      // this.getTestRows();
    }
  }

  onClickOpenFile() {
    this.lengthCheckedArr = [];

    //console.log("this.testSessionArr :-" + JSON.stringify(this.testSessionArr));

    /**Web API code start here */

    // for (var i = 0; i < this.testSessionArr.length; i++) {

    //   if (this.testSessionArr[i]['checked'] == true) {

    //     this.menuService.getData(localStorage.getItem('testSessionId'), 'open').subscribe(data => {
    //       var temp;
    //       temp = [];
    //       temp = data;

    //       this.openFileSubForm = true;
    //       this.testSessionHeader = false;
    //       this.testSessionData = false;
    //       this.testSessionSubHeader = false;
    //       this.fileUploadPage = false;
    //       this.testSessionFileSubHeader = true;

    //       this.testSessionFiles = [];
    //       for (var i = 0; i < temp.length; i++) {
    //         this.testSessionFiles.push({
    //           "id": temp[i]['id'],
    //           "entity_id": temp[i]['entity_id'],
    //           "class_id": temp[i]['class_id'],
    //           "subject_id": temp[i]['subject_id'],
    //           "start_date": temp[i]['start_date'],
    //           "deadline_date": temp[i]['deadline_date'],
    //           "is_delete": temp[i]['is_delete'],
    //           "send_and_start": temp[i]['send_and_start'],
    //           "created_at": temp[i]['created_at'],
    //           "updated_at": temp[i]['updated_at'],
    //           "test_file": temp[i]['test_file'],
    //           "detail_id": temp[i]['detail_id'],
    //           "test_session_id": temp[i]['test_session_id'],
    //           "test_created_by": temp[i]['test_created_by'],
    //           "firstname": temp[i]['firstname'],
    //           "lastname": temp[i]['lastname'],
    //           'icon': 'download'
    //         })
    //       }
    //       console.log("this.testSessionFiles :-" + JSON.stringify(this.testSessionFiles));
    //     })
    //   } else {
    //     // this.translate.use(this.selectedLanguage);
    //     // this.translate.get('Before to open file, Please select test from list').subscribe((res) => {
    //     //   alert(res);
    //     // });
    //   }
    // }
    /**Web API code end here */

    this.filter = "";
    this.fileFilter = "";
    this.filterGrade = "";

    if (this.network.type != "none") {

      // var data = {
      //   "test_session_id": localStorage.getItem('testSessionId'),
      //   "operation": 'open'
      // }

      var data = {
        'user_id': localStorage.getItem('userId'),
        'ip_address': this.deviceid,//this.IPAddress,
        "test_session_id": localStorage.getItem('testSessionId'),
        "operation": "open",
        "entity_id": localStorage.getItem('entityId')
      }

      var headers = {
        'Content-Type': 'appllication/json'
      }

      for (var i = 0; i < this.testSessionArr.length; i++) {
        if (this.testSessionArr[i]['checked'] == true) {
          console.log(`${environment.apiUrl}/api/list_test_session_files/open`, JSON.stringify(data));
          this.http.post(`${environment.apiUrl}/api/list_test_session_files/open`, data, headers)
            .then((res: any) => {

              this.tempArr = [];
              this.tempArr = JSON.parse(res.data);
              console.log("this.tempArr open file :-" + JSON.stringify(this.tempArr));

              this.openFileSubForm = true;
              this.testSessionHeader = false;
              this.testSessionData = false;
              this.testSessionSubHeader = false;
              this.fileUploadPage = false;
              this.testSessionFileSubHeader = true;
              this.viewGradeSubHeader = false;
              this.viewGradeSubForm = false;
              this.permissonArray = [];

              this.testSessionFiles = [];
              for (var i = 0; i < this.tempArr.length; i++) {
                // this.testSessionFiles.push({
                //   "id": this.tempArr[i]['id'],
                //   "entity_id": this.tempArr[i]['entity_id'],
                //   "class_id": this.tempArr[i]['class_id'],
                //   "subject_id": this.tempArr[i]['subject_id'],
                //   "start_date": this.tempArr[i]['start_date'],
                //   "deadline_date": this.tempArr[i]['deadline_date'],
                //   "is_delete": this.tempArr[i]['is_delete'],
                //   "send_and_start": this.tempArr[i]['send_and_start'],
                //   "created_at": this.tempArr[i]['created_at'],
                //   "updated_at": this.tempArr[i]['updated_at'],
                //   "test_file": this.tempArr[i]['test_file'],
                //   "detail_id": this.tempArr[i]['detail_id'],
                //   "test_session_id": this.tempArr[i]['test_session_id'],
                //   "test_created_by": this.tempArr[i]['test_created_by'],
                //   "firstname": this.tempArr[i]['firstname'],
                //   "lastname": this.tempArr[i]['lastname'],
                //   'icon': 'download'
                // })
                this.isExistfile(this.tempArr[i]['id'], this.tempArr[i]['entity_id'], this.tempArr[i]['class_id'], this.tempArr[i]['subject_id'],
                  this.tempArr[i]['start_date'], this.tempArr[i]['deadline_date'], this.tempArr[i]['is_delete'], this.tempArr[i]['send_and_start'],
                  this.tempArr[i]['created_at'], this.tempArr[i]['updated_at'], this.tempArr[i]['test_file'], this.tempArr[i]['detail_id'],
                  this.tempArr[i]['test_session_id'], this.tempArr[i]['test_created_by'], this.tempArr[i]['firstname'], this.tempArr[i]['lastname']);
              }

              console.log('this.testSessionFiles' + JSON.stringify(this.testSessionFiles));

              this.insertOpenTestFiles();
              //unhide the submit answer file
              this.disabled = false;
              // alert("this.testSessionArr  :-" + this.testSessionArr);
            }).catch(error => {
              // alert("Test session/file open error !" + JSON.stringify(error));
            });
        }
      }

      if (this.flag == true) {
        this.translate.use(this.selectedLanguage);
        this.translate.get('Please select single Test session record.').subscribe((res) => {
          alert(res);
          this.flag = true;
        });
      }
    } else if (this.network.type == "none") {

      if (this.flag == true) {
        this.translate.use(this.selectedLanguage);
        this.translate.get('Please select single Test session record.').subscribe((res) => {
          alert(res);
          this.flag = true;
        });
      }

      this.getTestFileRows();
    }
  }

  isExistfile(id, entity_id, class_id, subject_id, start_date, deadline_date, is_delete, send_and_start, created_at,
    updated_at, test_file, detail_id, test_session_id, test_created_by, firstname, lastname) {

    let folderdir = 'Documents/Jawata/' + localStorage.getItem('citizen_id') + '/' + localStorage.getItem('entity_no') + '/Tests/' + localStorage.getItem('testSessionNo') + '/';
    let storedpath = this.file.externalRootDirectory + folderdir + '/';//'my_downloads/';
    console.log('storedpath :-' + storedpath, test_file)
    this.file.checkFile(storedpath, test_file).then((files) => {
      console.log('if exist' + JSON.stringify(files))
    },
      (error) => {
        console.log('else exist' + JSON.stringify(error))
      });
    //return this.file.checkFile(this.file.externalDataDirectory, test_file).then(
    return this.file.checkFile(storedpath, test_file).then((files) => {
      this.isExist = true;
      // this.testSessionFiles = [];

      this.testSessionFiles.push({
        "id": id,
        "entity_id": entity_id,
        "class_id": class_id,
        "subject_id": subject_id,
        "start_date": start_date,
        "deadline_date": deadline_date,
        "is_delete": is_delete,
        "send_and_start": send_and_start,
        "created_at": created_at,
        "updated_at": updated_at,
        "test_file": test_file,
        "detail_id": detail_id,
        "test_session_id": test_session_id,
        "test_created_by": test_created_by,
        "firstname": firstname,
        "lastname": lastname,
        'icon': 'open'
      });
    }).catch(
      (err) => {
        this.isExist = false;
        this.testSessionFiles.push({
          "id": id,
          "entity_id": entity_id,
          "class_id": class_id,
          "subject_id": subject_id,
          "start_date": start_date,
          "deadline_date": deadline_date,
          "is_delete": is_delete,
          "send_and_start": send_and_start,
          "created_at": created_at,
          "updated_at": updated_at,
          "test_file": test_file,
          "detail_id": detail_id,
          "test_session_id": test_session_id,
          "test_created_by": test_created_by,
          "firstname": firstname,
          "lastname": lastname,
          'icon': 'download'
        });
      });
  }

  /** get selected files... */
  getFiles(): FileLikeObject[] {
    return this.fileUploader.queue.map((fileItem) => {
      return fileItem.file;
    });
  }

  uploadFiles() {

    console.log('this.fileUploadedcount uploadfiles :---' + this.fileUploadedcount);

    this.http.setServerTrustMode('nocheck');
    this.http.setHeader('*', 'Access-Control-Allow-Origin', '*');

    if (this.fileUploadedcount == 0) {
      this.translate.use(this.selectedLanguage);
      this.translate.get('Please select file to upload').subscribe((res: string) => {
        alert(res);
      });
    }
    //if (this.defaultFile != '' && this.fileUploadedcount > 0) {
    else {
      let files = this.getFiles();
      let requests = [];
      console.log("files", files);
      files.forEach((file) => {
        let formData = new FormData();
        console.log(file.rawFile);
        console.log(file.name);
        formData.append('files', file.rawFile, file.name);
        requests.push(this.menuService.uploadFormData(formData));
      });
      concat(...requests).subscribe(
        (res) => {
          let dateTime = this.datepipe.transform(new Date(), 'yyyy-MM-dd HH-mm-ss');
          console.log('res url:-' + res['url'] + '--JSON ' + JSON.stringify(res));

          if (localStorage.getItem('userType') == 'Actor') {
            var forrmdata = {
              'testSessionId': localStorage.getItem('testSessionId'),
              'actorId': localStorage.getItem('userId'),
              'ip_address': this.IPAddress,
              'answerFileUpload': res['url'],
              //testSessionFile: this.defaultFile,
              'dateTime': dateTime
            }
          }
          else {
            var forrmdata = {
              'testSessionId': localStorage.getItem('testSessionId'),
              'actorId': localStorage.getItem('actorId'),
              'ip_address': this.IPAddress,
              'answerFileUpload': res['url'],
              //testSessionFile: this.defaultFile,
              'dateTime': dateTime
            }
          }
          let headers = {
            'Content-Type': 'application/json',
          }
          console.log(`${environment.apiUrl}/api/upload_test_files`, forrmdata);
          this.http.post(`${environment.apiUrl}/api/upload_test_files`, forrmdata, headers).then((data: any) => {
            console.log('File move API response :-' + JSON.stringify(data));
          }).catch(error => {
            console.log(" Error Here move file in API :-!" + JSON.stringify(error));
          });
          this.testSessionHeader = true;
          this.fileUploadedcount = 0;
          this.fileUploadPage = false;
          this.testSessionData = true;
          this.onClickCancel();
          //this.getTestSessionList();
          /** */
          for (var i = 0; i < this.fileUploader.queue.length; i++) {
            this.fileUploader.queue[i].remove();
            let files = this.getFiles();
            files.forEach((file) => {
              console.log(' Remove file' + file.rawFile);
              console.log(' Remove file name:-' + file.name);
            });

          }

        },
        (err) => {
          console.log(err);
        }
      );
    }

  }

  // count how many times user click on file upload control and clear the existing entry before new file
  onClickFile(str) {
    if (str.target.files.length > 0) {
      if (this.fileUploadedcount == 0) {
        this.fileUploadedcount++;
        console.log('this.fileUploadedcount++ :-' + this.fileUploadedcount);
      }
      else {
        if (this.fileUploadedcount > 0) {
          for (var i = 0; i < this.fileUploader.queue.length; i++) {
            this.fileUploader.queue[i].remove();
            let files = this.getFiles();
            files.forEach((file) => {
              //let formData = new FormData();
              console.log(' Remove file' + file.rawFile);
              console.log(' Remove file name:-' + file.name);
              //formData.append('files', file.rawFile, file.name);
            });

          }
        }
      }
    }

  }



  downloadVar = "";
  openFileVar = "";
  yesVar = "";
  noVar = "";


  openDownloadedFile() {
    let fileExtn = this.filepath.split('.').reverse()[0];
    console.log('openDownloadedFile :- ' + this.filepath);
    for (var i = 0; i < this.fileTypeArr.length; i++) {
      if (fileExtn == this.fileTypeArr[i]['fileType']) {
        var fileType = this.fileTypeArr[i]['fileExtension'];
      }
    }

    this.fileOpener.open(this.filepath, fileType)
      .then()
      .then()
      .catch(e =>
        console.log("Error opening file :-" + JSON.stringify(e))
      );
  }

  onClickViewGrade() {
    this.lengthCheckedArr = [];

    console.log('this.gradedfilesent onClickViewGrade() : ' + this.gradedfilesent);
    if (this.gradedfilesent == 'yes') {
      this.filter = "";
      this.fileFilter = "";
      this.filterGrade = "";

      if (this.network.type != "none") {

        // alert("flag Inside of Grade :-" + this.flag);

        for (var i = 0; i < this.testSessionArr.length; i++) {

          if (this.testSessionArr[i]['checked'] == true) {


            /**Web API Code Start here */
            // this.menuService.getGrade(localStorage.getItem('testSessionId'), localStorage.getItem('userId')).subscribe(res => {

            //   var temp;
            //   temp = [];
            //   temp = res

            //     this.tempGradeList = [];
            //   this.tempGradeList = temp.data;

            //   // this.flag = true;
            //   this.openFileSubForm = false;
            //   this.testSessionHeader = false;
            //   this.testSessionData = false;
            //   this.testSessionSubHeader = false;
            //   this.fileUploadPage = false;
            //   this.testSessionFileSubHeader = false;
            //   this.viewGradeSubHeader = true;
            //   this.viewGradeSubForm = true;
            //   this.gradeListArr = [];

            //   for (var i = 0; i < this.tempGradeList.length; i++) {

            //     this.gradeListArr.push({

            //       "id": this.tempGradeList[i]['id'],
            //       "test_session_id": this.tempGradeList[i]['test_session_id'],
            //       "actor_id": this.tempGradeList[i]['actor_id'],
            //       "deadline_date": this.tempGradeList[i]['deadline_date'],
            //       "test_file": this.tempGradeList[i]['test_file'],
            //       "test_created_by": this.tempGradeList[i]['test_created_by'],
            //       "answer_file": this.tempGradeList[i]['answer_file'],
            //       "answer_date": this.tempGradeList[i]['answer_date'],
            //       "is_received": this.tempGradeList[i]['is_received'],
            //       "graded_file": this.tempGradeList[i]['graded_file'],
            //       "graded_date": this.tempGradeList[i]['graded_date'],
            //       "grade_decided_manager_id": this.tempGradeList[i]['grade_decided_manager_id'],
            //       "graded_file_sent": this.tempGradeList[i]['graded_file_sent'],
            //       "file_grade": this.tempGradeList[i]['file_grade'],
            //       "avg_grade": this.tempGradeList[i]['avg_grade'],
            //       "created_at": this.tempGradeList[i]['created_at'],
            //       "updated_at": this.tempGradeList[i]['updated_at'],
            //       "entity_id": this.tempGradeList[i]['entity_id'],
            //       "class_id": this.tempGradeList[i]['class_id'],
            //       "subject_id": this.tempGradeList[i]['subject_id'],
            //       "start_date": this.tempGradeList[i]['start_date'],
            //       "is_delete": this.tempGradeList[i]['is_delete'],
            //       "send_and_start": this.tempGradeList[i]['send_and_start'],
            //       'icon': 'download'
            //     })
            //   }
            // })
            /** Web API code end here */
            if (localStorage.getItem('userType') == 'Actor') {
              var data = {
                "actorId": localStorage.getItem('userId'),
                "testSessionId": localStorage.getItem('testSessionId'),
              }
            } else {
              var data = {
                "actorId": localStorage.getItem('actorId'),
                "testSessionId": localStorage.getItem('testSessionId'),
              }
            }

            var headers = {
              'Content-Type': 'appllication/json'
            }

            console.log(`${environment.apiUrl}/api/list_graded_files`, JSON.stringify(data));
            this.http.post(`${environment.apiUrl}/api/list_graded_files`, data, headers)
              .then((res: any) => {

                var temp;
                temp = [];
                temp = JSON.parse(res.data)

                this.tempGradeList = [];
                this.tempGradeList = temp.data;
                console.log('this.tempGradeList' + JSON.stringify(this.tempGradeList));

                // this.flag = true;
                this.openFileSubForm = false;
                this.testSessionHeader = false;
                this.testSessionData = false;
                this.testSessionSubHeader = false;
                this.fileUploadPage = false;
                this.testSessionFileSubHeader = false;
                this.viewGradeSubHeader = true;
                this.viewGradeSubForm = true;
                this.gradeListArr = [];
                this.permissonArray = [];

                for (var i = 0; i < this.tempGradeList.length; i++) {

                  this.isExistGradeFile(this.tempGradeList[i]['id'], this.tempGradeList[i]['test_session_id'], this.tempGradeList[i]['actor_id'], this.tempGradeList[i]['deadline_date'],
                    this.tempGradeList[i]['test_file'], this.tempGradeList[i]['test_created_by'], this.tempGradeList[i]['answer_file'], this.tempGradeList[i]['answer_date'],
                    this.tempGradeList[i]['is_received'], this.tempGradeList[i]['graded_file'], this.tempGradeList[i]['graded_date'], this.tempGradeList[i]['grade_decided_manager_id'],
                    this.tempGradeList[i]['graded_file_sent'], this.tempGradeList[i]['file_grade'], this.tempGradeList[i]['avg_grade'], this.tempGradeList[i]['created_at'],
                    this.tempGradeList[i]['updated_at'], this.tempGradeList[i]['entity_id'], this.tempGradeList[i]['class_id'], this.tempGradeList[i]['subject_id'], this.tempGradeList[i]['start_date'],
                    this.tempGradeList[i]['is_delete'], this.tempGradeList[i]['send_and_start'])
                }
                this.insertGradeList();
                //unhide the submit answer file
                this.disabled = false;
                // alert("this.testSessionArr  :-" + this.testSessionArr);
              }).catch(error => {
                console.log("Grade list error !" + JSON.stringify(error));
              });
          }
        }

        if (this.flag == true) {
          this.translate.use(this.selectedLanguage);
          this.translate.get('Please select single Test session record.').subscribe((res) => {
            alert(res);
            this.flag = true;
          });
        }
      } else if (this.network.type == "none") {

        for (var i = 0; i < this.testSessionArr.length; i++) {

          if (this.testSessionArr[i]['checked'] == true) {

            this.getGradeList();
            this.openFileSubForm = false;
            this.testSessionHeader = false;
            this.testSessionData = false;
            this.testSessionSubHeader = false;
            this.fileUploadPage = false;
            this.testSessionFileSubHeader = false;
            this.viewGradeSubHeader = true;
            this.viewGradeSubForm = true;
          }
        }

        if (this.flag == true) {
          this.translate.use(this.selectedLanguage);
          this.translate.get('Please select single Test session record.').subscribe((res) => {
            alert(res);
            this.flag = true;
          });
        }
      }
    }
    else {
      if (this.flag == true) {
        this.translate.use(this.selectedLanguage);
        this.translate.get('Please select single Test session record.').subscribe((res) => {
          alert(res);
          this.flag = true;
        });
      }
      else {
        this.translate.use(this.selectedLanguage);
        this.translate.get("Grade's for this test are not yet received").subscribe((res) => {
          alert(res);
        });
      }
    }
  }

  createdirJawata(vartest) {
    this.platform.ready().then(() => {
      //check directory for jawata
      this.file.checkDir(this.file.externalRootDirectory, 'Jawata').then(response => {
        console.log('Directory already present for this Jawata :- ' + response);

        //check directory for entity
        this.file.checkDir(this.file.externalRootDirectory + 'Jawata' + '/', localStorage.getItem('entity_no') + '/').then(response => {
          console.log('Directory already present for this Entity :- ' + response);

          //check directory for Test 
          this.file.checkDir(this.file.externalRootDirectory + 'Jawata' + '/' + localStorage.getItem('entity_no') + '/', vartest + '/').then(response => {
            console.log('Directory already present for this Tests :- ' + response);

          },
            error => {
              // create directory for Tests
              this.file.createDir(this.file.externalRootDirectory + 'Jawata' + '/' + localStorage.getItem('entity_no') + '/', vartest + '/', false).then(response => {
                console.log('in function createDir for class', response);
              });
            });

        }, error => {
          //create entity 
          this.file.createDir(this.file.externalRootDirectory + 'Jawata' + '/', localStorage.getItem('entity_no') + '/', false).then(response => {
            console.log('in function createDir for entity :-', response);

            //check directory for Tests 
            this.file.checkDir(this.file.externalRootDirectory + 'Jawata' + '/' + localStorage.getItem('entity_no') + '/', vartest + '/').then(response => {
              console.log('Directory already present for this Tests :- ' + response);

            },
              error => {
                // create directory for Tests
                this.file.createDir(this.file.externalRootDirectory + 'Jawata' + '/' + localStorage.getItem('entity_no') + '/', vartest + '/', false).then(response => {
                  console.log('in function createDir for class', response);
                });
              });
          });

        });


      },
        error => {
          console.log('Directory doesn\'t exist jawata :- ' + JSON.stringify(error));

          this.file.createDir(this.file.externalRootDirectory, 'Jawata', false).then(response => {
            console.log('createDir for jawata ', response);

            //create entity
            this.file.createDir(this.file.externalRootDirectory + 'Jawata' + '/', localStorage.getItem('entity_no') + '/', false).then(response => {
              console.log('in function createDir for entity :-', response);

              // create directory for Test
              this.file.createDir(this.file.externalRootDirectory + 'Jawata' + '/' + localStorage.getItem('entity_no') + '/', vartest + '/', false).then(response => {
                console.log('in function createDir for Tests', response);
              });

            }, error => {
              // create directory for Test
              this.file.createDir(this.file.externalRootDirectory + 'Jawata' + '/' + localStorage.getItem('entity_no') + '/', vartest + '/', false).then(response => {
                console.log('in function createDir for Tests', response);
              });

            });
          },
            error => {
              console.error('error to create jawata' + this.file.externalRootDirectory + 'Jawata' + '/');
              console.log('path exist :-' + JSON.stringify(error));
              //create entity
              this.file.createDir(this.file.externalRootDirectory + 'Jawata' + '/', localStorage.getItem('entity_no') + '/', false).then(response => {
                console.log('in function createDir for entity :-', response);
              });

            });
        });
    });
  }



  createdirTestSessionID(subject, vartest) {
    let folderdir = 'Documents/Jawata/' + localStorage.getItem('citizen_id') + '/' + localStorage.getItem('entity_no') + '/Tests/' + localStorage.getItem('testSessionNo') + '/';

    //this.file.checkDir(this.file.externalRootDirectory + 'Jawata' + '/' + localStorage.getItem('entity_no') + '/' + vartest + '/', subject + '/').then(response => {
    this.file.checkDir(this.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id') + '/' + localStorage.getItem('entity_no') + '/' + vartest + '/', subject + '/').then(response => {
      console.log('Directory already present for this test session ID  :- ' + this.file.externalRootDirectory + 'Jawata' + '/' + localStorage.getItem('entity_no') + '/' + vartest + '/', subject + '/');
      return true;
    },
      error => {
        console.log('Directory doesn\'t exist session ID  :-' + JSON.stringify(error));

        this.platform.ready().then(() => {
          this.file.createDir(this.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id') + '/' + localStorage.getItem('entity_no') + '/' + vartest + '/', subject + '/', false).then(response => {
            console.log('in function createDir for tests session ID ', response);
          });
        });
      });
  }

  onClickDownload(fileName, testSessionId, entityId, classId, icon) {

    console.log('this.network.type' + this.network.type + '--icon--' + icon);
    if (this.network.type != "none") {

      if (icon.toString() == 'open') {
        //this.filepath = this.file.externalDataDirectory + fileName;
        let folderdir = 'Documents/Jawata/' + localStorage.getItem('citizen_id') + '/' + localStorage.getItem('entity_no') + '/Tests/' + localStorage.getItem('testSessionNo') + '/';
        let storedpath = this.file.externalRootDirectory + folderdir + '/';//'my_downloads/';
        this.filepath = storedpath + fileName;
        console.log('online this.filepath :- ' + this.filepath);
        this.openDownloadedFile();
      } else {

        console.log('this.file.externalRootDirectory' + this.file.externalRootDirectory + '--this.haspermission:-' + this.haspermission);
        console.log('this.file.externalDataDirectory' + this.file.externalDataDirectory);

        var url = `${environment.apiUrl}/test_sessions/Target/TestFile/` + testSessionId + '/' + fileName;
        console.log("URL is :-" + url);

        /**check permission ,  create folder and save file , change icon status */
        if (this.haspermission) {
          let folderdir = 'Documents/Jawata/' + localStorage.getItem('citizen_id') + '/' + localStorage.getItem('entity_no') + '/Tests/' + localStorage.getItem('testSessionNo') + '/';
          // filetransfer download
          let storedpath = this.file.externalRootDirectory + folderdir + '/';//'my_downloads/';

          var request: DownloadRequest = {
            uri: encodeURI(url),
            // title: 'MyDownload',
            title: fileName,
            description: '',
            mimeType: '',
            visibleInDownloadsUi: true,
            notificationVisibility: NotificationVisibility.VisibleNotifyCompleted,
            destinationInExternalFilesDir: {
              dirType: fileName,
              subPath: ''
            }
          };

          console.log("DownloadRequest is :-" + JSON.stringify(request));
          try {
            this.file.checkDir(this.file.externalRootDirectory, folderdir.toString()).then(response => {
              console.log('Directory already present :- ' + folderdir.toString());

              const fileTransfer1: FileTransferObject = this.transfer.create();
              fileTransfer1.download(encodeURI(url), storedpath + fileName, true).then((entry) => {
                console.log('this.fileTransfer.download (entry) if :-' + JSON.stringify(entry));
                this.filepath = entry.toURL();
                console.log("Downloaded File Path :-" + this.filepath);

                this.downloader.download(request)
                  .then((location: string) => {
                    console.log('File downloaded at:' + location);
                  }).catch((error: any) =>
                    console.error('DOWNLOAD error' + error)
                  );
                /**Log entry */
                this.LogEntryForDownloadTestFile();
                /**after download change the icon status */
                this.onClickOpenFile();

              }, (error) => {
                // handle error
                console.log('File Download Error Here !' + JSON.stringify(error));
              });
            }, error => {
              console.log('Directory doesn\'t exist jawata :- ' + JSON.stringify(error) + '--Path--' + folderdir);
              //this.createdirJawata('Tests');
              this.createdirTests();
              this.createdirTestSessionID(testSessionId, 'Tests');
              const fileTransfer2: FileTransferObject = this.transfer.create();
              fileTransfer2.download(encodeURI(url), storedpath + fileName, true).then((entry) => {
                console.log('this.fileTransfer.download (entry) if :-' + JSON.stringify(entry));
                this.filepath = entry.toURL();
                console.log("Downloaded File Path :-" + this.filepath);

                this.downloader.download(request)
                  .then((location: string) => {
                    console.log('File downloaded at:' + location);
                  }).catch((error: any) =>
                    console.error('DOWNLOAD error' + error)
                  );
                /**Log entry */
                this.LogEntryForDownloadTestFile();

                this.onClickOpenFile();

              }, (error) => {
                // handle error
                console.log('File Download Error Here !' + JSON.stringify(error));
              });
            });
          }
          catch (error) {
            console.log('catch block :' + JSON.stringify(error));
          }


          // this.file.createDir(this.file.externalRootDirectory, folderdir.toString(), true).then(response => {
          //   console.log('Directory created', response);

          //   // save file from server
          //   this.fileTransfer.download(encodeURI(url), storedpath + fileName, true).then((entry) => {
          //     console.log('this.fileTransfer.download (entry) if :-' + JSON.stringify(entry));

          //     this.filepath = entry.toURL();
          //     console.log("Downloaded File Path :-" + this.filepath);

          //     this.onClickOpenFile();

          //   }, (error) => {
          //     // handle error
          //     console.log('File Download Error Here !' + JSON.stringify(error));

          //   });
          // },
          //   (error) => {
          //     console.log('dir error :-' + JSON.stringify(error));

          //     // save file from server
          //     this.fileTransfer.download(encodeURI(url), storedpath + fileName, true).then((entry) => {
          //       console.log('this.fileTransfer.download (entry) else :-' + JSON.stringify(entry));

          //       this.filepath = entry.toURL();
          //       console.log("Downloaded File Path :-" + this.filepath);

          //       /**after download change the icon status */
          //       this.onClickOpenFile();

          //     }, (error) => {
          //       // handle error
          //       console.log('File Download Error Here !' + JSON.stringify(error));
          //     });
          //   });
        }
        else {
          console.log('else permission :-' + this.haspermission);
          this.getstoragepermission();
        }
      }
    } else {

      if (icon == 'open') {
        //this.filepath = this.file.externalDataDirectory + fileName;
        let folderdir = 'Documents/Jawata/' + localStorage.getItem('citizen_id') + '/' + localStorage.getItem('entity_no') + '/Tests/' + localStorage.getItem('testSessionNo') + '/';
        let storedpath = this.file.externalRootDirectory + folderdir + '/';//'my_downloads/';
        this.filepath = storedpath + fileName;

        console.log('Offline this.filepath :- ' + this.filepath);
        let fileExtn = this.filepath.split('.').reverse()[0];

        for (var i = 0; i < this.fileTypeArr.length; i++) {
          if (fileExtn == this.fileTypeArr[i]['fileType']) {
            var fileType = this.fileTypeArr[i]['fileExtension'];
          }
        }

        this.fileOpener.open(this.filepath, fileType)
          .then()
          .then()
          .catch(e => console.log("Error opening file :-" + JSON.stringify(e)));
      }
      else {
        this.translate.use(this.selectedLanguage);
        this.translate.get('Before to download file, Please connect internet connection').subscribe((res) => {
          alert(res);
        });
      }

    }

    /** Old download code end from here */

  }

  downLoadGradefile(fileName, testSessionId, entityId, classId, icon) {

    /**New Downloader plugin code start from here */

    //var url = `${environment.apiUrl}/test_sessions/Target/GradedFile/` + testSessionId + '/' + localStorage.getItem('userId') + '/' + fileName;
    var url = '';
    if (localStorage.getItem('userType') == "Actor's Parent") {
      url = `${environment.apiUrl}/test_sessions/Target/GradedFile/` + testSessionId + '/' + localStorage.getItem('actorId') + '/' + fileName;
    }
    else {
      url = `${environment.apiUrl}/test_sessions/Target/GradedFile/` + testSessionId + '/' + localStorage.getItem('userId') + '/' + fileName;
    }
    var request: DownloadRequest = {
      uri: encodeURI(url),
      // title: 'MyDownload',
      title: fileName,
      description: '',
      mimeType: '',
      visibleInDownloadsUi: true,
      notificationVisibility: NotificationVisibility.VisibleNotifyCompleted,
      destinationInExternalFilesDir: {
        dirType: 'Download',
        subPath: ''
      }
    };

    /** Old download code start from here */

    console.log('this.network.type' + this.network.type + '--icon--' + icon);
    console.log("fileName,testSessionId, entityId, classId, icon :-" + fileName, testSessionId, entityId, classId, icon);
    if (this.network.type != "none") {

      if (icon.toString() == 'open') {
        //this.filepath = this.file.externalDataDirectory + fileName;
        let folderdir = 'Documents/Jawata/' + localStorage.getItem('citizen_id') + '/' + localStorage.getItem('entity_no') + '/Tests/' + localStorage.getItem('testSessionNo') + '/';
        let storedpath = this.file.externalRootDirectory + folderdir + '/';//'my_downloads/';
        this.filepath = storedpath + fileName;
        console.log('online this.filepath :- ' + this.filepath);
        this.openDownloadedFile();
      }
      else {
        if (localStorage.getItem('userType') == "Actor's Parent") {
          url = `${environment.apiUrl}/test_sessions/Target/GradedFile/` + testSessionId + '/' + localStorage.getItem('actorId') + '/' + fileName;
        }
        else {
          url = `${environment.apiUrl}/test_sessions/Target/GradedFile/` + testSessionId + '/' + localStorage.getItem('userId') + '/' + fileName;
        }
        console.log("URL is :-" + url);
        /**check permission ,  create folder and save file , change icon status */
        if (this.haspermission) {
          // create dir
          this.platform.ready().then(() => {
            let folderdir = 'Documents/Jawata/' + localStorage.getItem('citizen_id') + '/' + localStorage.getItem('entity_no') + '/Tests/' + localStorage.getItem('testSessionNo') + '/';
            let storedpath = this.file.externalRootDirectory + folderdir + '/';//'my_downloads/';

            var request: DownloadRequest = {
              uri: url,
              // title: 'MyDownload',
              title: fileName,
              description: '',
              mimeType: '',
              visibleInDownloadsUi: true,
              notificationVisibility: NotificationVisibility.VisibleNotifyCompleted,
              destinationInExternalFilesDir: {
                dirType: fileName,
                subPath: ''
              }
            };
            console.log("DownloadRequest is :-" + JSON.stringify(request));

            try {
              this.file.checkDir(this.file.externalRootDirectory, folderdir.toString()).then(response => {
                console.log('Directory already present :- ' + folderdir.toString());

                const fileTransfer4: FileTransferObject = this.transfer.create();
                fileTransfer4.download(encodeURI(url), storedpath + fileName, true).then((entry) => {
                  console.log('this.fileTransfer.download (entry) if :-' + JSON.stringify(entry));
                  this.filepath = entry.toURL();
                  console.log("Downloaded File Path :-" + this.filepath);

                  this.downloader.download(request)
                    .then((location: string) => {
                      /**after download change the icon status */
                      this.onClickViewGrade();

                      console.log('File downloaded at:' + location);
                    }).catch((error: any) =>
                      console.error('DOWNLOAD error' + error)
                    );

                }, (error) => {
                  // handle error
                  console.log('File Download Error Here !' + JSON.stringify(error));
                });
              }, error => {
                console.log('Directory doesn\'t exist jawata :- ' + JSON.stringify(error) + '--Path--' + folderdir);
                //this.createdirJawata('Grade');
                this.createdirTests();
                this.createdirTestSessionID(testSessionId, 'Grade');
                const fileTransfer3: FileTransferObject = this.transfer.create();
                fileTransfer3.download(encodeURI(url), storedpath + fileName, true).then((entry) => {
                  console.log('this.fileTransfer.download (entry) if :-' + JSON.stringify(entry));
                  this.filepath = entry.toURL();
                  console.log("Downloaded File Path :-" + this.filepath);

                  this.downloader.download(request)
                    .then((location: string) => {
                      this.onClickViewGrade();
                      console.log('File downloaded at:' + location);
                    }).catch((error: any) =>
                      console.error('DOWNLOAD error' + error)
                    );


                }, (error) => {
                  // handle error
                  console.log('File Download Error Here !' + JSON.stringify(error));
                });
              });
            }
            catch (error) {
              console.log('catch block :' + JSON.stringify(error));
            }


            // this.file.createDir(this.file.externalRootDirectory, folderdir.toString(), true).then(response => {
            //   console.log('Directory created', response);

            //   // save file from server
            //   this.fileTransfer.download(encodeURI(url), storedpath + fileName, true).then((entry) => {
            //     console.log('this.fileTransfer.download (entry) if :-' + JSON.stringify(entry));

            //     this.filepath = entry.toURL();
            //     console.log("Downloaded File Path :-" + this.filepath);
            //     //this.openDownloadedFile();
            //     this.onClickViewGrade();

            //   }, (error) => {
            //     // handle error
            //     console.log('File Download Error Here !' + JSON.stringify(error));

            //   });
            // },
            //   (error) => {
            //     // save file from server

            //     this.fileTransfer.download(encodeURI(url), storedpath + fileName, true).then((entry) => {
            //       console.log('this.fileTransfer.download (entry) else :-' + JSON.stringify(entry));

            //       this.filepath = entry.toURL();
            //       console.log("Downloaded File Path :-" + this.filepath);
            //       // let folderdir = 'Jawata/' + localStorage.getItem('entity_no') + '/Grade/' + testSessionId + '/';
            //       // let storedpath = this.file.externalRootDirectory + folderdir + '/';//'my_downloads/';
            //       // this.filepath = storedpath + fileName;
            //       // console.log('online this.filepath :- ' + this.filepath);
            //       // this.openDownloadedFile();

            //       /**after download change the icon status */
            //       this.onClickViewGrade();

            //     }, (error) => {
            //       // handle error
            //       console.log('File Download Error Here !' + JSON.stringify(error));

            //     });
            //     console.log('dir error :-' + JSON.stringify(error));

            //   });
          });
        }

        else {
          console.log('else permission :-' + this.haspermission);
          this.getstoragepermission();
        }
      }
    } else {
      if (icon == 'open') {
        //this.filepath = this.file.externalDataDirectory + fileName;
        let folderdir = 'Documents/Jawata/' + localStorage.getItem('citizen_id') + '/' + localStorage.getItem('entity_no') + '/Tests/' + localStorage.getItem('testSessionNo') + '/';
        let storedpath = this.file.externalRootDirectory + folderdir + '/';//'my_downloads/';
        this.filepath = storedpath + fileName;

        console.log('Offline this.filepath :- ' + this.filepath);
        let fileExtn = this.filepath.split('.').reverse()[0];

        for (var i = 0; i < this.fileTypeArr.length; i++) {
          if (fileExtn == this.fileTypeArr[i]['fileType']) {
            var fileType = this.fileTypeArr[i]['fileExtension'];
          }
        }

        this.fileOpener.open(this.filepath, fileType)
          .then()
          .then()
          .catch(e => console.log("Error opening file :-" + JSON.stringify(e)));
      }
      else {
        this.translate.use(this.selectedLanguage);
        this.translate.get('Before to download file, Please connect internet connection').subscribe((res) => {
          alert(res);
        });
      }
    }
    /** Old download code end from here */

  }

  isExistGradeFile(id, test_session_id, actor_id, deadline_date, test_file, test_created_by, answer_file,
    answer_date, is_received, graded_file, graded_date, grade_decided_manager_id, graded_file_sent,
    file_grade, avg_grade, created_at, updated_at, entity_id, class_id, subject_id, start_date, is_delete, send_and_start) {

    let folderdir = 'Documents/Jawata/' + localStorage.getItem('citizen_id') + '/' + localStorage.getItem('entity_no') + '/Tests/' + localStorage.getItem('testSessionNo') + '/';
    let storedpath = this.file.externalRootDirectory + folderdir + '/';//'my_downloads/';
    console.log('storedpath :-' + storedpath, graded_file);
    this.file.checkFile(storedpath, graded_file).then((files) => {
      console.log('if exist' + JSON.stringify(files))
    },
      (error) => {
        console.log('else exist' + JSON.stringify(error))

        // alert('else exist' + JSON.stringify(error))
      });
    return this.file.checkFile(storedpath, graded_file).then((files) => {
      this.isExist = true;
      this.gradeListArr.push({
        "id": id,
        "test_session_id": test_session_id,
        "actor_id": actor_id,
        "deadline_date": deadline_date,
        "test_file": test_file,
        "test_created_by": test_created_by,
        "answer_file": answer_file,
        "answer_date": answer_date,
        "is_received": is_received,
        "graded_file": graded_file,
        "graded_date": graded_date,
        "grade_decided_manager_id": grade_decided_manager_id,
        "graded_file_sent": graded_file_sent,
        "file_grade": file_grade,
        "avg_grade": avg_grade,
        "created_at": created_at,
        "updated_at": updated_at,
        "entity_id": entity_id,
        "class_id": class_id,
        "subject_id": subject_id,
        "start_date": start_date,
        "is_delete": is_delete,
        "send_and_start": send_and_start,
        'icon': 'open'
      })
    }).catch(
      (err) => {
        this.isExist = false;
        this.gradeListArr.push({
          "id": id,
          "test_session_id": test_session_id,
          "actor_id": actor_id,
          "deadline_date": deadline_date,
          "test_file": test_file,
          "test_created_by": test_created_by,
          "answer_file": answer_file,
          "answer_date": answer_date,
          "is_received": is_received,
          "graded_file": graded_file,
          "graded_date": graded_date,
          "grade_decided_manager_id": grade_decided_manager_id,
          "graded_file_sent": graded_file_sent,
          "file_grade": file_grade,
          "avg_grade": avg_grade,
          "created_at": created_at,
          "updated_at": updated_at,
          "entity_id": entity_id,
          "class_id": class_id,
          "subject_id": subject_id,
          "start_date": start_date,
          "is_delete": is_delete,
          "send_and_start": send_and_start,
          'icon': 'download'
        })
      });
  }


  /**Offline App code start here */

  createDB() {
    this.sqlite.create({
      name: this.database_name,
      location: 'default'
    }).then((db: SQLiteObject) => {
      this.databaseObj = db;
      this.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' + this.table_name + ' (UniqueTestID INTEGER PRIMARY KEY AUTOINCREMENT,userId varchar(2),class_id varchar(2), class_reference varchar(2), class_grade varchar(2), ref_grade varchar(2), subject_name varchar(2), start_date varchar(2), test_session_id varchar(2), id varchar(2), actor_id varchar(2), deadline_date varchar(2), test_file varchar(2), test_created_by varchar(2), answer_file varchar(2), answer_date varchar(2), is_received varchar(2), grade varchar(2), grade_decided_manager_id varchar(2), created_at varchar(2), updated_at varchar(2), firstname varchar(2), lastname varchar(2), checked varchar(2),test_session_count_for_that_entity varchar(2),graded_date varchar(2),graded_file_sent varchar(2),disabled varchar(2) )', [])
        .then(() => {
          // alert('Database Created :-' + this.database_name);
          // alert('Table Created :-' + this.table_name);

          if (this.network.type == "none") {
            this.getTestRows();
          }
        })
        .catch(e => {
          // alert("Error to Create Test List Table !" + JSON.stringify(e))
        });

      this.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' + this.testFile_table + ' (UniqueTestFileID INTEGER PRIMARY KEY AUTOINCREMENT, userId varchar(2), testSessionId varchar(2), id varchar(2), entity_id varchar(2), class_id varchar(2), subject_id varchar(2), start_date varchar(2), deadline_date varchar(2), is_delete varchar(2), send_and_start varchar(2), created_at varchar(2), updated_at varchar(2), test_file varchar(2), detail_id varchar(2), test_session_id varchar(2), test_created_by varchar(2), firstname varchar(2), lastname varchar(2), icon varchar(2))', [])
        .then(() => {
          // alert('Database Created :-' + this.database_name);
          // alert('Table Created :-' + this.table_name); 
        })
        .catch(e => {
          // alert("Error to Create TestOpenFiles Table !" + JSON.stringify(e))
        });
    })
      .catch(e => {
        // alert("Error to Database Create ! " + JSON.stringify(e))
      });
  }

  createDBGrade() {
    this.sqlite.create({
      name: this.database_name,
      location: 'default'
    }).then((db: SQLiteObject) => {
      this.databaseObj = db;
      this.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' + this.grade_Table + ' (UniqueGradeID INTEGER PRIMARY KEY AUTOINCREMENT, userId varchar(2), testSessionId varchar(2), id varchar(2), test_session_id varchar(2), actor_id varchar(2), deadline_date varchar(2), test_file varchar(2), test_created_by varchar(2), answer_file varchar(2), answer_date varchar(2), is_received varchar(2), graded_file varchar(2), graded_date varchar(2), grade_decided_manager_id varchar(2), graded_file_sent varchar(2), file_grade varchar(2), avg_grade varchar(2), created_at varchar(2), updated_at varchar(2), entity_id varchar(2), class_id varchar(2), subject_id varchar(2), start_date varchar(2), is_delete varchar(2), send_and_start varchar(2), icon)', [])
        .then(() => {
          // alert('Database Created :-' + this.database_name);
          // alert('Table Created :-' + this.grade_Table);
        })
        .catch(e => {
          // alert("Error to Create grade_Table !" + JSON.stringify(e))
        });
    })
      .catch(e => {
        // alert("Error to Database Create ! " + JSON.stringify(e))
      });
  }

  insertTestRow() {

    this.databaseObj.executeSql("SELECT * FROM " + this.table_name, [])
      .then((res) => {

        // alert("res is:-" + JSON.stringify(res));

        this.row_data = [];

        for (var i = 0; i < res.rows.length; i++) {
          this.row_data.push(res.rows.item(i));
        }

        // alert("row_data is :-" + JSON.stringify(this.row_data));

        // delete rows here
        for (var i = 0; i < this.row_data.length; i++) {

          if (this.row_data[i]['userId'] == localStorage.getItem('userId')) {

            this.databaseObj.executeSql(`DELETE FROM ${this.table_name} WHERE userId = ${this.row_data[i]['userId']}`, [])
              .then((res) => {
                // alert("Row Deleted :-" + JSON.stringify(res));
              })
              .catch(e => {
                // alert("error to test list delete rows " + JSON.stringify(e))
              });
          }
        }

        // Inserting rows here
        for (var i = 0; i < this.testSessionArr.length; i++) {

          this.databaseObj.executeSql('INSERT INTO ' + this.table_name + ' (userId, class_id, class_reference, class_grade, ref_grade, subject_name, start_date, test_session_id, id, actor_id, deadline_date, test_file, test_created_by, answer_file, answer_date, is_received, grade, grade_decided_manager_id, created_at, updated_at, firstname, lastname, checked, test_session_count_for_that_entity,graded_date,graded_file_sent, disabled) VALUES ("' +
            localStorage.getItem('userId') + '","' +
            this.testSessionArr[i]['class_id'] + '","' +
            this.testSessionArr[i]['class_reference'] + '","' +
            this.testSessionArr[i]['class_grade'] + '","' +
            this.testSessionArr[i]['ref_grade'] + '","' +
            this.testSessionArr[i]['subject_name'] + '","' +
            this.testSessionArr[i]['start_date'] + '","' +
            this.testSessionArr[i]['test_session_id'] + '","' +
            this.testSessionArr[i]['id'] + '","' +
            this.testSessionArr[i]['actor_id'] + '","' +
            this.testSessionArr[i]['deadline_date'] + '","' +
            this.testSessionArr[i]['test_file'] + '","' +
            this.testSessionArr[i]['test_created_by'] + '","' +
            this.testSessionArr[i]['answer_file'] + '","' +
            this.testSessionArr[i]['answer_date'] + '","' +
            this.testSessionArr[i]['is_received'] + '","' +
            this.testSessionArr[i]['grade'] + '","' +
            this.testSessionArr[i]['grade_decided_manager_id'] + '","' +
            this.testSessionArr[i]['created_at'] + '","' +
            this.testSessionArr[i]['updated_at'] + '","' +
            this.testSessionArr[i]['firstname'] + '","' +
            this.testSessionArr[i]['lastname'] + '","' +
            this.testSessionArr[i]['checked'] + '","' +
            this.testSessionArr[i]['test_session_count_for_that_entity'] + '","' +
            this.testSessionArr[i]['graded_date'] + '","' +
            this.testSessionArr[i]['graded_file_sent'] + '","' +
            'false' + '")', [])
            .then(() => {
              console.log('Row Inserted Test List :-' + this.testSessionArr[i]['test_session_count_for_that_entity'] + ' --graded_file_sent --' + this.testSessionArr[i]['graded_file_sent']);
            })
            .catch(e => {
              // alert("Error Is Test Insert Rows:- " + JSON.stringify(e))
            });
        }
      })
      .catch(e => {
        // alert("Error Is to get Test Rows:- " + JSON.stringify(e))
      });
  }

  getTestRows() {

    this.databaseObj.executeSql("SELECT DISTINCT userId, class_id, class_reference, class_grade, ref_grade, subject_name, start_date, test_session_id, id, actor_id, deadline_date, test_file, test_created_by, answer_file, answer_date, is_received, grade, grade_decided_manager_id, created_at, updated_at, firstname, lastname, checked,test_session_count_for_that_entity,graded_date, graded_file_sent FROM " + this.table_name, [])
      .then((res) => {

        // alert("TestRows res is :-" + JSON.stringify(res));
        this.row_data = [];
        this.testSessionArr = [];
        this.flag = true;

        for (var i = 0; i < res.rows.length; i++) {
          this.row_data.push(res.rows.item(i));
        }
        // alert("testRow row_data :-" + JSON.stringify(this.row_data));

        // alert("UserId is :-" + localStorage.getItem('userId'));

        for (var i = 0; i < this.row_data.length; i++) {

          if (this.row_data[i]['userId'] == localStorage.getItem('userId')) {
            this.testSessionArr.push(this.row_data[i])
          }
        }
        console.log("testSessionArr offline Stored response is:-" + JSON.stringify(this.testSessionArr));

      })
      .catch(e => {
        // alert("Error Is to get Test Rows:- " + JSON.stringify(e))
      });
  }

  insertOpenTestFiles() {

    this.databaseObj.executeSql("SELECT * FROM " + this.testFile_table, [])
      .then((res) => {

        // alert("res is:-" + JSON.stringify(res));

        this.row_data = [];
        for (var i = 0; i < res.rows.length; i++) {
          this.row_data.push(res.rows.item(i));
        }

        // delete rows here
        for (var i = 0; i < this.row_data.length; i++) {

          if (this.row_data[i]['userId'] == localStorage.getItem('userId') && this.row_data[i]['testSessionId'] == localStorage.getItem('testSessionId')) {

            this.databaseObj.executeSql(`DELETE FROM ${this.testFile_table} WHERE userId = ${this.row_data[i]['userId']}`, [])
              .then((res) => {
                // alert("Row Deleted :-" + JSON.stringify(res));
              })
              .catch(e => {
                // alert("Error to open test files delete rows " + JSON.stringify(e))
              });
          }
        }

        // Inserting rows here
        for (var i = 0; i < this.tempArr.length; i++) {

          this.databaseObj.executeSql('INSERT INTO ' + this.testFile_table + ' (userId, testSessionId, id, entity_id, class_id, subject_id , start_date , deadline_date , is_delete , send_and_start , created_at, updated_at , test_file , detail_id , test_session_id , test_created_by , firstname, lastname, icon ) VALUES ("' +
            localStorage.getItem('userId') + '","' +
            localStorage.getItem('testSessionId') + '","' +
            this.tempArr[i]['id'] + '","' +
            this.tempArr[i]['entity_id'] + '","' +
            this.tempArr[i]['class_id'] + '","' +
            this.tempArr[i]['subject_id'] + '","' +
            this.tempArr[i]['start_date'] + '","' +
            this.tempArr[i]['deadline_date'] + '","' +
            this.tempArr[i]['is_delete'] + '","' +
            this.tempArr[i]['send_and_start'] + '","' +
            this.tempArr[i]['created_at'] + '","' +
            this.tempArr[i]['updated_at'] + '","' +
            this.tempArr[i]['test_file'] + '","' +
            this.tempArr[i]['detail_id'] + '","' +
            this.tempArr[i]['test_session_id'] + '","' +
            this.tempArr[i]['test_created_by'] + '","' +
            this.tempArr[i]['firstname'] + '","' +
            this.tempArr[i]['lastname'] + '","' +
            "download" + '")', [])
            .then(() => {
              // alert('Row Inserted inside of Test File :-' + this.testFile_table);
            })
            .catch(e => {
              // alert("Error Is Test Insert File Rows:- " + JSON.stringify(e))
            });
        }
      })
      .catch(e => {
        // alert("Error Is to get Test Files rows:- " + JSON.stringify(e))
      });
  }

  getTestFileRows() {

    this.databaseObj.executeSql("SELECT DISTINCT userId, testSessionId, id, entity_id, class_id, subject_id , start_date , deadline_date , is_delete , send_and_start , created_at, updated_at , test_file , detail_id , test_session_id , test_created_by , firstname, lastname, icon FROM " + this.testFile_table, [])
      .then((res) => {

        // alert("TestRows File res is :-" + JSON.stringify(res));

        // alert("Flag is offline fileRows :-" + this.flag);

        if (this.flag == false) {

          this.flag = true;
          this.row_data = [];
          this.testSessionFiles = [];

          this.openFileSubForm = true;
          this.testSessionHeader = false;
          this.testSessionData = false;
          this.testSessionSubHeader = false;
          this.fileUploadPage = false;
          this.testSessionFileSubHeader = true;
          localStorage.setItem('TestSession', "true");

          for (var i = 0; i < res.rows.length; i++) {
            this.row_data.push(res.rows.item(i));
          }

          for (var i = 0; i < this.row_data.length; i++) {

            if (this.row_data[i]['userId'] == localStorage.getItem('userId') && this.row_data[i]['testSessionId'] == localStorage.getItem('testSessionId')) {
              // this.testSessionFiles.push(this.row_data[i])

              this.isExistfileOffline(this.row_data[i]['userId'], this.row_data[i]['testSessionId'], this.row_data[i]['id'], this.row_data[i]['entity_id'],
                this.row_data[i]['class_id'], this.row_data[i]['subject_id'], this.row_data[i]['start_date'], this.row_data[i]['deadline_date'],
                this.row_data[i]['is_delete'], this.row_data[i]['send_and_start'], this.row_data[i]['created_at'], this.row_data[i]['updated_at'], this.row_data[i]['test_file'], this.row_data[i]['detail_id'],
                this.row_data[i]['test_session_id'], this.row_data[i]['test_created_by'], this.row_data[i]['firstname'], this.row_data[i]['lastname'])
            }
          }
          // alert("testSessionFiles :-" + JSON.stringify(this.testSessionFiles));
        }
      })
      .catch(e => {
        // alert("Error Is to get Test Files Rows:- " + JSON.stringify(e))
      });
  }

  insertGradeList() {

    this.databaseObj.executeSql("SELECT * FROM " + this.grade_Table, [])
      .then((res) => {

        // alert("res is:-" + JSON.stringify(res));

        this.row_data = [];
        for (var i = 0; i < res.rows.length; i++) {
          this.row_data.push(res.rows.item(i));
        }

        // delete rows here
        for (var i = 0; i < this.row_data.length; i++) {

          if (this.row_data[i]['userId'] == localStorage.getItem('userId') && this.row_data[i]['testSessionId'] == localStorage.getItem('testSessionId')) {

            this.databaseObj.executeSql(`DELETE FROM ${this.grade_Table} WHERE userId = ${this.row_data[i]['userId']}`, [])
              .then((res) => {
                // alert("Row Deleted Grade list table:-" + JSON.stringify(res));
              })
              .catch(e => {
                // alert("Error to open test files delete rows " + JSON.stringify(e))
              });
          }
        }

        // Inserting rows here
        for (var i = 0; i < this.tempGradeList.length; i++) {

          this.databaseObj.executeSql('INSERT INTO ' + this.grade_Table + ' (userId, testSessionId, id, test_session_id, actor_id, deadline_date, test_file, test_created_by, answer_file, answer_date, is_received, graded_file, graded_date, grade_decided_manager_id, graded_file_sent, file_grade, avg_grade, created_at, updated_at, entity_id, class_id, subject_id, start_date, is_delete, send_and_start, icon ) VALUES ("' +
            localStorage.getItem('userId') + '","' +
            localStorage.getItem('testSessionId') + '","' +
            this.tempGradeList[i]['id'] + '","' +
            this.tempGradeList[i]['test_session_id'] + '","' +
            this.tempGradeList[i]['actor_id'] + '","' +
            this.tempGradeList[i]['deadline_date'] + '","' +
            this.tempGradeList[i]['test_file'] + '","' +
            this.tempGradeList[i]['test_created_by'] + '","' +
            this.tempGradeList[i]['answer_file'] + '","' +
            this.tempGradeList[i]['answer_date'] + '","' +
            this.tempGradeList[i]['is_received'] + '","' +
            this.tempGradeList[i]['graded_file'] + '","' +
            this.tempGradeList[i]['graded_date'] + '","' +
            this.tempGradeList[i]['grade_decided_manager_id'] + '","' +
            this.tempGradeList[i]['graded_file_sent'] + '","' +
            this.tempGradeList[i]['file_grade'] + '","' +
            this.tempGradeList[i]['avg_grade'] + '","' +
            this.tempGradeList[i]['created_at'] + '","' +
            this.tempGradeList[i]['updated_at'] + '","' +
            this.tempGradeList[i]['entity_id'] + '","' +
            this.tempGradeList[i]['class_id'] + '","' +
            this.tempGradeList[i]['subject_id'] + '","' +
            this.tempGradeList[i]['start_date'] + '","' +
            this.tempGradeList[i]['is_delete'] + '","' +
            this.tempGradeList[i]['send_and_start'] + '","' +
            "download" + '")', [])
            .then(() => {
              console.log('Row Inserted inside of gradeList graded_file_sent :-' + this.tempGradeList[i]['graded_file_sent']);
            })
            .catch(e => {
              // alert("Error is to insert gradeList:- " + JSON.stringify(e))
            });
        }
      })
      .catch(e => {
        // alert("Error Is to get Test Files rows:- " + JSON.stringify(e))
      });
  }

  getGradeList() {
    this.databaseObj.executeSql("SELECT DISTINCT userId, testSessionId, id, test_session_id, actor_id, deadline_date, test_file, test_created_by, answer_file, answer_date, is_received, graded_file, graded_date, grade_decided_manager_id, graded_file_sent, file_grade, avg_grade, created_at, updated_at, entity_id, class_id, subject_id, start_date, is_delete, send_and_start, icon FROM " + this.grade_Table, [])
      // this.databaseObj.executeSql("SELECT * FROM " + this.grade_Table, [])

      .then((res) => {

        // alert("Get Grade List Is :-" + JSON.stringify(res));

        // alert("Flag is offline fileRows :-" + this.flag);

        if (this.flag == false) {

          // this.flag = true;
          this.row_data = [];
          this.testSessionFiles = [];
          this.gradeListArr = [];

          this.openFileSubForm = false;
          this.testSessionHeader = false;
          this.testSessionData = false;
          this.testSessionSubHeader = false;
          this.fileUploadPage = false;
          this.testSessionFileSubHeader = false;
          this.viewGradeSubHeader = true;
          this.viewGradeSubForm = true;
          localStorage.setItem('TestSession', "true");

          for (var i = 0; i < res.rows.length; i++) {
            this.row_data.push(res.rows.item(i));
          }

          for (var i = 0; i < this.row_data.length; i++) {

            if (this.row_data[i]['userId'] == localStorage.getItem('userId') && this.row_data[i]['testSessionId'] == localStorage.getItem('testSessionId')) {

              this.gradeListArr.push(this.row_data[i])
            }
          }
          // alert("this.gradeListArr.length :-" + this.gradeListArr.length);
        }
      })
      .catch(e => {
        // alert("Error Is to get Test Files Rows:- " + JSON.stringify(e))
      });
  }

  isExistfileOffline(userId, testSessionId, id, entity_id, class_id, subject_id, start_date, deadline_date, is_delete, send_and_start, created_at,
    updated_at, test_file, detail_id, test_session_id, test_created_by, firstname, lastname) {

    let folderdir = 'Documents/Jawata/' + localStorage.getItem('citizen_id') + '/' + localStorage.getItem('entity_no') + '/Tests/' + localStorage.getItem('testSessionNo') + '/';
    let storedpath = this.file.externalRootDirectory + folderdir + '/';//'my_downloads/';
    console.log('storedpath :-' + storedpath, test_file)
    this.file.checkFile(storedpath, test_file).then((files) => {
      console.log('if exist' + JSON.stringify(files))
    },
      (error) => {
        console.log('else exist' + JSON.stringify(error))
      });
    //return this.file.checkFile(this.file.externalDataDirectory, test_file).then(
    return this.file.checkFile(storedpath, test_file).then((files) => {
      this.isExist = true;

      // return this.file.checkFile(this.file.externalDataDirectory, test_file).then(
      //   (files) => {
      this.isExist = true;
      // this.testSessionFiles = [];

      this.testSessionFiles.push({
        "userId": userId,
        "testSessionId": testSessionId,
        "id": id,
        "entity_id": entity_id,
        "class_id": class_id,
        "subject_id": subject_id,
        "start_date": start_date,
        "deadline_date": deadline_date,
        "is_delete": is_delete,
        "send_and_start": send_and_start,
        "created_at": created_at,
        "updated_at": updated_at,
        "test_file": test_file,
        "detail_id": detail_id,
        "test_session_id": test_session_id,
        "test_created_by": test_created_by,
        "firstname": firstname,
        "lastname": lastname,
        'icon': 'open'
      });
    }).catch(
      (err) => {
        this.isExist = false;
        // this.testSessionFiles = [];

        this.testSessionFiles.push({
          "userId": userId,
          "testSessionId": testSessionId,
          "id": id,
          "entity_id": entity_id,
          "class_id": class_id,
          "subject_id": subject_id,
          "start_date": start_date,
          "deadline_date": deadline_date,
          "is_delete": is_delete,
          "send_and_start": send_and_start,
          "created_at": created_at,
          "updated_at": updated_at,
          "test_file": test_file,
          "detail_id": detail_id,
          "test_session_id": test_session_id,
          "test_created_by": test_created_by,
          "firstname": firstname,
          "lastname": lastname,
          'icon': 'download'
        });
      });
  }

  isExistOfflineGradeFile(id, test_session_id, actor_id, deadline_date, test_file, test_created_by, answer_file,
    answer_date, is_received, graded_file, graded_date, grade_decided_manager_id, graded_file_sent,
    file_grade, avg_grade, created_at, updated_at, entity_id, class_id, subject_id, start_date, is_delete, send_and_start) {
    let folderdir = 'Documents/Jawata/' + localStorage.getItem('citizen_id') + '/' + localStorage.getItem('entity_no') + '/Tests/' + localStorage.getItem('testSessionNo') + '/';
    let storedpath = this.file.externalRootDirectory + folderdir + '/';//'my_downloads/';
    console.log('storedpath :-' + storedpath, graded_file);
    this.file.checkFile(storedpath, graded_file).then((files) => {
      console.log('if exist' + JSON.stringify(files))
    },
      (error) => {
        console.log('else exist' + JSON.stringify(error))
      });
    //return this.file.checkFile(this.file.externalDataDirectory, test_file).then(
    return this.file.checkFile(storedpath, graded_file).then((files) => {
      this.isExist = true;
      // this.testSessionFiles = [];

      this.gradeListArr.push({
        "id": id,
        "test_session_id": test_session_id,
        "actor_id": actor_id,
        "deadline_date": deadline_date,
        "test_file": test_file,
        "test_created_by": test_created_by,
        "answer_file": answer_file,
        "answer_date": answer_date,
        "is_received": is_received,
        "graded_file": graded_file,
        "graded_date": graded_date,
        "grade_decided_manager_id": grade_decided_manager_id,
        "graded_file_sent": graded_file_sent,
        "file_grade": file_grade,
        "avg_grade": avg_grade,
        "created_at": created_at,
        "updated_at": updated_at,
        "entity_id": entity_id,
        "class_id": class_id,
        "subject_id": subject_id,
        "start_date": start_date,
        "is_delete": is_delete,
        "send_and_start": send_and_start,
        'icon': 'open'
      })
    }).catch(
      (err) => {
        this.isExist = false;
        this.gradeListArr.push({
          "id": id,
          "test_session_id": test_session_id,
          "actor_id": actor_id,
          "deadline_date": deadline_date,
          "test_file": test_file,
          "test_created_by": test_created_by,
          "answer_file": answer_file,
          "answer_date": answer_date,
          "is_received": is_received,
          "graded_file": graded_file,
          "graded_date": graded_date,
          "grade_decided_manager_id": grade_decided_manager_id,
          "graded_file_sent": graded_file_sent,
          "file_grade": file_grade,
          "avg_grade": avg_grade,
          "created_at": created_at,
          "updated_at": updated_at,
          "entity_id": entity_id,
          "class_id": class_id,
          "subject_id": subject_id,
          "start_date": start_date,
          "is_delete": is_delete,
          "send_and_start": send_and_start,
          'icon': 'download'
        })
      });
  }


  createdirTests() {
    this.platform.ready().then(() => {

      this.file.checkDir(this.file.externalRootDirectory, 'Documents').then(response => {
        console.log('Directory already present for this Documents :- ' + response);

        this.file.checkDir(this.file.externalRootDirectory + 'Documents' + '/', 'Jawata').then(response => {
          console.log('Directory already present for this Jawata :- ' + response);

          this.file.checkDir(this.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/', localStorage.getItem('citizen_id') + '/').then(response => {
            console.log('Directory already present for this citizen_id :- ' + response);

            this.file.checkDir(this.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id') + '/', localStorage.getItem('entity_no').toString() + '/').then(response => {
              console.log('Directory already present for this entity_no :- ' + response);

              this.file.checkDir(this.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id') + '/' + localStorage.getItem('entity_no').toString() + '/', 'Tests' + '/').then(response => {
                console.log('Directory already present for this Tests :- ' + response);

              }, error => {
                // Create Subjects and remaining directory
                this.file.createDir(this.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id').toString() + '/' + localStorage.getItem('entity_no').toString(), 'Tests' + '/', false).then(response => {
                  console.log('createDir for userid ', response);

                });

              });

            },
              error => {
                // Create Entity No. and remaining directory
                this.file.createDir(this.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id').toString() + '/', localStorage.getItem('entity_no').toString(), false).then(response => {
                  console.log('createDir for userid ', response);

                  this.file.createDir(this.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id').toString() + '/' + localStorage.getItem('entity_no').toString(), 'Tests' + '/', false).then(response => {
                    console.log('createDir for userid ', response);

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

                  this.file.createDir(this.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id').toString() + '/' + localStorage.getItem('entity_no').toString(), 'Tests' + '/', false).then(response => {
                    console.log('createDir for userid ', response);

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

                this.file.createDir(this.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id').toString() + '/' + localStorage.getItem('entity_no').toString(), 'Tests' + '/', false).then(response => {
                  console.log('createDir for userid ', response);
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

                  this.file.createDir(this.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id').toString() + '/' + localStorage.getItem('entity_no').toString(), 'Tests' + '/', false).then(response => {
                    console.log('createDir for userid ', response);

                  });
                });
              });
            });
          });

        });
    });
  }


  onFileChangearrayinsert(event) {
    // clear the stored files array
    console.log('onFileChangearrayinsert this.images.length :-' + this.images.length)
    //this.images = [];
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      console.log('filesAmount :-' + filesAmount);
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();
        let file = event.target.files[i];

        reader.onload = (event: any) => {
          // console.log(event.target.result);
          //this.images.push(event.target.result);
          if (this.images.length > 0) {
            for (let j = 0; j < this.images.length; j++) {
              console.log('this.images[j].filename' + this.images[j].filename)
              if (file.name == this.images[j].filename) {
                this.images.splice(j, 1);
              }
            }
            this.images.push(
              {
                'filename': file.name,
                'icon': 'close',
                'base64Image': event.target.result
              });

          }
          else {
            this.images.push(
              {
                'filename': file.name,
                'icon': 'close',
                'base64Image': event.target.result
              });
          }
        }
        reader.readAsDataURL(event.target.files[i]);
      }
    }
    if (event.target.files && event.target.files[0]) {
      // if (this.images.length > 0) {
      //   this.images = this.images.filter((n, i) => this.images.indexOf(n) === i);
      //   //console.log('distinctArray length :-' + distinctArray.length)
      //   // console.log('distinctArray  :-'+ JSON.stringify(distinctArray));
      //   // this.images = [];
      //   // for (let i = 0; i < filesAmount; i++) {
      //   //   this.images.push({
      //   //     'filename': distinctArray[i].filename,
      //   //     'icon': 'close',
      //   //     'base64Image': distinctArray[i].base64Image
      //   //   });
      //   // }
      //   // this.images =Object.assign([], distinctArray);
      //   console.log('distinctArray this.images :-' + JSON.stringify(this.images));
      // }
      event.target.value = '';
    }
  }

  async confirmSubmitTestAnswer() {
    // check file is uploaded
    console.log('Files count :-' + this.images.length);

    if (this.images.length == 0) {
      this.translate.use(this.selectedLanguage);
      this.translate.get('Please select file to upload').subscribe((res: string) => {
        alert(res);
      });
    }
    else {
      var varCancel = ''; var varOK = ''; var varheader = ''; var varmsg = '';
      this.translate.get('This action will Send all the Answer files and terminate the Test Session.').subscribe((res: string) => { varmsg = res; });
      this.translate.get('Confirm Answer Files!').subscribe((res: string) => { varheader = res; });
      this.translate.get('Cancel').subscribe((res: string) => { varCancel = res; });
      this.translate.get('Confirm').subscribe((res: string) => { varOK = res; });

      const alert = await this.alertCtrl.create({
        // cssClass: 'my-custom-class',
        header: varheader.toString(),
        message: varmsg.toString(),
        buttons: [
          {
            text: varCancel.toString(),
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: varOK.toString(),
            handler: () => {
              this.submit();
              console.log('Confirm Okay');
            }
          }
        ]
      });
      await alert.present();
    }

  }

  async submit() {
    this.disabled=true;
    console.log('this.images :- ' + JSON.stringify(this.images));
    let dateTime = this.datepipe.transform(new Date(), 'yyyy-MM-dd HH-mm-ss');
    var apicallcount = 0;
    if (this.images.length == 0) {
      this.translate.use(this.selectedLanguage);
      this.translate.get('Please select file to upload').subscribe((res: string) => {
        alert(res);
      });
    }
    else {
      if (this.deviceid == undefined) {
        this.getID_UID('UUID');
        console.log('UUID :-' + this.deviceid);
        this.platform.ready().then(() => {
          this.submit();
        });
      }
      else {
        this.showLoader();
        this.uploadedFile = "false";
        for (let i = 0; i < this.images.length; i++) {
          // console.log('this.images in loop :- ' + this.images[i].base64Image);
          if (localStorage.getItem('userType') == 'Actor') {
            var forrmdata = {
              'testSessionId': localStorage.getItem('testSessionId'),
              'actorId': localStorage.getItem('userId'),
              'ip_address': this.deviceid,//this.IPAddress,
              'uploadedFile': this.uploadedFile,
              testSessionFile: this.images[i].filename,
              'dateTime': dateTime,
              'answerFileUpload': this.images[i].base64Image //res['url'],

            }
          }
          else {
            var forrmdata = {
              'testSessionId': localStorage.getItem('testSessionId'),
              'actorId': localStorage.getItem('actorId'),
              'ip_address': this.deviceid, //this.IPAddress,
              'uploadedFile': this.uploadedFile,
              testSessionFile: this.images[i].filename,
              'dateTime': dateTime,
              'answerFileUpload': this.images[i].base64Image //res['url'],
            }
          }
          let headers = {
            'Content-Type': 'application/json',
          }
          console.log(`${environment.apiUrl}/api/upload_test_files`, forrmdata);
          this.http.post(`${environment.apiUrl}/api/upload_test_files`, forrmdata, headers).then((data: any) => {
            console.log('File move API response :-' + JSON.stringify(data));
            this.uploadedFile = "true";
            apicallcount = apicallcount + 1;
            console.log('In API response :' + apicallcount + '--' + this.images.length)
            if (apicallcount == this.images.length) {
              this.testSessionHeader = true;
              this.fileUploadedcount = 0;
              this.fileUploadPage = false;
              this.testSessionData = true;
              this.images = [];
              this.getTestSessionList();
              this.onClickCancel();
              this.dismissLodader();
            }
          }).catch(error => {
            this.dismissLodader();
            console.log(" Error Here move file in API :-!" + JSON.stringify(error));
          });
          this.uploadedFile = "true";
        }
      }
    }

  }

  onClickremove(i: any) {
    console.log('index :+' + i);
    this.images.splice(i, 1);
    console.log('after delete this.images :- ' + JSON.stringify(this.images));
  }

  getID_UID(type) {
    if (type == "UUID") {
      console.log('this.uid.UUID :-' + this.uid.UUID);
      this.deviceid = this.uid.UUID;
      return this.uid.UUID;
    }
  }

  async showLoader() {
    this.translate.use(this.selectedLanguage);
    this.translate.get('Loading').subscribe((res: string) => {
      this.loaderLanguage = "";
      this.loaderLanguage = res;
    });
    return await this.loadingController.create({
      message: this.loaderLanguage + ' ....',
      duration: 10000,
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
      });
    });
  }

  dismissLodader() {
    this.loadingController.dismiss().then(() => console.log('dismissed'));
  }

}


