import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

import { HTTP } from '@ionic-native/http/ngx';
import { Platform, LoadingController, AlertController, NavController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { DatePipe, Location } from '@angular/common';
import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';
import { TranslateConfigService } from 'src/app/translate-config.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  data;
  result = [];
  historyData = [];
  selectedLanguage = localStorage.getItem('selectedL');
  @Input()
  heading = this.translateConfigService.get('History');
  Page: any = 20;

  constructor(private translateConfigService: TranslateConfigService
    , private http: HTTP
    , private datepipe: DatePipe
    , private platform: Platform
    , private changeRef: ChangeDetectorRef
    , public navCtrl: NavController,
    private translate: TranslateService) {

    //alert('constructor call');
    // this.changeRef.detectChanges();
  }

  ngOnInit() {

    localStorage.setItem('nav', 'false') //set storage for update history records
    this.platform.ready().then(() => {
      // alert('History clicked..');
      this.translate.use(this.selectedLanguage);
      this.translate.get('History').subscribe((res: string) => {
        this.heading = "";
        this.heading = res;
        this.GetCheckInData();
      });
    });
  }
  GetInfinityPageData(event,page) {
    // this.result = [];
    // this.result = temp.checkInOutData;
    this.Page=this.Page+15;
    console.log('page', page)
    console.log('this.page',this.Page)
    console.log('this.result.length' + JSON.stringify(this.result));
    if (this.result.length > 0) {
    
      for (let i = page; i < this.Page; i++) {
        if( i < this.result.length)//15<32
        {
        var date = "";
        if (this.result[i]["check_out_date_time"] == null) {
          date = this.utcdateToLocal(this.result[i]["check_in_date_time"]);
          var tempStatus = this.langTransalate('Arrival')
          this.historyData.push({
            "id": this.result[i]["id"],
            "citizenID": this.result[i]["citizen_id"],
            "Name": this.result[i]["firstname"] + " " + this.result[i]["lastname"],
            "checkindate": date,//this.result[i]["check_in_date_time"],
            "arrival": tempStatus
          });

        }
        else {
          if (this.result[i]["check_in_date_time"] != null) {
            date = this.utcdateToLocal(this.result[i]["check_in_date_time"]);
            var tempStatus = this.langTransalate('Arrival')
            this.historyData.push({
              "id": this.result[i]["id"],
              "citizenID": this.result[i]["citizen_id"],
              "Name": this.result[i]["firstname"] + " " + this.result[i]["lastname"],
              "checkindate": date,//this.result[i]["check_in_date_time"],
              "arrival": tempStatus
            });

            if (this.result[i]["check_in_date_time"] != null) {
              date = this.utcdateToLocal(this.result[i]["check_out_date_time"]);
              var tempStatus = this.langTransalate('Departure')
              this.historyData.push({
                "id": this.result[i]["id"],
                "citizenID": this.result[i]["citizen_id"],
                "Name": this.result[i]["firstname"] + " " + this.result[i]["lastname"],
                "checkindate": date,//this.result[i]["check_in_date_time"],
                "arrival": tempStatus
              });

            }

          }
        }
      
        // this.historyData.push({
        //   "id": this.result[i]["id"],
        //   "citizenID": this.result[i]["citizen_id"],
        //   "Name": this.result[i]["firstname"] + " " + this.result[i]["lastname"],
        //   "checkindate": date,//this.result[i]["check_in_date_time"],
        //   // "checkoutdate": this.result[i]["check_out_date_time"],
        //   "arrival": arrival
        // });
      }else{
        event.target.disabled = true;
        return false;
      }
    }
    }

  }
  GetCheckInData() {
    this.platform.ready().then(() => {
      this.data = {
        'entityId': localStorage.getItem('entityId'),
      }
      var headers = {
        'Content-Type': 'application/json',
      }

      console.log(`${environment.apiUrl}/api/check_in_out_view`, JSON.stringify(this.data));
      this.http.post(`${environment.apiUrl}/api/check_in_out_view`, this.data, headers).then(res => {
        console.log("Check In Data:-", JSON.parse(res.data));
        this.result = [];
        this.result = JSON.parse(res.data);
        var temp;
        temp = [];
        temp = JSON.parse(res.data);

        this.result = [];
        this.result = temp.checkInOutData;

        console.log('this.result.length' + JSON.stringify(this.result));
        if (this.result.length > 0) {
          this.historyData = [];
          for (let i = 0; i < this.Page; i++) {
            var date = "";
            if (this.result[i]["check_out_date_time"] == null) {
              date = this.utcdateToLocal(this.result[i]["check_in_date_time"]);
              var tempStatus = this.langTransalate('Arrival')
              this.historyData.push({
                "id": this.result[i]["id"],
                "citizenID": this.result[i]["citizen_id"],
                "Name": this.result[i]["firstname"] + " " + this.result[i]["lastname"],
                "checkindate": date,//this.result[i]["check_in_date_time"],
                "arrival": tempStatus
              });

            }
            else {
              if (this.result[i]["check_in_date_time"] != null) {
                date = this.utcdateToLocal(this.result[i]["check_in_date_time"]);
                var tempStatus = this.langTransalate('Arrival')
                this.historyData.push({
                  "id": this.result[i]["id"],
                  "citizenID": this.result[i]["citizen_id"],
                  "Name": this.result[i]["firstname"] + " " + this.result[i]["lastname"],
                  "checkindate": date,//this.result[i]["check_in_date_time"],
                  "arrival": tempStatus
                });

                if (this.result[i]["check_in_date_time"] != null) {
                  date = this.utcdateToLocal(this.result[i]["check_out_date_time"]);
                  var tempStatus = this.langTransalate('Departure')
                  this.historyData.push({
                    "id": this.result[i]["id"],
                    "citizenID": this.result[i]["citizen_id"],
                    "Name": this.result[i]["firstname"] + " " + this.result[i]["lastname"],
                    "checkindate": date,//this.result[i]["check_in_date_time"],
                    "arrival": tempStatus
                  });

                }

              }
            }

            // this.historyData.push({
            //   "id": this.result[i]["id"],
            //   "citizenID": this.result[i]["citizen_id"],
            //   "Name": this.result[i]["firstname"] + " " + this.result[i]["lastname"],
            //   "checkindate": date,//this.result[i]["check_in_date_time"],
            //   // "checkoutdate": this.result[i]["check_out_date_time"],
            //   "arrival": arrival
            // });
          }
        }
        console.log('this.historyData' + JSON.stringify(this.historyData));
      }).catch(err => {
        console.log('Error', err);
      });
    });

  }
  loadData(event) {
    console.log('event of ion scroll', event)
    setTimeout(() => {
      console.log('Done');
      
      console.log('this.len', this.Page)
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.Page > this.result.length)//21>=20
      {

        console.log('this.page return', this.Page)
        event.target.disabled = true;
        return false;
      } else {
        this.GetInfinityPageData(event,this.Page);
        event.target.complete();
      }
    }, 2000);
  }

  utcdateToLocal(utcdate: any) {
    let utcDate: Date = new Date(utcdate);
    let tzOffset: number = new Date().getTimezoneOffset() * 60 * 1000;
    let newTime: number = utcDate.getTime() - tzOffset;
    let localDate: Date = new Date(newTime);
    return this.datepipe.transform(localDate, 'yyyy-MM-dd HH:mm:ss');

  }


  /**ionViewWillEnter : It’s fired when entering a page, before it becomes the active one. Use it for tasks you want to do every time you enter in the view (setting event listeners, updating a table, etc.). */
  ionViewWillEnter() {
    console.log('ionViewWillEnter history');
    this.GetCheckInData();
    //this.navCtrl.navigateForward(['tablinks/'+localStorage.getItem('selectedtabs')]);
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
