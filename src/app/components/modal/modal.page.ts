import { Component, OnInit, NgZone } from '@angular/core';
import { ModalController, PopoverController, Platform, LoadingController } from '@ionic/angular';
import { MenuService } from 'src/app/services/menu.service';
import { environment } from 'src/environments/environment';
import { HTTP } from '@ionic-native/http/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { TranslateConfigService } from 'src/app/translate-config.service';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Network } from '@ionic-native/network/ngx';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  defaultEntity = '';
  defaultClass = "";
  defaultSubject = "";
  actionList = [];
  defaultAction = "";

  entityArr;
  notificationArr;

  classListArr = [];
  row_data = [];
  notificationDetails = []

  selectedLanguage: string = localStorage.getItem('selectedL');
  updatelangauge: string = 'english';

  // create database instance object
  databaseObj: SQLiteObject;

  // declare database name
  readonly database_name: any = "Jawata_App.db";

  readonly table_actor_entity: string = "actorEntity1";
  readonly table_actorsParentEntity: string = "actorsParentEntity";

  readonly table_ActorClassList: string = "classListActorLogin1";
  readonly table_ActorsParentClassList: string = "classListActorsParentLogin1";
  classListArr1: { name: string; company: string; }[];
  subjectListArr: { name: string; company: string; }[];

  constructor(private popoverCtrl: PopoverController,
    private loadingController: LoadingController,
    private modalCtrl: ModalController,
    private menuService: MenuService, private http: HTTP,
    private translateConfigService: TranslateConfigService,
    private sqlite: SQLite,
    private router: Router, private platform: Platform,
    private zone: NgZone,
    private appcomp: AppComponent,
    private network: Network,
    private translate: TranslateService) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }

  }

  ngOnInit() {
    this.selectedLanguage = localStorage.getItem('selectedL');

    this.defaultEntity = "";
    this.defaultEntity = localStorage.getItem('entityName');
    this.defaultClass = "";
    this.defaultClass = localStorage.getItem('className');



    this.defaultSubject = "";
    this.defaultSubject = localStorage.getItem('subject_name');

    // this.defaultAction = "";
    // this.defaultAction = this.langTransalate(localStorage.getItem('scanAction'));

    this.translate.use(this.selectedLanguage);
    this.translate.get(localStorage.getItem('scanAction').toString()).subscribe((res: string) => {
      this.defaultAction = res;
      console.log('this.defaultAction', this.defaultAction);

    });

    localStorage.setItem('ChangedLang', 'ChangedLang');
    this.getEntityName();
    this.platform.ready().then(() => {
      this.setLanguages();
      this.getScanAction();
      this.getEntityName();
      this.createDB();
      this.createDBActorParent();
      this.createDBClassList();
    });

  }

  languageChanged(value) {
    // set user selected language as default
    if (value != '' && localStorage.getItem('selectedL').toString() != value.toString()) {
      this.translateConfigService.setLanguage(this.selectedLanguage);
      this.updatelangauge = (value == 'en') ? 'english' : ((value == 'fr') ? 'french' : ((value == 'es') ? 'spanish' : (value == 'de') ? 'german' : 'hindi'));
      console.log('this.updatelangauge' + this.updatelangauge);
      localStorage.setItem('selectedL', this.selectedLanguage);
      if (this.network.type != 'none') {
        var data = {
          "user_id": localStorage.getItem('userId'),
          "locale": this.updatelangauge
        }
        var headers = {
          'Content-Type': 'application/json'
        }
        console.log(`${environment.apiUrl}/api/update_profile_language`, JSON.stringify(data));
        this.http.post(`${environment.apiUrl}/api/update_profile_language`, data, headers).then(res => {
          console.log('res :-' + JSON.stringify(res.data));
        }).catch(error => {
          console.log("Error Get language change !" + JSON.stringify(error));

        });
      }

      // Router navigate to dashboard
      this.popoverCtrl.dismiss();
      window.location.reload();
    }
  }

  setLanguages() {
    if (localStorage.getItem('scanActionID') != "") {
      let scanid = localStorage.getItem('scanActionID');
      this.defaultAction = "";
      this.defaultAction = (scanid == "0") ? this.langTransalate('Activated') : this.langTransalate('Deactivated');
    }
  }
  /** start Scan Action */
  getScanAction() {
    /**Bind static json data */
    var activeName = this.langTransalate("Activated");
    var deactiveName = this.langTransalate("Deactivated");
    this.actionList.push({
      "id": 0,
      "name": activeName,
    },
      {
        "id": 1,
        "name": deactiveName,
      });
    if (localStorage.getItem('scanAction') == null) {
      for (var i = 0; i < this.actionList.length; i++) {
        this.defaultAction = this.actionList[0]['name'];
        localStorage.setItem('scanActionID', this.actionList[1]['id']);
        localStorage.setItem('scanAction', this.actionList[0]['name']);
      }
    }
  }
  langTransalate(changeText) {
    var localChnageText = changeText;
    this.translate.use(this.selectedLanguage);
    this.translate.get(changeText).subscribe((res: string) => {
      // this.heading = "";
      // this.heading = res;
      localChnageText = res;
    });
    return localChnageText;
  }

  changeScanAction(value) {
    this.defaultAction = "";
    this.defaultAction = value.trim();
    console.log('this.defaultAction' + this.defaultAction);
    for (var i = 0; i < this.actionList.length; i++) {
      if (value.trim() == this.actionList[i]['name']) {
        localStorage.setItem('scanActionID', this.actionList[i]['id']);
        localStorage.setItem('scanAction', this.actionList[i]['name']);
      }
    }
    window.location.reload(true)
  }
  /** end Scan Action */


  getEntityName() {

    /**Web API code start here */

    // this.menuService.getEntityData(localStorage.getItem('token'), localStorage.getItem('userId')).subscribe(data => {
    //   this.entityArr = [];
    //   this.entityArr = data; // data received by server
    //   console.log("this.entityArr is==", this.entityArr);
    //   // set default entity value here
    //   //this.defaultEntity = this.entityArr[0]['entity_name'];
    // });

    /**Web API code end here */


    if (this.network.type != 'none') {

      if (localStorage.getItem('userType') == 'Manager' || localStorage.getItem('userType') == 'Entity Director') {
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
            this.popoverCtrl.dismiss();
            window.location.reload(true);
          });
        } else {

          this.insertActorEntity();
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

      // this.classListArr = JSON.parse(res.data);
      // console.log('checking686868686', this.classListArr[0]['ref_grade'])
      // console.log('seconde checking', JSON.parse(this.classListArr[0]['ref_grade']))
      // localStorage.setItem('class_id', this.classListArr[0]['class_id']);

      this.getSubject();

    }).catch(error => {
      // alert("getClassName Error Here !" + error);
    });
    // if (this.network.type != 'none') {

    //   if (localStorage.getItem('userType') == 'Actor') {

    //     var data = {
    //       'userid': localStorage.getItem('userId'),
    //       'entityid': localStorage.getItem('entityId')

    //     }
    //   } else if (localStorage.getItem('userType') == "Actor's Parent") {

    //     var data = {
    //       'userid': localStorage.getItem('actorId'),
    //       'entityid': localStorage.getItem('entityId')
    //     }
    //   }

    //   var headers = {
    //     'Content-Type': 'application/json'
    //   }

    //   this.http.post(`${environment.apiUrl}/api/loadClass`, data, headers).then(res => {
    //     this.classListArr = [];
    //     // this.classListArr = JSON.parse(res.data);

    //     if (this.classListArr.length == 0) {
    //       this.translate.use(this.selectedLanguage);
    //       this.translate.get('Please select class or if class is not yet assigned to this account, then contact your entity manager.').subscribe((res: string) => {
    //         alert(res);
    //         //this.popoverCtrl.dismiss();
    //         this.defaultClass = "";
    //         localStorage.removeItem('className');
    //         localStorage.removeItem('class_id');
    //         // localStorage.removeItem('actorName');
    //         // localStorage.removeItem('entityName');
    //         // localStorage.removeItem('loggedinflag');
    //         // window.location.reload(true);
    //       });
    //     }
    //     else {
    //       if (this.defaultClass == '') {
    //         //bydefault set one class
    //         localStorage.setItem('class_id', this.classListArr[0]['class_id']);
    //         // localStorage.setItem('ref_grade', this.classListArr[i]['ref_grade']);
    //         localStorage.setItem('className', this.classListArr[0]['ref_grade']);

    //         this.defaultClass = this.classListArr[0]['ref_grade'];
    //         console.log("classListArr :-", JSON.stringify(this.classListArr));
    //       }
    //       else {
    //         this.defaultClass = localStorage.getItem('className');
    //       }
    //       this.insertClass();
    //     }
    //   }).catch(error => {
    //     // alert("getClassName Error Here !" + error);
    //   });
    // }
  }

  getSubject() {

    var data = {
      'userid': localStorage.getItem('userId'),
      'entityid': localStorage.getItem('entityId'),
      'classid': localStorage.getItem('class_id')
    }
    // console.log('class_id',data)
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
        localStorage.setItem('nav', 'true') //set storage for update history records
        /**Modal Popup Close Here */
        //this.popoverCtrl.dismiss();

        //this.getClass();

        if (this.network.type == 'none') {
          this.getClassOffline();
        }

        window.location.reload(true)
        // navigate to same path
        //this.router.navigated =false;
        //this.OnEntityChangeLoadData();
      }
    };



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
        this.router.navigated = false;
        this.getSubject()
        // window.location.reload(true);
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
        // localStorage.setItem('ref_grade', this.classListArr[i]['ref_grade']);
        // console.log('defaultSubject',this.defaultSubject)
        // console.log('subject_Name',localStorage.getItem('subject_name'))
        /**Modal Popup Close Here */
        // this.popoverCtrl.dismiss();
        this.router.navigated = false;

        // window.location.reload(true);
      }
    }
  }
  onCancel() {
    console.log('entity :-' + this.defaultEntity + ' class :- ' + this.defaultClass + ' --localStorage.getItem(userType)' + localStorage.getItem('userType'));
    //this.popoverCtrl.dismiss();
    if (this.defaultEntity != null && this.defaultClass != '') {
      this.popoverCtrl.dismiss();
    }
  }

  OnEntityChangeLoadData() {
    // subjects
    if (localStorage.getItem('routeurl') == 'subjects') {
      window.location.reload(true);
    }
    //sso
    if (localStorage.getItem('routeurlsso') == 'sso') {
      window.location.reload(true);
    }
    //audit-trail
    if (localStorage.getItem('routeurlaudit-trail') == 'audit-trail') {
      window.location.reload(true);
    }
    // resource-link
    if (localStorage.getItem('routeurlresource-link') == 'resource-link') {
      window.location.reload(true);
    }

    // feedback
    if (localStorage.getItem('routeurlfeedback') == 'feedback') {
      window.location.reload(true);
    }
  }

  changeLanguage() {
    this.popoverCtrl.dismiss();
  }


  /** Offline App code start here */

  createDB() {
    this.sqlite.create({
      name: this.database_name,
      location: 'default'
    }).then((db: SQLiteObject) => {
      this.databaseObj = db;
      this.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' + this.table_actor_entity + ' (uniqueID INTEGER PRIMARY KEY AUTOINCREMENT, userid INTEGER, id INTEGER ,entity_name VARCHAR(200), name_town varchar(2),entity_no varchar(2))', [])
        .then(() => {

          if (this.network.type == 'none' && localStorage.getItem('userType') == 'Actor') {
            this.getActorEntity();
          }
        }).catch(e => {
          // alert("Error to create 'table_actor_entity' table " + JSON.stringify(e))
        });
    }).catch(e => {
      // alert("Error to Database Create:- " + JSON.stringify(e))
    });
  }

  createDBActorParent() {
    this.sqlite.create({
      name: this.database_name,
      location: 'default'
    }).then((db: SQLiteObject) => {
      this.databaseObj = db;
      this.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' + this.table_actorsParentEntity + ' (uniqueID INTEGER PRIMARY KEY AUTOINCREMENT, userid INTEGER, id INTEGER ,entity_name VARCHAR(200), name_town varchar(2), actorId varchar(2),entity_no varchar(2))', [])
        .then(() => {

          if (this.network.type == 'none' && localStorage.getItem('userType') == "Actor's Parent") {
            this.getEntityActorsParent();
          }
        }).catch(e => {
          // alert("Error to create 'table_actorsParentEntity' Table" + JSON.stringify(e))
        });
    }).catch(e => {
      // alert("Error to create 'table_actorsParentEntity' database" + JSON.stringify(e))
    });
  }

  createDBClassList() {
    this.sqlite.create({
      name: this.database_name,
      location: 'default'
    }).then((db: SQLiteObject) => {
      this.databaseObj = db;
      this.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' + this.table_ActorClassList + ' (id INTEGER PRIMARY KEY AUTOINCREMENT, userId INTEGER, entityId vachar(2), class_id INTEGER ,class_reference VARCHAR(200), class_grade varchar(2), ref_grade varchar(2))', [])
        .then(() => {
          if (this.network.type == 'none') {
            this.getClassOffline();
          }
        }).catch(e => {
          // alert("Error to create 'table_ActorClassList' Table :-" + JSON.stringify(e))
        });

      this.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' + this.table_ActorsParentClassList + ' (id INTEGER PRIMARY KEY AUTOINCREMENT, actorId INTEGER, entityId vachar(2), class_id INTEGER ,class_reference VARCHAR(200), class_grade varchar(2), ref_grade varchar(2))', [])
        .then(() => {
        }).catch(e => {
          // alert("Error to create 'table_ActorsParentClassList' Table" + JSON.stringify(e))
        });

    }).catch(e => {
      // alert("Error to create 'ActorClassList ' database :-" + JSON.stringify(e))
    });
  }

  insertActorEntity() {

    if (localStorage.getItem('userType') == "Actor") {

      this.databaseObj.executeSql("SELECT * FROM " + this.table_actor_entity, [])
        .then((res) => {

          // alert("Actor Entity insert time length is:-" + res.rows.length);

          this.row_data = [];
          for (var i = 0; i < res.rows.length; i++) {
            this.row_data.push(res.rows.item(i));
          }

          // alert("this.row_data.length :-" + this.row_data.length);

          for (var i = 0; i < this.row_data.length; i++) {

            if (this.row_data[i]['userid'] == localStorage.getItem('userId')) {

              this.databaseObj.executeSql(`DELETE FROM ${this.table_actor_entity} WHERE userid = ${this.row_data[i]['userid']}`, [])
                .then((res) => {
                  // alert("Row deleted from 'table_actor_entity' Table :-" + JSON.stringify(res));
                })
                .catch(e => {
                  // alert("Error to Delete rows from 'table_actor_entity' table" + JSON.stringify(e))
                });
            }
          }

          for (var i = 0; i < this.entityArr.length; i++) {
            this.databaseObj.executeSql('INSERT INTO ' + this.table_actor_entity + ' (userid , id, entity_name, name_town,entity_no) VALUES ("' + localStorage.getItem('userId') + '","' + this.entityArr[i]['id'] + '","' + this.entityArr[i]['entity_name'] + '","' + this.entityArr[i]['name_town'] + '","' + this.entityArr[i]['entity_no'] + '")', [])
              .then(() => {
                // alert("Row inserted inside of 'table_actor_entity' table :-" + this.table_actor_entity);
              }).catch(e => {
                // alert("Error to insert rows inside of 'table_actor_entity' Table:- " + JSON.stringify(e));
              });
          }
        })
        .catch(e => {
          // alert("Error to Get EntityList Actor Rows:- " + JSON.stringify(e))
        });
    }

    if (localStorage.getItem('userType') == "Actor's Parent") {

      this.databaseObj.executeSql("SELECT * FROM " + this.table_actorsParentEntity, [])
        .then((res) => {

          // alert("Actor's Parent Entity insert time length is:-" + res.rows.length);

          this.row_data = [];
          for (var i = 0; i < res.rows.length; i++) {
            this.row_data.push(res.rows.item(i));
          }

          // alert("this.row_data.length :-" + this.row_data.length);

          for (var i = 0; i < this.row_data.length; i++) {

            if (this.row_data[i]['actorId'] == localStorage.getItem('actorId')) {

              this.databaseObj.executeSql(`DELETE FROM ${this.table_actorsParentEntity} WHERE actorId = ${this.row_data[i]['actorId']}`, [])
                .then((res) => {
                  // alert("Row deleted from 'table_actorsParentEntity' Table:-" + JSON.stringify(res));
                })
                .catch(e => {
                  // alert("Error to Delete rows from 'table_actorsParentEntity' table" + JSON.stringify(e))
                });
            }
          }

          for (var i = 0; i < this.entityArr.length; i++) {
            this.databaseObj.executeSql('INSERT INTO ' + this.table_actorsParentEntity + ' (userid , id, entity_name, name_town, actorId,entity_no) VALUES ("' + localStorage.getItem('userId') + '","' + this.entityArr[i]['id'] + '","' + this.entityArr[i]['entity_name'] + '","' + this.entityArr[i]['name_town']
              + '","' + localStorage.getItem('actorId') + '","' + this.entityArr[i]['entity_no'] + '" )', [])
              .then(() => {
                // alert("Row inseted inside of 'table_actorsParentEntity' Table :-" + this.table_actorsParentEntity);
              }).catch(e => {
                // alert("Error to insert rows inside of 'table_actorsParentEntity' Table:- " + JSON.stringify(e));
              });
          }
        })
        .catch(e => {
          // alert("Error to Get Entity Actor Rows:- " + JSON.stringify(e))
        });
    }
  }

  insertClass() {

    if (localStorage.getItem('userType') == "Actor") {

      this.databaseObj.executeSql("SELECT * FROM " + this.table_ActorClassList, [])
        .then((res) => {

          // alert("class list insert time length is:-" + res.rows.length);

          this.row_data = [];
          for (var i = 0; i < res.rows.length; i++) {
            this.row_data.push(res.rows.item(i));
          }

          // alert("this.row_data.length :-" + this.row_data.length);

          for (var i = 0; i < this.row_data.length; i++) {

            if (this.row_data[i]['userId'] == localStorage.getItem('userId') && this.row_data[i]['entityId'] == localStorage.getItem('entityId')) {

              this.databaseObj.executeSql(`DELETE FROM ${this.table_ActorClassList} WHERE userId = ${this.row_data[i]['userId']}`, [])
                .then((res) => {
                  // alert("Row deleted from 'table_ActorClassList' Table:-" + JSON.stringify(res));
                })
                .catch(e => {
                  // alert("Error to Delete rows from 'table_ActorClassList' table" + JSON.stringify(e))
                });
            }
          }

          for (var i = 0; i < this.classListArr.length; i++) {
            this.databaseObj.executeSql('INSERT INTO ' + this.table_ActorClassList + ' (userId, entityId, class_id, class_reference, class_grade, ref_grade ) VALUES ("' + localStorage.getItem('userId') + '","' + localStorage.getItem('entityId') + '","'
              + this.classListArr[i]['class_id'] + '","' + this.classListArr[i]['class_reference'] + '","' +
              this.classListArr[i]['class_grade'] + '","' + this.classListArr[i]['ref_grade'] + '")', [])
              .then(() => {
                // alert("Row inseted inside of 'table_ActorClassList' Table :-" + this.table_ActorClassList);
              }).catch(e => {
                // alert("Error to insert rows inside of 'table_ActorClassList' Table:- " + JSON.stringify(e));
              });
          }
        })
        .catch(e => {
          // alert("Error to Get classList Actor Rows:- " + JSON.stringify(e))
        });
    } else if (localStorage.getItem('userType') == "Actor's Parent") {

      this.databaseObj.executeSql("SELECT * FROM " + this.table_ActorsParentClassList, [])
        .then((res) => {

          // alert("class list insert time length is:-" + res.rows.length);

          this.row_data = [];
          for (var i = 0; i < res.rows.length; i++) {
            this.row_data.push(res.rows.item(i));
          }

          // alert("this.row_data.length :-" + this.row_data.length);

          for (var i = 0; i < this.row_data.length; i++) {

            if (this.row_data[i]['entityId'] == localStorage.getItem('entityId') && this.row_data[i]['actorId'] == localStorage.getItem('actorId')) {

              this.databaseObj.executeSql(`DELETE FROM ${this.table_ActorsParentClassList} WHERE actorId = ${this.row_data[i]['actorId']}`, [])
                .then((res) => {
                  // alert("Row deleted from 'table_ActorsParentClassList' Table:-" + JSON.stringify(res));
                })
                .catch(e => {
                  // alert("Error to Delete rows from 'table_ActorsParentClassList' table" + JSON.stringify(e))
                });
            }
          }

          for (var i = 0; i < this.classListArr.length; i++) {
            this.databaseObj.executeSql('INSERT INTO ' + this.table_ActorsParentClassList + ' (actorId, entityId, class_id, class_reference, class_grade, ref_grade ) VALUES ("' + localStorage.getItem('actorId') + '","' + localStorage.getItem('entityId') + '","'
              + this.classListArr[i]['class_id'] + '","' + this.classListArr[i]['class_reference'] + '","' +
              this.classListArr[i]['class_grade'] + '","' + this.classListArr[i]['ref_grade'] + '")', [])
              .then(() => {
              }).catch(e => {
              });
          }
        })
        .catch(e => {
          // alert("Error to Get classList Actor Rows:- " + JSON.stringify(e))
        });
    }
  }

  getEntityActorsParent() {

    this.databaseObj.executeSql("SELECT DISTINCT userid , id, entity_name, name_town, actorId,entity_no  FROM " + this.table_actorsParentEntity, [])
      .then((res) => {

        // alert("Actor's Parent Entity list length is:-" + res.rows.length);

        this.entityArr = [];
        this.row_data = [];
        for (var i = 0; i < res.rows.length; i++) {
          this.row_data.push(res.rows.item(i));
        }

        // alert("this.row_data:-" + JSON.stringify(this.row_data));

        console.log("actorId before to get rows :-" + localStorage.getItem('actorId'));
        console.log(" this.row_data Actor's Parent Modal :-" + JSON.stringify(this.row_data));

        for (var i = 0; i < this.row_data.length; i++) {

          if (this.row_data[i]['actorId'] == localStorage.getItem('actorId')) {
            this.entityArr.push(this.row_data[i])
          }
        }
        // alert("this.entityArr.length Actor's Parent :-" + this.entityArr.length);
      })
      .catch(e => {
        // alert("Error to Get Entity Actor's Parent Rows:- " + JSON.stringify(e))
      });
  }

  getClassOffline() {

    if (localStorage.getItem('userType') == "Actor") {

      this.databaseObj.executeSql("SELECT DISTINCT userId, entityId, class_id, class_reference, class_grade, ref_grade FROM " + this.table_ActorClassList, [])
        .then((res) => {

          // alert("offline class list Actor :-" + res.rows.length);

          console.log("res is :-" + JSON.stringify(res.rows));

          if (res.rows.length == 0) {
            this.defaultClass = "";
            localStorage.removeItem('className');
            localStorage.removeItem('class_id');
          }

          this.row_data = [];
          this.classListArr = [];

          for (var i = 0; i < res.rows.length; i++) {
            this.row_data.push(res.rows.item(i));
          }

          // alert("this.row_data.length :-" + this.row_data.length);

          for (var i = 0; i < this.row_data.length; i++) {
            if (this.row_data[i]['userId'] == localStorage.getItem('userId') && this.row_data[i]['entityId'] == localStorage.getItem('entityId')) {
              this.classListArr.push(this.row_data[i])
            }
          }

          if (this.classListArr.length == 0) {
            this.translate.use(this.selectedLanguage);
            this.translate.get('Class is not assigned to this account,please contact your Entity Manager').subscribe((res: string) => {
              alert(res);
              this.popoverCtrl.dismiss();
              this.defaultClass = "";
              localStorage.removeItem('className');
              localStorage.removeItem('class_id');
              localStorage.removeItem('actorName');
              localStorage.removeItem('entityName');
              localStorage.removeItem('loggedinflag');
              window.location.reload(true);
            });
          }

          // alert("this.classListArr.length :-" + this.classListArr.length);
        })
        .catch(e => {
          // alert("Error to Get classList Actor Rows:- " + JSON.stringify(e))
        });
    } else if (localStorage.getItem('userType') == "Actor's Parent") {

      this.databaseObj.executeSql("SELECT DISTINCT  actorId, entityId, class_id, class_reference, class_grade, ref_grade FROM " + this.table_ActorsParentClassList, [])
        .then((res) => {

          // alert("offline class list Actor's Parent :-" + res.rows.length);

          if (res.rows.length == 0) {
            this.defaultClass = "";
            localStorage.removeItem('className');
          }

          this.row_data = [];
          this.classListArr = [];

          for (var i = 0; i < res.rows.length; i++) {
            this.row_data.push(res.rows.item(i));
          }

          // alert("this.row_data:-" + JSON.stringify(this.row_data));

          for (var i = 0; i < this.row_data.length; i++) {

            if (this.row_data[i]['actorId'] == localStorage.getItem('actorId') && this.row_data[i]['entityId'] == localStorage.getItem('entityId')) {
              this.classListArr.push(this.row_data[i])
            }
          }

          // alert("this.classListArr.length Actor's Parent:-" + this.classListArr.length);


          if (this.classListArr.length == 0) {
            this.translate.use(this.selectedLanguage);
            this.translate.get('Class is not assigned to this account,please contact your Entity Manager').subscribe((res: string) => {
              alert(res);
              this.popoverCtrl.dismiss();
              this.defaultClass = "";
              localStorage.removeItem('className');
              localStorage.removeItem('class_id');
              localStorage.removeItem('actorName');
              localStorage.removeItem('entityName');
              localStorage.removeItem('loggedinflag');
              window.location.reload(true);
            });
          }
        })
        .catch(e => {
          // alert("Error to Get classList Actor's Parent Rows :-" + JSON.stringify(e))
        });
    }
  }

  getActorEntity() {

    this.databaseObj.executeSql("SELECT DISTINCT userid , id, entity_name, name_town,entity_no  FROM " + this.table_actor_entity, [])
      .then((res) => {

        // alert("Actor Entity list length is:-" + res.rows.length);

        this.row_data = [];
        this.entityArr = [];

        for (var i = 0; i < res.rows.length; i++) {
          this.row_data.push(res.rows.item(i));
        }

        // alert("this.row_data:-" + JSON.stringify(this.row_data));

        console.log(" this.row_data Actor Modal :-" + JSON.stringify(this.row_data));
        for (var i = 0; i < this.row_data.length; i++) {
          console.log("this.row_data.length :-" + this.row_data.length + '//this.row_data[i][userid] :-' + this.row_data[i]['userid']);
          if (this.row_data[i]['userid'] == localStorage.getItem('userId')) {
            // console.log('this.row_data[i] ' , JSON.stringify(this.row_data[i]));
            this.entityArr.push(this.row_data[i])
          }
        }
        console.log('this.entityArr' + JSON.stringify(this.entityArr));
        // alert("EntityArr.length is :-" + this.entityArr.length);
      })
      .catch(e => {
        // alert("Error Is to get Rows:- " + JSON.stringify(e))
      });

  }

}



