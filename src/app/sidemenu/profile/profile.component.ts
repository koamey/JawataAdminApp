import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { Network } from '@ionic-native/network/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { environment } from 'src/environments/environment';
import { TranslateConfigService } from 'src/app/translate-config.service';
import { Platform } from '@ionic/angular';
import { DatePipe, Location } from '@angular/common';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})

export class ProfileComponent implements OnInit {

  heading = this.translateConfigService.get('My profile');
  profileDetailArr = [];
  tempArr;
  notificationDetails = [];
  notificationArr;

  profileList = true;
  editProfileForm = false;

  profileForm: FormGroup;
  isSubmitted = false;

  profile_title = "";
  profile_fName = "";
  profile_lname = "";
  profile_email = "";
  profile_dob = "";
  profile_userName = "";
  profile_userId = "";
  profile_national_id = "";
  profile_address_line1 = "";
  profile_address_line2 = "";
  profile_town = "";
  profile_postCode = "";
  selectedLanguage = localStorage.getItem('selectedL');
  profilelang: any;

  row_data = [];
  databaseObj: SQLiteObject;//database instance object

  readonly database_name: string = "Jawata_App.db";//DB name
  readonly table_name: string = "profileDetailsTable"; // Table 

  constructor(private menuService: MenuService, private http: HTTP,
    private network: Network, private platform: Platform,
    private translateConfigService: TranslateConfigService,
    private datePipe: DatePipe,
    private router: Router, private formBuilder: FormBuilder,
    private _location: Location,
    private translate: TranslateService,
    private sqlite: SQLite, private statusBar: StatusBar
  ) {

    this.platform.ready().then(() => {

      if (this.platform.is('android')) {
        this.statusBar.backgroundColorByHexString('#f1f1f1');
      }

      this.createDB();
      this.getProfileData();
      this.initializeBackButtonCustomHandler();
    }).catch(error => { console.log('subjects' + error) });
  }

