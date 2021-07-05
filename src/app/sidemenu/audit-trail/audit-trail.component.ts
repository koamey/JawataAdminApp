import { Component, OnInit } from '@angular/core';
import { DatePipe, Location } from '@angular/common';
import { environment } from 'src/environments/environment';
import { HTTP } from '@ionic-native/http/ngx';
import { MenuService } from 'src/app/services/menu.service';
import { LoadingController, Platform } from '@ionic/angular';
import { TranslateConfigService } from 'src/app/translate-config.service';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Network } from '@ionic-native/network/ngx';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-audit-trail',
  templateUrl: './audit-trail.component.html',
  styleUrls: ['./audit-trail.component.scss'],
})
export class AuditTrailComponent implements OnInit {

  row_data = [];
  databaseObj: SQLiteObject;    // create database instance object
  readonly database_name: any = "Jawata_App.db";  // declare database name
  readonly table_name: string = "auditTrailDetails"; // declare table name

  auditTrailArr;
  uniqueDateArr;
  todaysDate;
  yesterdayDate;

  tempArr = [];
  todaysRecord = [];
  yesterdayRecord = [];
  monthWiseRecord = [];

  loaderLanguage = "";
  heading = this.translateConfigService.get('Audit Trail');
  selectedLanguage = localStorage.getItem('selectedL');

  constructor(public loadingController: LoadingController,
    private datepipe: DatePipe, private http: HTTP,
    private menuService: MenuService, private platform: Platform,
    private translateConfigService: TranslateConfigService,
    private network: Network, private sqlite: SQLite,
    private router: Router, private translate: TranslateService,
    private _location: Location) {

    this.platform.ready().then(() => {

      this.createDB();
      this.todaysDate = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
      let dte = new Date();
      this.yesterdayDate = this.datepipe.transform(dte.setDate(dte.getDate() - 1), 'yyyy-MM-dd')
      //this.showLoader();
      this.getAuditTrailData();
      this.initializeBackButtonCustomHandler();
    }).catch(error => { console.log('audit-trail' + error) });
  }
  ngOnInit() {
    if (localStorage.getItem('routeurlaudit-trail') === null || localStorage.getItem('routeurlaudit-trail') === 'null') {
      localStorage.setItem('routeurlaudit-trail', 'audit-trail');
      localStorage.setItem('routeurl', 'null');
      localStorage.setItem('routeurlsso', 'null');
      localStorage.setItem('routeurlresource-link', 'null');
    }
    /** heading name change after select language */
    this.translate.use(this.selectedLanguage);
    this.translate.get('Activity Log').subscribe((res: string) => {
      this.heading = "";
      this.heading = res;
    });
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
    this.getAuditTrailData();
    event.target.complete();
  }

