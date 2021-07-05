import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { environment } from 'src/environments/environment';
import { HTTP } from '@ionic-native/http/ngx';
import { TranslateConfigService } from 'src/app/translate-config.service';
import { Platform } from '@ionic/angular';
import { Router, RoutesRecognized } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { Network } from '@ionic-native/network/ngx';
import { NetworkInterface } from '@ionic-native/network-interface/ngx';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { SQLiteObject, SQLite } from '@ionic-native/sqlite/ngx';

@Component({
  selector: 'app-resource-link',
  templateUrl: './resource-link.component.html',
  styleUrls: ['./resource-link.component.scss'],
})
export class ResourceLinkComponent implements OnInit {

  heading = this.translateConfigService.get('Resources with Open Access');

  thirdPartyDetails = [];
  filter = "";
  keysToExclude: any[] = ['tps_id', 'entity_name', 'tps_description', 'tps_url']
  notificationArr;
  notificationDetails = [];
  selectedLanguage = localStorage.getItem('selectedL');
  deviceid = "";
  IPAddress = "";

  row_data = [];
  databaseObj: SQLiteObject;//database instance object

  readonly database_name: string = "Jawata_App.db";//DB name
  readonly table_name: string = "ResourceData"; // Table 

  constructor(private platform: Platform, private menuService: MenuService,
    private http: HTTP, private translateConfigService: TranslateConfigService,
    private router: Router, private networkInterface: NetworkInterface, private network: Network,
    private _location: Location, private sqlite: SQLite,
    private translate: TranslateService,
    private uniqueDeviceID: UniqueDeviceID) {

    this.platform.ready().then(() => {
      this.createDB();
      this.initializeBackButtonCustomHandler();
      this.getData();
      this.getIPAddress();
      this.getuniqueDeviceID();
    }).catch(error => { console.log('resource-link' + error) });
  }

  ngOnInit() {

    if (localStorage.getItem('routeurlresource-link') === null || localStorage.getItem('routeurlresource-link') === 'null') {
      localStorage.setItem('routeurlresource-link', 'resource-link');
      localStorage.setItem('routeurl', 'null');
      localStorage.setItem('routeurlsso', 'null');
      localStorage.setItem('routeurlaudit-trail', 'null');
      localStorage.setItem('routeurlfeedback', 'null');
    }

    /** heading name change after select language */
    this.translate.use(this.selectedLanguage);
    this.translate.get('Resources with Open Access').subscribe((res: string) => {
      this.heading = "";
      this.heading = res;
    });
  }

