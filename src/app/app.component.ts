import { Component, OnInit, ViewChild } from '@angular/core';
import { Platform, MenuController, LoadingController, AlertController, ActionSheetController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, RoutesRecognized } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HTTP } from '@ionic-native/http/ngx';
import { LoginService } from './services/login.service';
import { JsonPipe, DatePipe } from '@angular/common';
import { Network } from '@ionic-native/network/ngx';
import { File } from '@ionic-native/file/ngx';
import { TranslateConfigService } from './translate-config.service';
import { SQLiteObject, SQLite } from '@ionic-native/sqlite/ngx';
import { MenuService } from './services/menu.service';
//import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateService } from '@ngx-translate/core';
import { filter, pairwise } from 'rxjs/operators';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Uid } from '@ionic-native/uid/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
// import { DashboardComponent } from 'src/app/sidemenu/dashboard/dashboard.component' ;//'./sidemenu/dashboard/dashboard.component';

declare var cordova: any;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {

  userType = "";
  showLoginForm = true;
  sideMenuNames = false;
  loading = false;
  submitted = false;
  haspermission = false;
  permissiongranted = false;
  returnUrl: string;
  menuListArr;
  userIdVar = "";
  passwordVar = "";
  dataList;
  applicationDirectory = '';
  applicationStorageDirectory = '';
  dataDirectory = '';
  cacheDirectory = '';
  externalApplicationStorageDirectory = '';
  externalDataDirectory = '';
  externalCacheDirectory = '';
  externalRootDirectory = '';
  tempDirectory = '';
  getFreeDiskSpace: any = '';
  selectedLanguage: string;
  usernamelang: string;
  sideMenuPages = [];
  Dashb1: string = '';
  userDetails;
  checked: Boolean = false;
  setData = false;
  forgotPassForm = false;
  emailID = "";
  birthDate = "";
  forgotPassArr;
  todaysDate = "";
  flag = false;
  validCrdendtialFlag = false;

  loginForm: FormGroup;
  forgotPassword: FormGroup
  isSubmitted = false;

  profilelang: any;
  lang: any;
  deviceid: any;
  uuiddeviceid: any;
  row_data = [];
  permissonArray = [];

  profilepic = "";
  temp;

  databaseObj: SQLiteObject;//database instance object
  readonly database_name: string = "Jawata_App.db";//DB name
  readonly table_name: string = "tbluserlogin"; // Table 

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private http: HTTP,
    private loginService: LoginService,
    private network: Network,
    private translateConfigService: TranslateConfigService,
    private sqlite: SQLite,
    private datePipe: DatePipe,
    private loadingController: LoadingController,
    private translate: TranslateService,
    private uniqueDeviceID: UniqueDeviceID,
    private formBuilder: FormBuilder,
    private androidPermissions: AndroidPermissions,
    private file: File,
    private uid: Uid,
    private camera: Camera,
    private alertCtrl: AlertController,
    public actionSheetCtrl: ActionSheetController,
    private menuService: MenuService
    , private webview: WebView
    //,public dashboardComponent:DashboardComponent
  ) {

    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
    // set default language if languange is blank 
    if (localStorage.getItem('selectedL') == '' || localStorage.getItem('selectedL') == null)
      this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    else {
      // set language from local storage
      this.selectedLanguage = localStorage.getItem('selectedL');
      this.locale = localStorage.getItem('selectedL');
      this.translateConfigService.setLanguage(this.selectedLanguage);
    }

    //last visited url
    this.router.events.pipe(filter((evt: any) => evt instanceof RoutesRecognized), pairwise()).subscribe((events: RoutesRecognized[]) => {
      localStorage.setItem('bckbtnpage', events[0].urlAfterRedirects);
      localStorage.setItem('currenturl', events[1].urlAfterRedirects);
      // if(localStorage.getItem('currenturl')=='/subjects')
      // {
      //   localStorage.setItem('currenturl','')
      // }
      // if(localStorage.getItem('nav')=='true'){
      //   localStorage.setItem('currenturl','/tablinks/history')
      // }
      //alert('previous url dashboard' + events[0].urlAfterRedirects + '/current url'+ events[1].urlAfterRedirects);
    });
  }

  ngOnInit() {

    this.initializeApp();

    this.loginForm = this.formBuilder.group({
      //userID: ['', [Validators.required, Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')]],
      userID: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })

    this.forgotPassword = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')]],
    });

    this.translateConfigService.setLanguage(this.selectedLanguage);
    localStorage.setItem('selectedL', this.selectedLanguage);
    this.translate.setDefaultLang(this.selectedLanguage);

    this.translate.use(this.selectedLanguage);
    this.initializeBackButtonCustomHandler();

    /**Set value to Remember me */
    this.userIdVar = "";
    this.passwordVar = "";
    //if (localStorage.getItem('USERNAME') != null && localStorage.getItem('PASSWORD') != null) {
    console.log('loggedinflag :-' + localStorage.getItem('loggedinflag') + 'this.selectedLanguage :- ' + this.selectedLanguage + 'localStorage.getItem(remembermechecked) :- ' + localStorage.getItem('remembermechecked'));
    if (localStorage.getItem('remembermechecked') == 'true') {
      this.setData = true;
      this.checked = true;
      this.userIdVar = localStorage.getItem('USERNAME');
      this.passwordVar = localStorage.getItem('PASSWORD');

    }
    else {
      this.checked = false;
      this.setData = false;
    }

    // if loggedinflag = true then naviagte to dashboard page	
    if (localStorage.getItem('loggedinflag') == 'true') {
      this.showLoginForm = false;
      this.sideMenuNames = true;
      this.translate.use(this.selectedLanguage);
      this.translate.get(localStorage.getItem('userType')).subscribe((res: string) => {
        this.userType = "";
        this.userType = res;

        this.userDetails = [];
        this.userDetails = [
          {
            title: localStorage.getItem('userName'),
            emailid: this.userType,//localStorage.getItem('email'),
            icon: 'camera'//localStorage.getItem('profile_image_path')//'contact'
          },
        ];
      });

      // set profile image path if user is already logged in
      this.profilepic = localStorage.getItem('profile_image_path');
      localStorage.getItem('selectedL');
      this.sidemenufn();
      if (localStorage.getItem('currenturl').toString().split('/')[1] == null || localStorage.getItem('currenturl').toString().split('/')[1] == '') {
        this.router.navigateByUrl('tablinks');
      }
      else {
        this.router.navigateByUrl(localStorage.getItem('currenturl').toString().split('/')[1], { replaceUrl: true });
      }
    }
    else {
      this.router.navigateByUrl('tablinks');
      this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
      this.todaysDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
      this.sideMenuNames = false;
      this.translateConfigService.setLanguage(this.selectedLanguage);
      localStorage.setItem('selectedL', this.selectedLanguage);
      this.translate.setDefaultLang(this.selectedLanguage);

      this.translate.use(this.selectedLanguage);

    }
  }

  get errorControl() {
    return this.loginForm.controls;
  }

  get errorControl2() {
    return this.forgotPassword.controls;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.createDB();
      this.getuniqueDeviceID();
     // this.getID_UID('UUID');

      if (this.platform.is('android')) {
        this.statusBar.backgroundColorByHexString('#f1f1f1');
        // this.statusBar.backgroundColorByHexString('#ffffff');
      }
      setTimeout(() => {
        this.splashScreen.hide();
      }, 100);
    });
  }

  initializeBackButtonCustomHandler(): void {
    //alert('currenturl :-'+localStorage.getItem('currenturl') +'--backedurl' +localStorage.getItem('currenturl'));
    this.platform.backButton.subscribeWithPriority(999990, () => {
      if (localStorage.getItem('currenturl') == '/') {
        navigator['app'].exitApp();
      }
      if (localStorage.getItem('currenturl').toString().split('/')[1] == 'dashboard') {
        navigator['app'].exitApp();
      }
      if (localStorage.getItem('bckbtnpage').toString().split('/')[1] == 'app-home') {
        navigator['app'].exitApp();
      }
      else {
        this.router.navigate([localStorage.getItem('bckbtnpage').toString().split('/')[1]]);
      }
    });
  }

  getuniqueDeviceID() {

    this.uniqueDeviceID.get().then(
      (uuid: any) => {
        this.deviceid = uuid;
        this.permissiongranted = true
        console.log('uuid of getuniqueDeviceID',uuid)
      }
    ).catch((error: any) => {
      this.permissionFun(error);
      this.permissiongranted = false
    }
    );

    console.log('this.deviceid getuniqueDeviceID::-' + this.deviceid)

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
      this.uuiddeviceid = this.uid.UUID;
      return this.uid.UUID;
    }
  }

  permissionFun(error) {
    this.permissonArray.push(error);
    if (this.permissonArray.length > 1) {
      this.translate.use(this.selectedLanguage);
      this.translate.get('Jawata needs permission to your Phone storage. To allow permission go to the  app permissions in your device setting').subscribe(async (res: string) => {
        // alert(res);
        var temp=this.langTransalate(res)
        var temp1=this.langTransalate("OK")
        let alert = await this.alertCtrl.create({

          message: temp,
          buttons: [{
            text: temp1,
          }]
        });
        alert.present();
      });
    }
  }


  locale = "en";
  languageChanged(value) {
    this.locale = "";
    this.locale = value;
    localStorage.setItem('language', this.locale);
    // set user selected language as default
    localStorage.setItem('selectedL', this.selectedLanguage);
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }

  async CameraActionSheet() {
    var profilephoto = ''; var varcam = ''; var vargall = ''; var varcancel = '';
    this.translate.get('Profile photo').subscribe((res: string) => { profilephoto = res; });
    this.translate.get('Camera').subscribe((res: string) => { varcam = res; });
    this.translate.get('Gallery').subscribe((res: string) => { vargall = res; });
    this.translate.get('Cancel').subscribe((res: string) => { varcancel = res; });
    console.log('CameraActionSheet() Choose an image from:' + profilephoto);
    const actionSheet = await this.actionSheetCtrl.create({
      header: profilephoto + "",
      // backdropDismiss:true,
      //enableBackdropDismiss:true,
      buttons: [
        {
          text: vargall + "",
          icon: 'image',
          handler: () => {
            this.pickprofilepic(this.camera.PictureSourceType.PHOTOLIBRARY);
            actionSheet.onDidDismiss();
          }
        },
        {
          text: varcam.toString(),
          icon: 'camera',
          handler: () => {
            this.pickprofilepic(this.camera.PictureSourceType.CAMERA);
            // actionSheet.dismiss();
            //return false;
          }
        },
        {
          text: varcancel.toString(),
          role: 'cancel',
          icon: 'close-circle',
          handler: () => {
            console.log('Clicked on Cancel ');
          }
        }
      ]
    });
    // console.log('localStorage.getItem(actionctrl) :- ' + localStorage.getItem('actionctrl'))
    //     if (localStorage.getItem('actionctrl') == 'false') {
    //       await actionSheet.present();
    //     }
    await actionSheet.present();

  }


  async pickprofilepic(sourcetype) {
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourcetype,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      // console.log('base64Image' + base64Image);

      /** image save on server call API and set image */
      var forrmdata = {
        'image': base64Image,
        'userId': localStorage.getItem('userId')
      }
      let headers = {
        'Content-Type': 'application/json',
      }
      console.log(`${environment.apiUrl}/api/upload_image`, forrmdata);
      this.http.post(`${environment.apiUrl}/api/upload_image`, forrmdata, headers).then((data: any) => {
        console.log('Image save API response :-' + JSON.stringify(data));
        this.profilepic = base64Image;
        //localStorage.setItem('actionctrl', 'true');
      }).catch(error => {
        console.log(" Error Here to save image API :-!" + JSON.stringify(error));
      });
    }, (err) => {
      // Handle error
    });
    //return false;
  }


  sidemenufn() {
    this.sideMenuPages = [];
    this.translate.use(this.selectedLanguage);
    // this.translate.get('Dashboard').subscribe((res: string) => {
    //   this.sideMenuPages.push({ title: res, url: '/dashboard', icon: 'card', page: 'dashboard' });
    // });
    // this.translate.get('Check-In').subscribe((res1: string) => {
    //   this.sideMenuPages.push({ title: res1, url: '/subjects', icon: 'book', page: 'subjects' });
    // });
    this.translate.get('Check-In').subscribe((res2: string) => {
      this.sideMenuPages.push({ title: res2, url: '/tablinks', icon: 'contacts', page: 'tablinks' });
    });
    this.translate.get('Attendance Sheet').subscribe((res1: string) => {
      this.sideMenuPages.push({ title: res1, url: '/subjects', icon: 'book', page: 'subjects' });
    });
    this.translate.get('My profile').subscribe((res6: string) => {
      this.sideMenuPages.push({ title: res6, url: '/profile', icon: 'contact', page: 'profile' });
    });

    // this.translate.get('Resources with ID access').subscribe((res3: string) => {
    //   this.sideMenuPages.push({ title: res3, url: '/sso', icon: 'contacts', page: 'contacts' });
    // });
    // this.translate.get('Test Submission').subscribe((res5: string) => {
    //   this.sideMenuPages.push({ title: res5, url: '/test-sessions', icon: 'book', page: 'testSession' });
    // });

    // this.translate.get('Contact customer support').subscribe((res6: string) => {
    //   this.sideMenuPages.push({ title: res6, url: '/feedback', icon: 'create', page: 'feedback' });
    // });
    // this.translate.get('Activity Log').subscribe((res4: string) => {
    //   this.sideMenuPages.push({ title: res4, url: '/audit-trail', icon: 'pulse', page: 'audit-trail' });
    // });


    // this.translate.get('QR-Code').subscribe((res7: string) => {
    //   this.sideMenuPages.push({ title: res7, url: '/QR-code', icon: 'barcode', page: 'QR-Code' });
    // });

    this.translate.get('Logout').subscribe((res8: string) => {
      this.sideMenuPages.push({ title: res8, url: '/logout', icon: 'log-out', page: 'logout' });
    });
  }

  sidemenufn1(profilelang1) {
    this.sideMenuPages = [];
    this.translate.use(profilelang1);
    // this.translate.get('Dashboard').subscribe((res: string) => {
    //   this.sideMenuPages.push({ title: res, url: '/dashboard', icon: 'card', page: 'dashboard' });
    // });

    this.translate.get('Check-In').subscribe((res2: string) => {
      this.sideMenuPages.push({ title: res2, url: '/tablinks', icon: 'contacts', page: 'tablinks' });
    });
    this.translate.get('Attendance Sheet').subscribe((res1: string) => {
      this.sideMenuPages.push({ title: res1, url: '/subjects', icon: 'book', page: 'subjects' });
    });
    this.translate.get('My profile').subscribe((res6: string) => {
      this.sideMenuPages.push({ title: res6, url: '/profile', icon: 'contact', page: 'profile' });
    });

    // this.translate.get('Attendance').subscribe((res2: string) => {
    //   this.sideMenuPages.push({ title: res2, url: '/resource-link', icon: 'contacts', page: 'resource-link' });
    // });
    // this.translate.get('Resources with ID access').subscribe((res3: string) => {
    //   this.sideMenuPages.push({ title: res3, url: '/sso', icon: 'contacts', page: 'contacts' });
    // });

    // this.translate.get('Test Submission').subscribe((res5: string) => {
    //   this.sideMenuPages.push({ title: res5, url: '/test-sessions', icon: 'book', page: 'testSession' });
    // });

    // this.translate.get('Contact customer support').subscribe((res6: string) => {
    //   this.sideMenuPages.push({ title: res6, url: '/feedback', icon: 'create', page: 'feedback' });
    // });
    // this.translate.get('Activity Log').subscribe((res4: string) => {
    //   this.sideMenuPages.push({ title: res4, url: '/audit-trail', icon: 'pulse', page: 'audit-trail' });
    // });

    // this.translate.get('My profile').subscribe((res6: string) => {
    //   this.sideMenuPages.push({ title: res6, url: '/profile', icon: 'contact', page: 'profile' });
    // });

    // this.translate.get('QR-Code').subscribe((res7: string) => {
    //   this.sideMenuPages.push({ title: res7, url: '/QR-code', icon: 'barcode', page: 'QR-Code' });
    // });

    this.translate.get('Logout').subscribe((res8: string) => {
      this.sideMenuPages.push({ title: res8, url: '/logout', icon: 'log-out', page: 'logout' });
    })
  }


  Flag = true;

  onClickLogin() {

    this.isSubmitted = true;
    if (!this.loginForm.valid) {
      return false;
    } else {

      /*Web API Code start Here**/

      // this.sidemenufn();
      // this.loginService.login(this.userIdVar, this.passwordVar, '100').subscribe(data => {
      //   this.dataList = data;
      //   console.log("this.dataList  is ==", this.dataList);
      //   if (!this.dataList.length && this.userIdVar != "" && this.passwordVar != "") {
      //     alert('Username Or Password Is Incorrect !')
      //   }

      //   //  Set Temporary data for localStorage 
      //   localStorage.setItem('userType', this.dataList[0]['userType'])
      //   localStorage.setItem('token', this.dataList[0]['token'])
      //   localStorage.setItem('userName', this.dataList[0]['firstname'] + ' ' + this.dataList[0]['lastname'])
      //   localStorage.setItem('email', this.dataList[0]['email'])
      //   localStorage.setItem('class_id', this.dataList[0]['class_id'])
      //   localStorage.setItem('userId', this.dataList[0]['userId'])

      //   for (var i = 0; i < this.dataList.length; i++) {

      //     if (this.dataList[i]['username'] = this.userIdVar) {

      //       if (this.setData == true) {
      //         console.log("Set Data !");
      //         this.checked = true;

      //         localStorage.setItem('USERNAME', this.userIdVar);
      //         localStorage.setItem('PASSWORD', this.passwordVar);

      //       } else if (this.setData == false) {

      //         console.log("Remove Data !");
      //         localStorage.removeItem('USERNAME');
      //         localStorage.removeItem('PASSWORD');
      //       }

      //       this.submitted = false
      //       this.showLoginForm = false;
      //       this.sideMenuNames = true;

      //       this.userDetails = [
      //         {
      //           title: localStorage.getItem('userName'),
      //           emailid: localStorage.getItem('email'),
      //           icon: 'contact'
      //         },
      //       ]

      //       //Router navigate to dashboard
      //       this.router.navigateByUrl('dashboard');
      //     }
      //   }
      // },
      //   error => {
      //     console.log('error');
      //   });

      /**For Web API Code End Here ! */

      // Check Network Type Here
      if (this.network.type != 'none') {
      
        if (this.deviceid == null || this.deviceid == undefined) {
          this.platform.ready().then(() => {
            this.getuniqueDeviceID();
          });
        }
        //     this.getID_UID('UUID');
        //     localStorage.setItem('USERNAME', this.userIdVar);
        //     localStorage.setItem('PASSWORD', this.passwordVar);
        //     if (this.permissiongranted) {

        //       // alert('Permission Granted Please Restart App!');
        //       this.translate.use(this.selectedLanguage);
        //       this.translate.get('Permission Granted Please Restart App!').subscribe(async (res: string) => {
        //         var temp=this.langTransalate(res)
        //         var temp1=this.langTransalate("OK")
        //         let alert = await this.alertCtrl.create({

        //           message: temp,
        //           buttons: [{
        //             text: temp1,
        //           }]
        //         });
        //         alert.present();
        //       });

        //       window.location.reload(true);
        //     }
        //   });
        // }
        else {
         
          var data = {
            'email': this.userIdVar,
            'password': this.passwordVar,
            'deviceid': this.deviceid//this.uuiddeviceid
          }
          var headers = {
            'Content-Type': 'application/json'
          }
          console.log(`${environment.apiUrl}/api/applogin`, JSON.stringify(data));
          //alert('UUID' + JSON.stringify(data));

          this.http.post(`${environment.apiUrl}/api/applogin`, data, headers).then(res => {
            // alert('in api call' + res.data);
            this.dataList = [];
            this.dataList = JSON.parse(res.data);
            console.log('this.dataList :-' + JSON.stringify(this.dataList));
            console.log('this.dataList.message :-' + this.dataList.message);
            // if(this.dataList.message != 'undefined') {
            //   this.translate.use(this.selectedLanguage);
            //   this.translate.get('Please enter the correct Email/Citizen ID or Password').subscribe((res: string) => {
            //     alert(res);
            //   });
            // }
            if (this.dataList.message == 'please enter correct user name/password') {
              this.translate.use(this.selectedLanguage);
              this.translate.get('Please enter the correct Email/Citizen ID or Password').subscribe(async (res: string) => {
                var temp=this.langTransalate(res)
                var temp1=this.langTransalate("OK")
                let alert = await this.alertCtrl.create({

                  message: temp,
                  buttons: [{
                    text: temp1,
                  }]
                });
                alert.present();
              });
            }
            else if (this.dataList.message == 'please enter correct password') {
              this.translate.use(this.selectedLanguage);
              this.translate.get('Please enter the correct Email/Citizen ID or Password').subscribe(async (res: string) => {
              //  alert(res);
                var temp=this.langTransalate(res)
                var temp1=this.langTransalate("OK")
                let alert = await this.alertCtrl.create({

                  message: temp,
                  buttons: [{
                    text: temp1,
                  }]
                });
                alert.present();
              });
            }

            else {
              this.permissonArray = [];
              // alert('this.dataList[0][userType] :- ' + this.dataList[0]['userType']);
              // alert('this.dataList.length' + this.dataList.length);
              //&& this.dataList[0]['userType'].trim() == 'Entity Director'
                if (this.userIdVar != "" && this.passwordVar != "" && this.dataList.length != undefined && this.dataList[0]['userType'] != 'Administrator' && (this.dataList[0]['userType'] == 'Manager' || this.dataList[0]['userType'] == 'Entity Director')) {  
              //Account deactivated then display message 
                if (this.dataList[0]['message'] == 'account_deactivate') {
                  this.translate.use(this.selectedLanguage);
                  this.translate.get('Your account has been deactivated please contact to the Jawata Team').subscribe((res: string) => {
                    alert(res);

                    this.databaseObj.executeSql("SELECT * FROM " + this.table_name, [])
                      .then((res) => {

                        // alert("res is :-" + JSON.stringify(res));

                        this.row_data = [];
                        for (var i = 0; i < res.rows.length; i++) {
                          this.row_data.push(res.rows.item(i));
                        }
                        /**Rows Delete Here */
                        for (var i = 0; i < this.row_data.length; i++) {
                          // alert("this.userIdVar :-" + this.userIdVar);
                          if (this.row_data[i]['email'] == this.userIdVar) {
                            this.databaseObj.executeSql(`DELETE FROM ${this.table_name} WHERE email = ${this.row_data[i]['email']}`, [])
                              .then((res) => {
                                // alert("Row Deleted :-" + JSON.stringify(res));
                              })
                              .catch(e => {
                                // alert("error to delete rows " + JSON.stringify(e))
                              });
                          }
                        }
                      })
                      .catch(e => {
                        // alert("Error Is to get Rows:- " + JSON.stringify(e))
                      });
                  });
                }
                else {
                  // check profile lang and set , if null then user selected/default lang will set
                  if (this.dataList[0]['language'] != null) {
                    this.lang = this.dataList[0]['language'];//'english';
                    this.profilelang = 'en';
                    if (this.lang.toString() == 'hindi') {
                      this.profilelang = 'hi';
                      this.selectedLanguage = this.profilelang;
                      this.translate.use(this.profilelang);
                      this.languageChanged(this.profilelang);
                      this.selectedLanguage = this.profilelang;
                      this.translateConfigService.setLanguage(this.profilelang);
                      localStorage.setItem('selectedL', this.profilelang);
                      this.translate.setDefaultLang(this.profilelang);
                      this.sidemenufn1(this.profilelang);
                    }
                    else if (this.lang == 'french') {
                      this.profilelang = 'fr';
                      this.selectedLanguage = this.profilelang;
                      this.translate.use(this.profilelang);
                      this.languageChanged(this.profilelang);
                      this.selectedLanguage = this.profilelang;
                      this.translateConfigService.setLanguage(this.profilelang);
                      localStorage.setItem('selectedL', this.profilelang);
                      this.translate.setDefaultLang(this.profilelang);
                      this.sidemenufn1(this.profilelang);
                    }
                    else if (this.lang == 'spanish') {
                      this.profilelang = 'es';
                      this.selectedLanguage = this.profilelang;
                      this.translate.use(this.profilelang);
                      this.languageChanged(this.profilelang);
                      this.selectedLanguage = this.profilelang;
                      this.translateConfigService.setLanguage(this.profilelang);
                      localStorage.setItem('selectedL', this.profilelang);
                      this.translate.setDefaultLang(this.profilelang);
                      this.sidemenufn1(this.profilelang);
                    }
                    else if (this.lang == 'german') {
                      this.profilelang = 'de';
                      this.selectedLanguage = this.profilelang;
                      this.translate.use(this.profilelang);
                      this.languageChanged(this.profilelang);
                      this.selectedLanguage = this.profilelang;
                      this.translateConfigService.setLanguage(this.profilelang);
                      localStorage.setItem('selectedL', this.profilelang);
                      this.translate.setDefaultLang(this.profilelang);
                      this.sidemenufn1(this.profilelang);
                    }
                    else {
                      this.profilelang = 'en';
                      this.selectedLanguage = this.profilelang;
                      this.translate.use(this.profilelang);
                      this.languageChanged(this.profilelang);
                      this.selectedLanguage = this.profilelang;
                      this.translateConfigService.setLanguage(this.profilelang);
                      localStorage.setItem('selectedL', this.profilelang);
                      this.translate.setDefaultLang(this.profilelang);
                      this.sidemenufn1(this.profilelang);
                    }
                  }
                  else {
                    localStorage.setItem('selectedL', this.selectedLanguage);
                    this.sidemenufn();
                  }
                  /**Set Data to localStorage for Remember Me functionality */
                  if (this.setData == true) {
                    this.checked = true;
                    localStorage.setItem('remembermechecked', 'true');
                    localStorage.setItem('USERNAME', this.userIdVar);
                    localStorage.setItem('PASSWORD', this.passwordVar);
                    localStorage.setItem('profile_image_path', this.dataList[0]['profile_image_path']);
                    this.profilepic = this.dataList[0]['profile_image_path'];
                  } else if (this.setData == false) {
                    localStorage.setItem('remembermechecked', 'false');
                    localStorage.removeItem('USERNAME');
                    localStorage.removeItem('PASSWORD');
                    localStorage.removeItem('profile_image_path');
                  }
                  console.log('after language select..');
                  /** Check classid is not null/0/blank  for actor */
                  if (this.dataList[0]['userType'] == 'Manager'  || this.dataList[0]['userType'] == 'Entity Director') {
                    localStorage.setItem('citizen_id', this.dataList[0]['citizen_id']);
                    /** Set localStorage data in storeData function */
                    this.storeData(this.dataList);
                  }
                  //  else if (this.dataList[0]['userType'] == "Actor's Parent") {
                  //   /** Set localStorage data in storeData function */
                  //   this.storeData(this.dataList);
                  // }
                }
              }
              else {
                // logged in as admin/manager show alert message and Clear username and password

                if (this.userIdVar != "" && this.passwordVar != "") {
                  this.translate.use(this.selectedLanguage);
                  this.translate.get('Invalid Username for Manager /Entity Director').subscribe((res: string) => {
                    alert(res);
                  });
                }
              }
            }// please enter correct pwd
          }).catch(error => {
            // alert("Login Error !" + JSON.stringify(error));
          });
        }

      }
      else if (this.network.type == 'none' && this.userIdVar != "" && this.passwordVar != "") {

        this.databaseObj.executeSql("SELECT * FROM " + this.table_name, [])
          .then((res) => {
            console.log('offline' + JSON.stringify(res) + 'length' + res.rows.length);
            if (res.rows.length == 0) {
              this.translate.use(this.selectedLanguage);
              this.translate.get('This user not exist in offline database, Please connect internet connection').subscribe((res: string) => {
                alert(res);
                this.Flag = false;
              });
            }

            this.row_data = [];

            if (res.rows.length > 0) {
              for (var i = 0; i < res.rows.length; i++) {
                this.row_data.push(res.rows.item(i));
              }

              // alert("this.row_data.length :-" + this.row_data.length);

              for (var i = 0; i < this.row_data.length; i++) {
                if (this.row_data[i]['userIdVar'] == this.userIdVar && this.row_data[i]['passwordVar'] == this.passwordVar) {

                  this.validCrdendtialFlag = false;

                  this.Flag = false;

                  localStorage.setItem('userType', this.row_data[i]['usertype']);
                  localStorage.setItem('token', this.row_data[i]['token']);
                  localStorage.setItem('userName', this.row_data[i]['userFLName']);
                  localStorage.setItem('email', this.row_data[i]['email']);
                  //localStorage.setItem('class_id', this.row_data[i]['class_id']);
                  localStorage.setItem('userId', this.row_data[i]['userid']);
                  localStorage.setItem('username', this.row_data[i]['username']);
                  localStorage.setItem('selectedL', this.row_data[i]['language']);
                  localStorage.setItem('citizen_id', this.row_data[i]['citizen_id']);
                  localStorage.setItem('filename', this.row_data[i]['filename']);

                  const newBaseFilesystemPath = this.file.externalRootDirectory + 'Documents/Jawata/' + localStorage.getItem('userName') + '/';
                  const storedPhoto = newBaseFilesystemPath + this.row_data[i]['filename'];
                  const displayImage = this.webview.convertFileSrc(storedPhoto);
                  console.log('displayImage' + displayImage);
                  localStorage.setItem('profile_image_path', displayImage);
                  this.profilepic = displayImage;
                  console.log('this.profilepic offline 1 :-' + this.profilepic);

                  localStorage.setItem('loggedinflag', 'true');
                  localStorage.setItem('notificationFlag', 'true');
                  this.showLoginForm = false;
                  this.sideMenuNames = true;
                  this.sidemenufn();
                  this.translate.use(this.selectedLanguage);
                  this.translate.get(localStorage.getItem('userType')).subscribe((res: string) => {
                    this.userType = "";
                    this.userType = res;

                    /**Set Data to localStorage for Remember Me functionality */
                    if (this.setData == true) {
                      this.checked = true;
                      localStorage.setItem('remembermechecked', 'true');
                      localStorage.setItem('USERNAME', this.userIdVar);
                      localStorage.setItem('PASSWORD', this.passwordVar);
                    } else if (this.setData == false) {
                      localStorage.setItem('remembermechecked', 'false');
                      localStorage.removeItem('USERNAME');
                      localStorage.removeItem('PASSWORD');
                    }

                    this.userDetails = [];
                    this.userDetails = [
                      {
                        title: localStorage.getItem('userName'),
                        emailid: this.userType,
                        icon: 'camera'//localStorage.getItem('profile_image_path') //'contact'
                      },
                    ];
                  });

                  //this.router.navigateByUrl('dashboard');
                  this.router.navigateByUrl('tablinks');
                }
                else if (this.Flag != false) {
                  this.validCrdendtialFlag = true;
                }
              }

              if (this.validCrdendtialFlag == true) {
                this.translate.use(this.selectedLanguage);
                this.translate.get('Invalid Username for Actor/Actor parent OR This user not exist in offline database').subscribe((res: string) => {
                  this.Flag = true;
                  alert(res);
                  this.validCrdendtialFlag = false;
                });
              }
            }
          })
          .catch(e => {
            // alert("Error Is to get Rows:- " + JSON.stringify(e))
          });
      }
    }
  }

  storeData(dataList) {

    // alert("dataList :-" + JSON.stringify(dataList));

    localStorage.setItem('userType', dataList[0]['userType'])
    localStorage.setItem('token', dataList[0]['token'])
    localStorage.setItem('userName', dataList[0]['firstname'] + ' ' + dataList[0]['lastname'])
    localStorage.setItem('email', dataList[0]['email'])
    //localStorage.setItem('class_id', dataList[0]['class_id'])
    localStorage.setItem('userId', dataList[0]['userId'])
    localStorage.setItem('username', dataList[0]['username']);
    localStorage.setItem('citizen_id', dataList[0]['citizen_id']);
    localStorage.setItem('filename', dataList[0]['profile_image']);

    localStorage.setItem('userIdVar', this.userIdVar);
    localStorage.setItem('passwordVar', this.passwordVar);

    localStorage.setItem('loggedinflag', 'true');
    localStorage.setItem('notificationFlag', 'true');

    this.showLoginForm = false;
    this.sideMenuNames = true;

    this.translate.use(this.selectedLanguage);
    this.translate.get(localStorage.getItem('userType')).subscribe((res: string) => {

      this.userType = "";
      this.userType = res;

      this.userDetails = [];
      this.userDetails = [{
        title: localStorage.getItem('userName'),
        emailid: this.userType,
        icon: 'camera'//'contact'
      }];
    });

    //this.Imagepathcallfromserver();
    /**Row Inserted Here for Offline App */
    this.insertRow();
    /**Router Nevigate to Dashboard */
    // this.router.navigateByUrl('dashboard');
    this.router.navigateByUrl('tablinks');
  }

  onClickRememberMe(value) {
    this.setData = false;
    if (value == true) {
      this.setData = true;
      localStorage.setItem('remembermechecked', 'true');
    }
    else {
      this.setData = false;
      localStorage.setItem('remembermechecked', 'false');
    }
    //console.log('onClickRememberMe'+ this.setData);
  }

  onChangeDate(value) {

    this.birthDate = "";
    this.birthDate = this.datePipe.transform(value, 'yyyy-MM-dd');
  }

  onClickForgotPasword() {

    this.forgotPassForm = true;
    this.showLoginForm = false;
    this.sideMenuNames = false;
    this.isSubmitted = false;
  }

  cancelForgotPassword() {

    this.isSubmitted = false;
    this.forgotPassForm = false;
    this.showLoginForm = true;
    this.emailID = "";
  }

  SubmitForgotPassDetails() {

    if (this.network.type == 'none') {
      this.translate.use(this.selectedLanguage);
      this.translate.get('Before click to submit,please connect internet connection').subscribe((res: string) => {
        alert(res);
      });
    }
    else {
      this.isSubmitted = true;
      if (!this.forgotPassword.valid) {
        return false;
      } else {
        if (this.emailID != "") {

          this.showLoader();

          var data = {
            'email': this.emailID,
            'dob': this.datePipe.transform(this.birthDate, 'yyyy-MM-dd'),
            'locale': this.selectedLanguage,
            'tmpurl': `${environment.apiUrl}`
          }

          var headers = {
            'Content-Type': 'application/json'
          }
          console.log('this.selectedLanguage' + this.selectedLanguage + `${environment.apiUrl}/api/forgot_password`, JSON.stringify(data));
          this.http.post(`${environment.apiUrl}/api/forgot_password`, data, headers).then(res => {

            this.forgotPassArr = []
            this.forgotPassArr = JSON.parse(res.data);

            this.dismissLodader();

            if (this.forgotPassArr.message == 'An email has been sent to the entered Email ID') {

              this.translate.use(this.selectedLanguage);
              this.translate.get('An email has been sent to the entered Email ID').subscribe((res: string) => {
                alert(res);
              });

            } else if (this.forgotPassArr.message == 'This email or date of birth is incorrect') {

              this.translate.use(this.selectedLanguage);
              this.translate.get('This email or date of birth is incorrect').subscribe((res: string) => {
                alert(res);
              });
            }

            this.forgotPassForm = true;
            this.showLoginForm = false;
            this.sideMenuNames = false;

            if (this.forgotPassArr.message == 'An email has been sent to the entered Email ID') {
              window.location.reload(true);
              this.forgotPassForm = false;
              this.showLoginForm = true;
              this.sideMenuNames = true;
              this.emailID = "";
              this.birthDate = "";
            } else {
              window.location.reload(true);
              this.forgotPassForm = true;
              this.showLoginForm = false;
              this.sideMenuNames = false;
            }
          }).catch(error => {
            // alert("Error In Forgot Password !");
            this.dismissLodader();
          });
        } else if (this.network.type == "none" && this.emailID != "") {
          this.translate.use(this.selectedLanguage);
          this.translate.get('Before to forgot password, Please connect internet connection').subscribe((res: string) => {
            alert(res);
          });
        }
      }
    }
  }

  loaderLanguage = "";

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

  async dismissLodader() {
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }

  devicefiledir() {
    this.applicationStorageDirectory = cordova.file.applicationStorageDirectory;
    cordova.file.getFreeDiskSpace().then(data => {
      this.getFreeDiskSpace = data;
    })
  }

  deviceconnecttype() {
    let connectSubscription = this.network.onConnect().subscribe(() => {
      //alert('network connected! : -' + this.network.type);
      // We just got a connection but we need to wait briefly
      // before we determine the connection type. Might need to wait.
      // prior to doing any api requests as well.
      setTimeout(() => {
        if (this.network.type === 'wifi') {
          console.log('we got a wifi connection, woohoo!: -' + this.network.type);
        }
      }, 3000);
    });
  }
  createDB() {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: this.database_name,
        location: 'default'
      }).then((db: SQLiteObject) => {
        this.databaseObj = db;
        this.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' + this.table_name + ' (id INTEGER PRIMARY KEY AUTOINCREMENT,userid INTEGER, username VARCHAR(255),token VARCHAR(255),userFLName VARCHAR(200), email VARCHAR(100),class_id INTEGER, usertype VARCHAR(200),language VARCHAR(100), userIdVar varchar(2), passwordVar varchar(2), filename varchar(2), citizen_id varchar(2))', [])
          .then(() => {
            // alert('Database Created :-' + this.database_name);
            // alert('Table Created :-' + this.table_name);
          }).catch(e => {
            // alert("Error SubjectDocs Table Created ! " + JSON.stringify(e))
          });
      }).catch(e => {
        // alert("Error to Database Create ! " + JSON.stringify(e))
      });
    });
  }

  insertRow() {

    this.databaseObj.executeSql("SELECT * FROM " + this.table_name, [])
      .then((res) => {

        // alert("res is :-" + JSON.stringify(res));

        this.row_data = [];
        for (var i = 0; i < res.rows.length; i++) {
          this.row_data.push(res.rows.item(i));
        }

        if (this.network.type != 'none') {
          if (res.rows.length >= 0) {

            /**Rows Delete Here */
            for (var i = 0; i < this.row_data.length; i++) {

              if (this.row_data[i]['userId'] == localStorage.getItem('userId')) {

                this.databaseObj.executeSql(`DELETE FROM ${this.table_name} WHERE userId = ${this.row_data[i]['userId']}`, [])
                  .then((res) => {
                    // alert("Row Deleted :-" + JSON.stringify(res));
                  })
                  .catch(e => {
                    // alert("error to delete rows " + JSON.stringify(e))
                  });
              }
            }

            /**Inserting Rows Here */
            this.databaseObj.executeSql('INSERT INTO ' + this.table_name + '(userid , username ,token ,userFLName , email ,class_id, usertype,language, userIdVar, passwordVar,filename,citizen_id) VALUES ("' +
              localStorage.getItem('userId') + '","' +
              localStorage.getItem('username') + '","' +
              localStorage.getItem('token') + '","' +
              localStorage.getItem('userName') + '","' +
              localStorage.getItem('email') + '","' +
              localStorage.getItem('class_id') + '","' +
              localStorage.getItem('userType') + '","' +
              localStorage.getItem('selectedL') + '","' +
              localStorage.getItem('userIdVar') + '","' +
              localStorage.getItem('passwordVar') + '","' +
              localStorage.getItem('filename') + '","' +
              localStorage.getItem('citizen_id') + '")'

              , [])
              .then(() => {
                // alert('Row Inserted ....!' + this.table_name);
              }).catch(e => {
                // alert("Error Is insert Rows:- " + JSON.stringify(e))
              });
          }
        }
      })
      .catch(e => {
        // alert("Error Is to get Rows:- " + JSON.stringify(e))
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
}