  getAuditTrailData() {
    //this.showLoader();
    /**For Web API Called Here Here */

    // this.menuService.getAuditTrail(localStorage.getItem('userType'), localStorage.getItem('userId')).subscribe(data => {

    //   this.auditTrailArr = []
    //   this.auditTrailArr = data;

    //   console.log("this.auditTrailArr =", this.auditTrailArr);

    //   this.dismissLodader()
    //   this.todaysRecord = [];
    //   this.yesterdayRecord = [];
    //   this.monthWiseRecord = [];

    //   for (var i = 0; i < this.auditTrailArr.length; i++) {

    //     this.tempArr.push(this.auditTrailArr[i]['activitydate']);

    //     if (this.todaysDate == this.auditTrailArr[i]['activitydate']) {
    //       this.todaysRecord.push(this.auditTrailArr[i]);
    //     } else if (this.yesterdayDate == this.auditTrailArr[i]['activitydate']) {
    //       this.yesterdayRecord.push(this.auditTrailArr[i]);
    //     } else if (this.todaysDate != this.auditTrailArr[i]['activitydate'] && this.yesterdayDate != this.auditTrailArr[i]['activitydate']) {
    //       this.monthWiseRecord.push(this.auditTrailArr[i])
    //     }
    //   }

    //   console.log("this.todaysRecord =", this.todaysRecord);
    //   console.log("yesterdayRecord =", this.yesterdayRecord);
    //   console.log("this.monthWiseRecord =", this.monthWiseRecord);

    //   // get Unique Date Here
    //   this.tempArr = [];
    //   for (var i = 0; i < this.auditTrailArr.length; i++) {
    //     this.tempArr.push(this.datepipe.transform(this.auditTrailArr[i]['activitydate'], 'yyyy-MM'))
    //   }
    //   this.uniqueDateArr = []
    //   this.uniqueDateArr = Array.from(new Set(this.tempArr))
    // })


    var data = {
      'entity_id': localStorage.getItem('entityId'),
      "userType": localStorage.getItem('userType'),
      "userId": localStorage.getItem('userId'),
      "locale": localStorage.getItem('selectedL')
    }

    // alert("Data is :-" + JSON.stringify(data));

    var headers = {
      'Content-Type': 'application/json'
    }
    console.log(`${environment.apiUrl}/api/audit-trails`, JSON.stringify(data));
    this.http.post(`${environment.apiUrl}/api/audit-trails`, data, headers).then(res => {

      // alert("res.data data in audit trail :-" + res.data);

      this.auditTrailArr = [];
      let traildatafortiemzone = [];
      traildatafortiemzone = JSON.parse(res.data) // data received by server
      console.log('Audit trails result traildatafortiemzone :-' + JSON.stringify(traildatafortiemzone));

      if (traildatafortiemzone.length > 0) {

        for (let i = 0; i < traildatafortiemzone.length; i++) {

          let utcDate: Date = new Date(traildatafortiemzone[i]['datetime']);
          let tzOffset: number = new Date().getTimezoneOffset() * 60 * 1000;
          let newTime: number = utcDate.getTime() - tzOffset;
          let localDate: Date = new Date(newTime);
          let auditDate: string = this.datepipe.transform(localDate, 'yyyy-MM-dd HH:mm:ss');
          let sessiontime: string = this.datepipe.transform(localDate, 'HH:mm:ss');
          // let splitstr=traildatafortiemzone[i]['des'].toString();
          // let n=splitstr.split(" ");
          //     console.log('Last word :' +n[n.length - 1]);

          // let sessionstring: string = "";
          // if (traildatafortiemzone[i]['moduleName'] == "Test Session Management") {
          //   sessionstring = traildatafortiemzone[i]['des'].toString() + "<b>" + auditDate + "</b>";
          // }
          // else {
          //   sessionstring = traildatafortiemzone[i]['des'].toString();
          // }

          if (traildatafortiemzone[i]['des'].toString() != "") {
            this.auditTrailArr.push({
              'moduleName': traildatafortiemzone[i]['moduleName'],
              'datetime': auditDate,   // traildatafortiemzone[i]['datetime'],
              'activitydate': traildatafortiemzone[i]['activitydate'],
              'date': traildatafortiemzone[i]['date'],
              'des': traildatafortiemzone[i]['des'] //sessionstring.toString()
            })
          }
        }
        this.insertRow();
      }
    }).catch(error => {
      // alert("Error Get Audit Trail !" + JSON.stringify(error));

      // Loader Dimiss Here
      // this.dismissLodader();
    });
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


  /**Offline App Code Start Here */
  createDB() {
    this.sqlite.create({
      name: this.database_name,
      location: 'default'
    }).then((db: SQLiteObject) => {
      this.databaseObj = db;

      this.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' + this.table_name + ' (id INTEGER PRIMARY KEY AUTOINCREMENT, userId varchar(2), entityId varchar(2), moduleName varchar(2), datetime varchar(2), activitydate varchar(2), date varchar(2), des varchar(2))', []).then(() => {
        // alert('Database Created :-' + this.database_name);
        // alert('Table Created :-' + this.table_name);

        if (this.network.type == 'none') {
          this.getRows()
        }

      }).catch(e => {
        // alert("Error to Create Profile Table !" + JSON.stringify(e))
      });
    }).catch(e => {
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

            // delete rows here
            for (var i = 0; i < this.row_data.length; i++) {

              if (this.row_data[i]['userId'] == localStorage.getItem('userId') && this.row_data[i]['entityId'] == localStorage.getItem('entityId')) {
                this.databaseObj.executeSql(`DELETE FROM ${this.table_name} WHERE userId = ${this.row_data[i]['userId']}`, [])
                  .then((res) => {
                    // alert("Row Deleted :-" + JSON.stringify(res));
                    // this.getRows();
                  })
                  .catch(e => {
                    // alert("error to delete rows " + JSON.stringify(e))
                  });
              }
            }

            // Inserting rows here
            for (var i = 0; i < this.auditTrailArr.length; i++) {

              this.databaseObj.executeSql('INSERT INTO ' + this.table_name + ' (userId, entityId, moduleName, datetime, activitydate, date, des) VALUES ("' +
                localStorage.getItem('userId') + '","' +
                localStorage.getItem('entityId') + '","' +
                this.auditTrailArr[i]['moduleName'] + '","' +
                this.auditTrailArr[i]['datetime'] + '","' +
                this.auditTrailArr[i]['activitydate'] + '","' +
                this.auditTrailArr[i]['date'] + '","' +
                this.auditTrailArr[i]['des'] + '")', [])
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
    this.databaseObj.executeSql("SELECT * FROM " + this.table_name, [])
      .then((res) => {
        this.row_data = [];

        if (res.rows.length > 0) {
          this.auditTrailArr = [];
          this.todaysRecord = [];
          this.yesterdayRecord = [];
          this.monthWiseRecord = [];

          for (var i = 0; i < res.rows.length; i++) {
            this.row_data.push(res.rows.item(i));
          }
          for (var i = 0; i < this.row_data.length; i++) {
            this.auditTrailArr.push(this.row_data[i]);
          }
          this.tempArr = [];
          // this.auditTrailArr.splice(0, 10);

          for (var i = 0; i < this.auditTrailArr.length; i++) {
            if (this.auditTrailArr[i]['userId'] == localStorage.getItem('userId') && this.auditTrailArr[i]['entityId'] == localStorage.getItem('entityId')) {
              /**For showing today's record */
              if (this.todaysDate == this.auditTrailArr[i]['activitydate']) {
                this.todaysRecord.push(this.auditTrailArr[i]);
              }
              /**For showing yesterday's record */
              if (this.yesterdayDate == this.auditTrailArr[i]['activitydate']) {
                this.yesterdayRecord.push(this.auditTrailArr[i]);
              }
              /**For showing monthwise record */
              if (this.todaysDate != this.auditTrailArr[i]['activitydate'] && this.yesterdayDate != this.auditTrailArr[i]['activitydate']) {
                this.monthWiseRecord.push(this.auditTrailArr[i]);
              }
              this.tempArr.push(this.datepipe.transform(this.auditTrailArr[i]['activitydate'], 'yyyy-MM'))
            }
          }

          //this.tempArr = [];
          // get Unique Date Here
          // for (var i = 0; i < this.auditTrailArr.length; i++) {
          //   this.tempArr.push(this.datepipe.transform(this.auditTrailArr[i]['activitydate'], 'yyyy-MM'))
          // }
          this.uniqueDateArr = [];
          this.uniqueDateArr = Array.from(new Set(this.tempArr))
          // console.log('this.uniqueDateArr :-' + JSON.stringify(this.uniqueDateArr));
          // this.dismissLodader();
        }
      }).catch(e => {
        console.log("Error Is to get Rows:- " + JSON.stringify(e));
        // this.dismissLodader();
      });
    // this.dismissLodader();
  }

  doInfinite(event) {
    console.log('event' + event);
    // this.Infinitecall(event,true);
  }

  Infinitecall(event,isLoading) {
    var firstcount = 11; var secondcount = 20;
    this.databaseObj.executeSql("SELECT * FROM " + this.table_name, [])
      .then((res) => {
        this.row_data = [];
        if (res.rows.length > 0) {
          this.auditTrailArr = [];
          this.todaysRecord = [];
          this.yesterdayRecord = [];
          this.monthWiseRecord = [];
          this.uniqueDateArr = [];
          this.tempArr = [];

          for (var i = 0; i < res.rows.length; i++) {
            this.row_data.push(res.rows.item(i));
          }
          for (var i = 0; i < this.row_data.length; i++) {
            this.auditTrailArr.push(this.row_data[i]);
          }

          this.auditTrailArr.splice(firstcount, secondcount);
          console.log('this.auditTrailArr.length :' + this.auditTrailArr.length)
          for (var i = 0; i < this.auditTrailArr.length; i++) {
            if (this.auditTrailArr[i]['userId'] == localStorage.getItem('userId') && this.auditTrailArr[i]['entityId'] == localStorage.getItem('entityId')) {
              /**For showing today's record */
              if (this.todaysDate == this.auditTrailArr[i]['activitydate']) {
                this.todaysRecord.push(this.auditTrailArr[i]);
              }
              /**For showing yesterday's record */
              if (this.yesterdayDate == this.auditTrailArr[i]['activitydate']) {
                this.yesterdayRecord.push(this.auditTrailArr[i]);
              }
              /**For showing monthwise record */
              if (this.todaysDate != this.auditTrailArr[i]['activitydate'] && this.yesterdayDate != this.auditTrailArr[i]['activitydate']) {
                this.monthWiseRecord.push(this.auditTrailArr[i]);
              }
              this.tempArr.push(this.datepipe.transform(this.auditTrailArr[i]['activitydate'], 'yyyy-MM'))
            }
          }
          this.uniqueDateArr = Array.from(new Set(this.tempArr))
          firstcount = firstcount + 30;
          secondcount = secondcount + 30;
          console.log('firstcount :-' + firstcount + '---secondcount :-' + secondcount)
          //console.log('this.uniqueDateArr :-'+ JSON.stringify(this.uniqueDateArr)); 
          // this.dismissLodader();
        }
        event.target.complete();

      }).catch(e => {
        console.log("Error Is to get Rows:- " + JSON.stringify(e));
      });
  }

}