  initializeBackButtonCustomHandler(): void {
    this.platform.backButton.subscribeWithPriority(999990, () => {
      //alert('third party :'+ this.router.url+' --backurl--'+localStorage.getItem('bckbtnpage'));
      if (localStorage.getItem('currenturl').toString().split('/')[1] == 'dashboard') {
        navigator['app'].exitApp();
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
    this.getData();
    event.target.complete();
  }

  getData() {

    /**For Web API Called Here */
    // this.menuService.getThirdParty(localStorage.getItem('entityId'), localStorage.getItem('userId')).subscribe(data => {
    //   this.thirdPartyDetails = []
    //   this.thirdPartyDetails = data;
    // })

    var data = {
      'userId': localStorage.getItem('userId'),
      'entityId': localStorage.getItem('entityId')
    }

    var headers = {
      'Content-Type': 'application/json'
    }

    // alert("JSON.stringify(data) :-" + JSON.stringify(data));

    this.http.post(`${environment.apiUrl}/api/third-party`, data, headers).then(res => {

      var tempArr
      tempArr = [];
      tempArr = JSON.parse(res.data)

      this.thirdPartyDetails = []

      for (var i = 0; i < tempArr.length; i++) {
        this.thirdPartyDetails.push(tempArr[i])
      }

      this.insertRow();

    }).catch(error => {
      // alert("Error In Get Third Party !");
    });
  }

  onClickOpenURL(tps_id, resource_url) {
    if (this.deviceid == undefined) {
      this.platform.ready().then(() => {
        this.getuniqueDeviceID();
      }).catch(error => { console.log('resource-link' + error) });
    }
    else {

      if (this.IPAddress != "") {
        localStorage.removeItem('IpAddress');
        localStorage.setItem('IpAddress', this.IPAddress);
      } else if (this.IPAddress == "") {
        localStorage.getItem('IpAddress');
      }

      var data = {
        "user_id": localStorage.getItem('userId'),
        "action_id": tps_id,
        "userType": localStorage.getItem('userType'),
        "entity_id": localStorage.getItem('entityId'),
        "deviceid": this.deviceid,
        "ip_address": localStorage.getItem('IpAddress')
      }
      var headers = {
        'Content-Type': 'application/json'
      }
      console.log(`${environment.apiUrl}/api/resource_log`, data);
      if (this.network.type == 'none') {
        this.translate.use(this.selectedLanguage);
        this.translate.get('Before to accessing this Resources with Open Access, Please connect internet connection').subscribe((res) => {
          alert(res);
        });
      } else {

        this.http.post(`${environment.apiUrl}/api/resource_log`, data, headers).then(res => {

          // alert("resource_log res is :-" + res);
          window.open(resource_url);
        }).catch(error => {
          // alert("error resource_log Access :- " + JSON.stringify(error));
        });
      }
    }
  }

  trimSearchValues(value) {
    this.filter = value.trim();
  }


  /**Offline App Code Start Here */

  createDB() {
    this.sqlite.create({
      name: this.database_name,
      location: 'default'
    }).then((db: SQLiteObject) => {
      this.databaseObj = db;
      this.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' + this.table_name + ' (id INTEGER PRIMARY KEY AUTOINCREMENT,userId varchar(2), entityId varchar(2), tps_id varchar(2), tps_name varchar(2), tps_url varchar(2))', [])
        .then(() => {
          // alert('Database Created :-' + this.database_name);
          // alert('Table Created :-' + this.table_name);

          if (this.network.type == 'none') {
            this.getRows();
          }
        })
        .catch(e => {
          alert("Error to Create Profile Table !" + JSON.stringify(e))
        });
    })
      .catch(e => {
        alert("Error to Database Create ! " + JSON.stringify(e))
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
                  })
                  .catch(e => {
                    alert("error to delete rows " + JSON.stringify(e))
                  });
              }
            }

            // Inserting rows here
            for (var i = 0; i < this.thirdPartyDetails.length; i++) {
              this.databaseObj.executeSql('INSERT INTO ' + this.table_name + ' (userId, entityId, tps_id, tps_name, tps_url ) VALUES ("' + localStorage.getItem('userId') + '","' + localStorage.getItem('entityId') + '","' + this.thirdPartyDetails[i]['tps_id'] + '","' + this.thirdPartyDetails[i]['tps_name'] + '","' + this.thirdPartyDetails[i]['tps_url'] + '")', [])
                .then(() => {
                  // alert('Row Inserted!' + this.table_name);
                  this.getRows();
                })
                .catch(e => {
                  alert("Error Is insert Rows:- " + JSON.stringify(e))
                });
            }
          }
        }
      })
      .catch(e => {
        alert("Error Is to get Rows:- " + JSON.stringify(e))
      });
  }

  getRows() {

    this.databaseObj.executeSql("SELECT * FROM " + this.table_name, [])
      .then((res) => {

        // alert("res is :-" + JSON.stringify(res));

        this.row_data = [];

        if (res.rows.length > 0) {
          this.thirdPartyDetails = [];
          for (var i = 0; i < res.rows.length; i++) {
            this.row_data.push(res.rows.item(i));
          }

          for (var i = 0; i < this.row_data.length; i++) {

            if (this.row_data[i]['userId'] == localStorage.getItem('userId') && this.row_data[i]['entityId'] == localStorage.getItem('entityId')) {
              this.thirdPartyDetails.push(this.row_data[i])
            }
          }
        }
      })
      .catch(e => {
        alert("Error Is to get Rows:- " + JSON.stringify(e))
      });
  }

}