  ngOnInit() {
    console.log('this.selectedLanguage' + this.selectedLanguage);

    this.profileForm = this.formBuilder.group({
      profileFirstName: ['', [Validators.required]],
      profileLastName: ['', [Validators.required]],
      profileEmail: ['', [Validators.required, Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')]],
      profileDOB: ['', [Validators.required]],
      profileUsername: ['', [Validators.required]],
    })

    /** heading name change after select language */
    this.translate.use(this.selectedLanguage);
    this.translate.get('My profile').subscribe((res: string) => {
      this.heading = "";
      this.heading = res;
    });
  }

  get errorControl() {
    return this.profileForm.controls;
  }

  initializeBackButtonCustomHandler(): void {
    this.platform.backButton.subscribeWithPriority(999990, () => {
      if (localStorage.getItem('currenturl').toString().split('/')[1] == 'dashboard') {
        navigator['app'].exitApp();
      }
      else {
        this._location.back();
        //this.router.navigate([localStorage.getItem('bckbtnpage').toString().split('/')[1]]);
      }
    });
  }

  doRefresh(event) {
    this.getProfileData();
    event.target.complete();
  }

  getProfileData() {

    /**For Web API called Here */

    // this.menuService.getProfile(localStorage.getItem('userId')).subscribe(data => {
    //   this.tempArr = data;
    //   this.profileDetailArr = [];
    //   this.profileDetailArr = [
    //     { title: 'Title', detail: this.tempArr[0]['title'] },
    //     { title: 'First Name', detail: this.tempArr[0]['firstName'] },
    //     { title: 'Last Name', detail: this.tempArr[0]['lastName'] },
    //     { title: 'Email', detail: this.tempArr[0]['email'] },
    //     { title: 'Birth Date', detail: this.tempArr[0]['dob'] },
    //     { title: 'User ID', detail: this.tempArr[0]['id'] },
    //     { title: 'Citizen ID', detail: this.tempArr[0]['citizen_id'] },
    //     { title: 'Address', detail: this.tempArr[0]['address_line1'] + '' + this.tempArr[0]['address_line2'] },
    //     { title: 'Town', detail: this.tempArr[0]['town'] },
    //     { title: 'Postcode', detail: this.tempArr[0]['post_code'] },
    //   ]
    // })


    var headers = {
      'Content-Type': 'application/json'
    }
    console.log(`${environment.apiUrl}/api/myProfile/${localStorage.getItem('userId')}`);
    this.http.get(`${environment.apiUrl}/api/myProfile/${localStorage.getItem('userId')}`, {}, headers).then(res => {

      this.tempArr = []
      this.tempArr = JSON.parse(res.data); // data received by server
      console.log("this.tempArr get profile :-" + JSON.stringify(this.tempArr));

      this.translate.setDefaultLang(this.selectedLanguage);
      this.translate.use(this.selectedLanguage);
      this.translateConfigService.setLanguage(this.selectedLanguage);
      console.log('this.selectedLanguage myProfile :' + this.selectedLanguage);

      this.profileDetailArr = [];

      this.profileDetailArr = [
        { title: this.translateConfigService.get('Title'), detail: (this.tempArr[0]['title'].toString() == 'Miss') ? 'Ms' : ((this.tempArr[0]['title'].toString() == 'miss') ? 'Ms' : ((this.tempArr[0]['title'].toString() == 'MIss') ? 'Ms' : (this.tempArr[0]['title'].toString() == 'mr') ? 'Mr' : 'Mr')) },
        { title: this.translateConfigService.get('First Name'), detail: this.tempArr[0]['firstName'] },
        { title: this.translateConfigService.get('Last Name'), detail: this.tempArr[0]['lastName'] },
        { title: this.translateConfigService.get('Email'), detail: this.tempArr[0]['email'] },
        { title: this.translateConfigService.get('Date of Birth'), detail: this.tempArr[0]['dob'] },
        { title: this.translateConfigService.get('User Name'), detail: this.tempArr[0]['userName'] },
        { title: this.translateConfigService.get('Citizen ID'), detail: this.tempArr[0]['citizen_id'] },
        { title: this.translateConfigService.get('Address Line 1'), detail: this.tempArr[0]['address_line1'] },
        { title: this.translateConfigService.get('Address Line 2'), detail: this.tempArr[0]['address_line2'] },
        { title: this.translateConfigService.get('Town'), detail: this.tempArr[0]['town'] },
        { title: this.translateConfigService.get('Post Code'), detail: this.tempArr[0]['post_code'] },
        { title: this.translateConfigService.get('Language'), detail: this.tempArr[0]['locale'] },
      ]

      this.insertRow();

      // alert("profileDetailArr :-" + this.profileDetailArr);
    })
      .catch(error => {
        // alert("Error In Get Profile !");
      });
  }

  editProfile() {

    if (this.network.type != "none") {

      var headers = {
        'Content-Type': 'application/json'
      }
      console.log(`${environment.apiUrl}/api/myProfile/${localStorage.getItem('userId')}`);
      this.http.get(`${environment.apiUrl}/api/myProfile/${localStorage.getItem('userId')}`, {}, headers).then(res => {

        // alert("res.data is Prfile:-" + res.data);
        this.tempArr = []
        this.tempArr = JSON.parse(res.data); // data received by server

        console.log(" edit this.tempArr :-" + JSON.stringify(this.tempArr));

        this.editProfileForm = true;
        this.profileList = false;
        this.isSubmitted = false;

        this.profile_title = "";
        this.profile_fName = "";
        this.profile_lname = "";
        this.profile_email = "";
        this.profile_dob = "";
        this.profile_userName = "";
        this.profile_national_id = "";
        this.profile_userId = "";
        this.selectedLanguage = "";
        if (this.tempArr[0]['title'].toString() == 'MR') {
          this.profile_title = "";
          this.profile_title = 'Mr';
        } else if (this.tempArr[0]['title'] == 'MISS') {
          this.profile_title = "";
          this.profile_title = 'Ms';
        }
        else if (this.tempArr[0]['title'] == 'mr') {
          this.profile_title = "";
          this.profile_title = "Mr"
        } else if (this.tempArr[0]['title'] == 'miss') {
          this.profile_title = "";
          this.profile_title = "Ms"
        }
        else {
          this.profile_title = this.tempArr[0]['title'];
        }
        this.profile_fName = this.tempArr[0]['firstName'];
        this.profile_lname = this.tempArr[0]['lastName'];
        this.profile_email = this.tempArr[0]['email'];
        this.profile_dob = this.tempArr[0]['dob'];
        this.profile_userName = this.tempArr[0]['userName'];
        this.profile_national_id = this.tempArr[0]['national_id'];
        this.profile_userId = this.tempArr[0]['id'];
        this.selectedLanguage = this.tempArr[0]['locale'];

        if (this.selectedLanguage.toString() == 'hindi') {
          this.profilelang = 'hi';
          this.selectedLanguage = this.profilelang;
          this.translateConfigService.setLanguage(this.selectedLanguage);
          localStorage.setItem('selectedL', this.selectedLanguage);
        }
        else if (this.selectedLanguage == 'french') {
          this.profilelang = 'fr';
          this.selectedLanguage = this.profilelang;
          this.translateConfigService.setLanguage(this.selectedLanguage);
          localStorage.setItem('selectedL', this.selectedLanguage);
        }
        else if (this.selectedLanguage == 'spanish') {
          this.profilelang = 'es';
          this.selectedLanguage = this.profilelang;
          this.translateConfigService.setLanguage(this.selectedLanguage);
          localStorage.setItem('selectedL', this.selectedLanguage);
        }
        else if (this.selectedLanguage == 'german') {
          this.profilelang = 'de';
          this.selectedLanguage = this.profilelang;
          this.translateConfigService.setLanguage(this.selectedLanguage);
          localStorage.setItem('selectedL', this.selectedLanguage);
        }
        else {
          this.profilelang = 'en';
          this.selectedLanguage = this.profilelang;
          this.translateConfigService.setLanguage(this.selectedLanguage);
          localStorage.setItem('selectedL', this.selectedLanguage);
        }


        if (this.tempArr[0]['title'] == 'mr') {
          this.profile_title = "";
          this.profile_title = "Mr"
        } else if (this.tempArr[0]['title'] == 'miss') {
          this.profile_title = "";
          this.profile_title = "Ms"
        }

        if (this.tempArr[0]['address_line1'] == null) {
          this.profile_address_line1;
        } else {
          this.profile_address_line1 = this.tempArr[0]['address_line1'];
        }

        if (this.tempArr[0]['address_line2'] == null) {
          this.profile_address_line2;
        } else {
          this.profile_address_line2 = this.tempArr[0]['address_line2'];
        }

        if (this.tempArr[0]['town'] == null) {
          this.profile_town;
        } else {
          this.profile_town = this.tempArr[0]['town'];
        }

        if (this.tempArr[0]['post_code'] == null) {
          this.profile_postCode;
        } else {
          this.profile_postCode = this.tempArr[0]['post_code'];
        }

      }).catch(error => {
          console.log("Error In Get Profile !" + error);
        });
    } else {
      this.translate.use(this.selectedLanguage);
      this.translate.get('Before to edit profile form, Please connect internet connection').subscribe((res) => {
        alert(res);
      });
    }
  }

  onClickSubmit() {
    this.isSubmitted = true;
    if (!this.profileForm.valid) {
      return false;
    } else {

      /**Checking network type here before to submit data*/
      if (this.network.type != "none") {

        var data = {
          "title": this.profile_title,
          "firstname": this.profile_fName,
          "lastname": this.profile_lname,
          "email": this.profile_email,
          "dob": this.datePipe.transform(this.profile_dob, 'yyyy-MM-dd'),
          "userId": this.profile_userId,
          "national_id": this.profile_national_id,
          "address_line1": this.profile_address_line1,
          "address_line2": this.profile_address_line2,
          "town": this.profile_town,
          "post_code": this.profile_postCode,
          "username": this.profile_userName,
          "language": this.selectedLanguage,
          "userType": localStorage.getItem('userType')
        }

        var headers = {
          'Content-Type': 'application/json',
        }
        console.log(`${environment.apiUrl}/api/update_myProfile` + JSON.stringify(data));
        this.http.post(`${environment.apiUrl}/api/update_myProfile`, data, headers).then(res => {

          this.profile_address_line1 = "";
          this.profile_address_line2 = "";
          this.profile_town = "";
          this.profile_postCode = "";
          this.editProfileForm = false;
          this.profileList = true;

          if (this.selectedLanguage != '' || this.selectedLanguage != null) {
            this.translateConfigService.setLanguage(this.selectedLanguage);
            localStorage.setItem('selectedL', this.selectedLanguage);
            window.location.reload(true);
          }
        }).catch(error => {
          console.log("Error In Profile Updates !" + error);
        });
      } else {
        this.translate.use(this.selectedLanguage);
        this.translate.get('Before to submit profile data, Please connect internet connection').subscribe((res) => {
          alert(res);
        });

      }
    }
  }

  onClickCancel() {

    this.profile_address_line1 = "";
    this.profile_address_line2 = "";
    this.profile_town = "";
    this.profile_postCode = "";
    this.selectedLanguage = "";

    this.editProfileForm = false;
    this.profileList = true;
    this.isSubmitted = false;
  }


  /**Offline App Code Start Here */

  createDB() {
    this.sqlite.create({
      name: this.database_name,
      location: 'default'
    }).then((db: SQLiteObject) => {
      this.databaseObj = db;
      this.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' + this.table_name + ' (id INTEGER PRIMARY KEY AUTOINCREMENT, userId varchar(2), entityId varchar(2), title varchar(2), detail varchar(2))', [])
        .then(() => {
          // alert('Database Created :-' + this.database_name);
          // alert('Table Created :-' + this.table_name);

          if (this.network.type == 'none') {
            this.getRows()
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

    this.databaseObj.executeSql("SELECT * FROM " + this.table_name, [])
      .then((res) => {

        // alert("res is:-" + JSON.stringify(res));

        this.row_data = [];
        for (var i = 0; i < res.rows.length; i++) {
          this.row_data.push(res.rows.item(i));
        }

        if (this.network.type != 'none') {
          if (res.rows.length >= 0) {


            // delete record here
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

            // Inserted rows here
            for (var i = 0; i < this.profileDetailArr.length; i++) {

              this.databaseObj.executeSql('INSERT INTO ' + this.table_name + ' (userId, title, detail) VALUES ("' + localStorage.getItem('userId') + '","' + this.profileDetailArr[i]['title'] + '","' + this.profileDetailArr[i]['detail'] + '")', [])
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
    this.translate.setDefaultLang(this.selectedLanguage);
    this.translate.use(this.selectedLanguage);
    this.translateConfigService.setLanguage(this.selectedLanguage);
    console.log('this.selectedLanguage offline :' + this.selectedLanguage);

    this.databaseObj.executeSql("SELECT * FROM " + this.table_name, [])
      .then((res) => {
        this.row_data = [];

        if (res.rows.length > 0) {

          this.profileDetailArr = [];

          for (var i = 0; i < res.rows.length; i++) {
            this.row_data.push(res.rows.item(i));
          }

          // alert('this.row_data :-' + JSON.stringify(this.row_data));

          for (var i = 0; i < this.row_data.length; i++) {

            if (this.row_data[i]['userId'] == localStorage.getItem('userId')) {
              this.profileDetailArr.push({
                userId: this.row_data[i]['userId'],
                title: this.row_data[i]['title'],
                detail: this.row_data[i]['detail']
              })
            }
          }
        }
      })
      .catch(e => {
        // alert("Error Is to get Rows:- " + JSON.stringify(e))
      });
  }

}
