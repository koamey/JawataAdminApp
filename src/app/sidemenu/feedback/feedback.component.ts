import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Platform, LoadingController, PopoverController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { HTTP } from '@ionic-native/http/ngx';
import { Router } from '@angular/router';
import { TranslateConfigService } from 'src/app/translate-config.service';
import { Location, DatePipe } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { Network } from '@ionic-native/network/ngx';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements OnInit {

  feedbackArr = [];
  feedbackText: string = "";//input field

  today = new Date();
  heading = this.translateConfigService.get('Feedback');

  row_data = [];
  databaseObj: SQLiteObject;//database instance object
  readonly database_name: string = "jawata_datatable.db";//DB name

  readonly feedbackTable_Name = "feedbackListStored" // Declare table name here

  selectedLanguage = localStorage.getItem('selectedL');
  loaderLanguage = "";

  feedbackForm: FormGroup;
  isSubmitted = false;
  tempArr;

  constructor(
    private router: Router,
    private menuService: MenuService,
    private nativestorage: NativeStorage,
    private sqlite: SQLite,
    private platform: Platform,
    private http: HTTP,
    private translateConfigService: TranslateConfigService,
    private loadingController: LoadingController,
    private _location: Location,
    public popoverCtrl: PopoverController,
    private translate: TranslateService, private datepipe: DatePipe,
    private network: Network, private formBuilder: FormBuilder
  ) {

    this.platform.ready().then(() => {
      this.createDB();
      this.getFeedbackData();
      this.initializeBackButtonCustomHandler();
    }).catch(error => { console.log('getfeedback' + error) });
  }

  ngOnInit() {

    this.feedbackForm = this.formBuilder.group({
      // feedbackText: ['', [Validators.required, Validators.pattern('[A-Za-z\d!$%@#£€*?&]')]]
      feedbackText: ['', [Validators.required]]
    })

    /** heading name change after select language */
    this.translate.use(this.selectedLanguage);
    this.translate.get('Contact customer support').subscribe((res: string) => {
      this.heading = "";
      this.heading = res;
    });
    if (localStorage.getItem('routeurlfeedback') === null || localStorage.getItem('routeurlfeedback') === 'null') {
      localStorage.setItem('routeurlfeedback', 'feedback');
      localStorage.setItem('routeurl', 'null');
      localStorage.setItem('routeurlaudit-trail', 'null');
      localStorage.setItem('routeurlthird-party', 'null');
      localStorage.setItem('routeurlsso', 'null');
      localStorage.setItem('routeurlfeedback', 'null');
    }
  }

  initializeBackButtonCustomHandler(): void {
    this.platform.backButton.subscribeWithPriority(999990, () => {
      if (localStorage.getItem('currenturl').toString().split('/')[1] == 'dashboard') {
        navigator['app'].exitApp();
      }
      else {
        this._location.back();
        this.dismissLodader();
        //this.router.navigate([localStorage.getItem('bckbtnpage').toString().split('/')[1]]);
      }
    });
  }

  get errorControl() {
    return this.feedbackForm.controls;
  }

  doRefresh(event) {
    this.getFeedbackData();
    event.target.complete();
  }

  getFeedbackData() {

    /**Web API Called Here */

    // this.menuService.getFeedback(localStorage.getItem('language'), localStorage.getItem('userId'), localStorage.getItem('entityId'), localStorage.getItem('userType')).subscribe(data => {

    //   var temp
    //   temp = [];
    //   temp = data;

    //   for (var i = 0; i < temp.length; i++) {
    //     this.feedbackArr.push({
    //       "id": temp[i]['id'],
    //       "feedbackDate": temp[i]['feedbackDate'] + '   ' + 'UTC',
    //       "feedbackText": temp[i]['feedbackText'],
    //       "Message": temp[i]['Message']
    //     })
    //   }
    // })

    var data = {
      'locale': localStorage.getItem('selectedL'),
      'userId': localStorage.getItem('userId'),
      'entityId': localStorage.getItem('entityId'),
      'userType': localStorage.getItem('userType')
    }

    // alert("data :-" + JSON.stringify(data));

    var headers = {
      'Content-Type': 'application/json'
    }
console.log(`${environment.apiUrl}/api/feedback`,JSON.stringify(data));
    this.http.post(`${environment.apiUrl}/api/feedback`, data, headers).then(res => {

      // alert("res.data Get feedback :-" + JSON.parse(res.data.length))

      this.tempArr = [];
      this.tempArr = JSON.parse(res.data);
console.log('api response api/feedback :'+ JSON.stringify(this.tempArr));
      this.feedbackArr = [];

      for (var i = 0; i < this.tempArr.length; i++) {
        let utcDate: Date = new Date(this.tempArr[i]['feedbackDate']);
        let tzOffset: number = new Date().getTimezoneOffset() * 60 * 1000;
        let newTime: number = utcDate.getTime() - tzOffset;
        let localDate: Date = new Date(newTime);
        let grademyDate = this.datepipe.transform(localDate, 'yyyy-MM-dd HH:mm:ss');

        this.feedbackArr.push({
          "id": this.tempArr[i]['id'],
          "feedbackDate": grademyDate, //this.tempArr[i]['feedbackDate'] + '   ' + 'UTC',
          "feedbackText": this.tempArr[i]['feedbackText'],
          "Message": this.tempArr[i]['Message']
        })
      }

      this.insertRow();

      // Dismiss Loader Here
      this.dismissLodader();
    }).catch(error => {
      //alert("Error In Get Feedback Data !");

      // Dismiss Loader Here
      this.dismissLodader();
    });
  }

  submitFeedback() {

    this.isSubmitted = true;

    if (!this.feedbackForm.valid) {
      return false;
    } else {

      // this.menuService.insertFeedback(localStorage.getItem('selectedL'), localStorage.getItem('entityId'), localStorage.getItem('userId'), this.feedbackText, localStorage.getItem('userType')).subscribe(data => {
      //   this.getFeedbackData();
      // });

      if (this.network.type != "none") {

        var data = {
          'locale': localStorage.getItem('selectedL'),
          'entityId': localStorage.getItem('entityId'),
          'userid': localStorage.getItem('userId'),
          'feedback_txt': this.feedbackText,
          'userType': localStorage.getItem('userType')
        }

        // alert("Submit time data is :-" + JSON.stringify(data));
        var headers = {
          'Content-Type': 'application/json'
        }
        // Loader true Here
        this.showLoader();
console.log(`${environment.apiUrl}/api/insertFeedback`, JSON.stringify(data));
        this.http.post(`${environment.apiUrl}/api/insertFeedback`, data, headers).then(res => {

          // alert("res.data Submit feedback :-" + res.data);

          var temp = JSON.parse(res.data);
          this.dismissLodader();

          alert(temp.message);

          this.isSubmitted = false;


          this.getFeedbackData();
          this.feedbackText = "";
          this.dismissLodader();
        }).catch(error => {
          //alert("Feedback Submit Error !");

          // Dismiss Loader Here
          this.dismissLodader();
        });

      } else {
        this.translate.use(this.selectedLanguage);
        this.translate.get('Before you submit Contact customer support, Please connect to internet connection').subscribe((res) => {
          alert(res);
        });
      }
    }
  }

  async showLoader() {

    this.translate.use(this.selectedLanguage);
    this.translate.get('Sending').subscribe((res: string) => {

      this.loaderLanguage = "";
      this.loaderLanguage = res;
    });

    return await this.loadingController.create({
      message: this.loaderLanguage + ' ....',
      duration: 20000,
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
      });
    });
  }

  async dismissLodader() {
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }


  /**Offline App Code Start Here */

  createDB() {
    this.sqlite.create({
      name: this.database_name,
      location: 'default'
    }).then((db: SQLiteObject) => {
      this.databaseObj = db;
      this.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' + this.feedbackTable_Name + ' (id INTEGER PRIMARY KEY AUTOINCREMENT, userId varchar(2), entityId varchar(2), feedbackDate varchar(2), feedbackText varchar(2))', [])
        .then(() => {
          // alert('Database Created :-' + this.database_name);
          // alert('Table Created :-' + this.feedbackTable_Name);

          if (this.network.type == 'none') {
            this.getRows();
          }
        })
        .catch(e => {
          // alert("Error to Create feedback Table !" + JSON.stringify(e))
        });
    })
      .catch(e => {
        // alert("Error to Database Create ! " + JSON.stringify(e))
      });
  }

  insertRow() {

    this.databaseObj.executeSql("SELECT * FROM " + this.feedbackTable_Name, [])
      .then((res) => {

        // alert("res is:-" + JSON.stringify(res));

        this.row_data = [];
        for (var i = 0; i < res.rows.length; i++) {
          this.row_data.push(res.rows.item(i));
        }
        // delete rows here
        for (var i = 0; i < this.row_data.length; i++) {

          if (this.row_data[i]['userId'] == localStorage.getItem('userId') && this.row_data[i]['entityId'] == localStorage.getItem('entityId')) {

            this.databaseObj.executeSql(`DELETE FROM ${this.feedbackTable_Name} WHERE userId = ${this.row_data[i]['userId']}`, [])
              .then((res) => {
                // alert("Row Deleted :-" + JSON.stringify(res));
              })
              .catch(e => {
                // alert("error to delete rows " + JSON.stringify(e))
              });
          }
        }

        // alert("this.feedbackArr :-" + JSON.stringify(this.feedbackArr));

        // Inserting rows here

        for (var i = 0; i < this.feedbackArr.length; i++) {
          this.databaseObj.executeSql('INSERT INTO ' + this.feedbackTable_Name +
            '(userId, entityId, feedbackDate, feedbackText) VALUES ("' +
            localStorage.getItem('userId') + '","' +
            localStorage.getItem('entityId') + '","' +
            this.feedbackArr[i]['feedbackDate'] + '","' +
            this.feedbackArr[i]['feedbackText'] + '")', [])
            .then(() => {
              // alert('Row Inserted!' + this.feedbackTable_Name);
            })
            .catch(e => {
              // alert("Error Is insert Rows:- " + JSON.stringify(e))
            });
        }

      })
      .catch(e => {
        // alert("Error Is to get Rows:- " + JSON.stringify(e))
      });
  }

  getRows() {

    this.databaseObj.executeSql("SELECT * FROM " + this.feedbackTable_Name, [])
      .then((res) => {

        // alert("res is :-" + JSON.stringify(res));

        this.row_data = [];

        if (res.rows.length > 0) {

          this.feedbackArr = [];
          for (var i = 0; i < res.rows.length; i++) {
            this.row_data.push(res.rows.item(i));
          }

          for (var i = 0; i < this.row_data.length; i++) {

            if (this.row_data[i]['userId'] == localStorage.getItem('userId') && this.row_data[i]['entityId'] == localStorage.getItem('entityId')) {
              this.feedbackArr.push(this.row_data[i])
            }
          }
        }
      })
      .catch(e => {
        // alert("Error Is to get Rows:- " + JSON.stringify(e))
      });
  }

}
