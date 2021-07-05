import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController, Platform } from '@ionic/angular';
import { MenuService } from 'src/app/services/menu.service';
import { environment } from 'src/environments/environment';
import { HTTP } from '@ionic-native/http/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { TranslateConfigService } from 'src/app/translate-config.service';
import { Router } from '@angular/router';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { TranslateService } from '@ngx-translate/core';
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-entitymodal',
  templateUrl: './entitymodal.page.html',
  styleUrls: ['./entitymodal.page.scss'],
})
export class EntitymodalPage implements OnInit {

  selectedLanguage = localStorage.getItem('selectedL');
  defaultEntity = '';
  entityArr;
  
  row_data = [];
  actorList = [];
  notificationDetails = []

  defaultActor = "";
  hideActorDropdown = false;
  name: string = '';
  notificationArr;
  classListArr;
  defaultClass = "";
  isclassload = "";

  // create database instance object
  databaseObj: SQLiteObject;
  // declare database name
  readonly database_name: any = "Jawata_App.db";
  readonly table_name: string = "tbluserentity";
  readonly table_nameactor: string = "actorListTable";
  readonly table_name_EntityList: string = "actorsParentEntity";

  readonly table_classListActor: string = "classListActor";
  readonly table_classListActorsParent: string = "classListActorsParent";

  constructor(private popoverCtrl: PopoverController,
    private modalCtrl: ModalController,
    private menuService: MenuService, private http: HTTP,
    private translateConfigService: TranslateConfigService,
    private sqlite: SQLite, private router: Router,
    private localNotifications: LocalNotifications,
    private translate: TranslateService,
    private network: Network,
    private platform: Platform) {

  }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.createDB();
      this.createDBClassList();
      this.isclassload = "false";
      this.defaultEntity = "";
      this.defaultEntity = localStorage.getItem('entityName');

      if (localStorage.getItem('userType') == "Actor's Parent") {
        this.createDBActorList();
        this.getActorName();
        this.hideActorDropdown = true;
      }
      else if (localStorage.getItem('userType') == "Manager") {
        this.getEntityName();
      }
    
      this.getEntityName();
    });
    
  }

  getActorName() {

    if (this.network.type != 'none') {
      var data = {
        'userId': localStorage.getItem('userId')
      }
      var headers = {
        'Content-Type': 'application/json'
      }
      console.log(`${environment.apiUrl}/api/load_actor`, JSON.stringify(data));
      this.http.post(`${environment.apiUrl}/api/load_actor`, data, headers).then(res => {
        this.actorList = [];
        this.actorList = JSON.parse(res.data);
        console.log('this.actorList', JSON.stringify(this.actorList));

        if (this.actorList.length == 0) {
          this.translate.use(this.selectedLanguage);
          this.translate.get('The Child is not assigned to this Account,Please contact to your Entity Manager').subscribe((res: string) => {
            alert(res);
            this.popoverCtrl.dismiss();
            localStorage.removeItem('loggedinflag');
            window.location.reload(true);
          });
        }
        else {
          if (this.actorList.length > 0) {
            if (this.actorList.length == 1)
              this.defaultActor = this.actorList[0]['name'];
            if (this.defaultActor != '') {
              this.getEntityName();
            }
            //check for dupliate records and if not then insert the new user details in sqllite table
            this.platform.ready().then(() => {
              this.sqlite.create({
                name: this.database_name,
                location: 'default'
              }).then((db: SQLiteObject) => {
                this.databaseObj = db;
                this.databaseObj.executeSql("SELECT * FROM " + this.table_nameactor + " WHERE userid=?", [localStorage.getItem('userId')]).then((result) => {
                  // alert('Actor Result result +' + result.rows.length + '-- userIdVar' + localStorage.getItem('userId'));
                  if (result.rows.length == 0) {
                    this.insertactor();
                  }
                  else {
                    this.databaseObj.executeSql("DELETE FROM " + this.table_nameactor + " WHERE userid=?", [localStorage.getItem('userId')]).then((res) => {
                      // alert('attorlist deleted...');
                      this.insertactor();
                    });
                  }
                });
              }).catch(e => {
                //alert("Error to Database Create ! " + JSON.stringify(e))
              });
            });
          }
        }
      }).catch(error => {
        // alert("getActorName Error Here !");
      });
    }
  }

  changeActor(value) {

    this.defaultActor = "";
    this.defaultActor = value.trim();

    for (var i = 0; i < this.actorList.length; i++) {

      if (value.trim() == this.actorList[i]['name']) {
        localStorage.setItem('actorId', this.actorList[i]['id']);
        localStorage.setItem('class_id', this.actorList[i]['class_id']);
        localStorage.setItem('actorName', this.actorList[i]['firstname'])
        this.getEntityName();
      }
    }
  }

  getEntityName() {

    /**For Web API called Here */
    // this.menuService.getEntityData(localStorage.getItem('token'), localStorage.getItem('userId')).subscribe(data => {
    //   this.entityArr = [];
    //   this.entityArr = data; // data received by server
    //   console.log("this.entityArr is==", this.entityArr);
    //   // set default entity value here
    //   //this.defaultEntity = this.entityArr[0]['entity_name'];
    // });

    if (this.network.type != 'none') {

      if (localStorage.getItem('userType') == 'Manager' ||localStorage.getItem('userType') == 'Entity Director') {
        var data = {
          'APuserId': 'null',
          'token': localStorage.getItem('token'),
          'userId': localStorage.getItem('userId')
        }
      } else if (localStorage.getItem('userType') == "Actor's Parent") {
        var data = {'APuserId': localStorage.getItem('userId'),'token': localStorage.getItem('token'),
          'userId': localStorage.getItem('actorId')        }
      }
      var headers = {
        'Content-Type': 'application/json'
      }

      console.log(`${environment.apiUrl}/api/entityPopup`, JSON.stringify(data));
      this.http.post(`${environment.apiUrl}/api/entityPopup`, data, headers).then(res => {

        this.entityArr = [];

        this.entityArr = JSON.parse(res.data); // data received by server
        console.log('api/entityPopup :-' + JSON.stringify(this.entityArr));
        if (this.entityArr.length == 0) {
          this.translate.use(this.selectedLanguage);
          this.translate.get('Entity is not assigned to this account,please contact your Entity Manager').subscribe((res: string) => {
            alert(res);
            this.popoverCtrl.dismiss();
            window.location.reload(true);
          });
        } else {
          if (this.entityArr.length == 1)
            this.defaultEntity = this.entityArr[0]['name_town'];

          this.insertEntityList();
          // if (this.defaultEntity != null) {
          //   this.getClass();
          // }
        }

        /**last loin actor automatic select entity */
        // alert('entityName' + localStorage.getItem('entityName')+'-'+ localStorage.getItem('entityId') +'==' + localStorage.getItem('lastloggedinentityId')+'-'+ localStorage.getItem('lastloggedinentityName'));
        //   if (localStorage.getItem('userType') == 'Actor') {
        //     if (localStorage.getItem('userId') == localStorage.getItem('lastloggedinuserid')) {
        //     this.defaultEntity = localStorage.getItem('lastloggedinentityName');
        //   }
        // }

      }).catch(error => {
        console.log("getEntityName Error Here !" + JSON.stringify(error));
      });
    } else if (this.network.type == 'none') {
      this.getEntityActorsParent()
    }
  }

  getClass() {
    console.log('getClass()' + localStorage.getItem('userType') + '/' + this.network.type);

    if (this.network.type != 'none') {
      this.platform.ready().then(() => {
        if (localStorage.getItem('userType') == 'Actor') {
          var data = {
            'userid': localStorage.getItem('userId'),
            'entityid': localStorage.getItem('entityId')
          }
        } else if (localStorage.getItem('userType') == "Actor's Parent") {
          var data = {
            'userid': localStorage.getItem('actorId'),
            'entityid': localStorage.getItem('entityId')
          }
        }
        var headers = { 'Content-Type': 'application/json' }
        this.isclassload = 'true';
        console.log('this.isclassload:-' + this.isclassload + `${environment.apiUrl}/api/loadClass`, JSON.stringify(data));
        this.http.post(`${environment.apiUrl}/api/loadClass`, data, headers).then(res => {
          this.classListArr = [];
          this.classListArr = JSON.parse(res.data);
          console.log("classListArr :-", JSON.stringify(this.classListArr));

          if (this.classListArr.length == 0) {
            this.translate.use(this.selectedLanguage);
            this.translate.get('Class is not assigned to this account,please contact your Entity Manager').subscribe((res: string) => {
              alert(res);
              this.popoverCtrl.dismiss();
              localStorage.removeItem('actorName');
              localStorage.removeItem('entityName');
              localStorage.removeItem('loggedinflag');
              window.location.reload(true);
            });
          }
          console.log('this.classListArr.length getClass():-' + this.classListArr.length)
          this.insertClass();
          if (this.classListArr.length == 1)
            this.defaultClass = this.classListArr[0]['ref_grade'];
        }).catch(error => {
          // alert("getClassName Error Here !" + error);
        });
      });
    }
  }

  onCancel() {
    console.log('oncancel actor :- ' + this.defaultActor + 'entity :-' + this.defaultEntity + ' class :- ' + this.defaultClass + ' --localStorage.getItem(userType)' + localStorage.getItem('userType'));
    if (localStorage.getItem('userType') == "Actor's Parent") {
      if (this.defaultActor != '' && this.defaultEntity != null && this.defaultClass != '') {
        this.popoverCtrl.dismiss();
      }
    }
    else {
      if (this.defaultEntity != null && this.defaultClass != '') {
        this.popoverCtrl.dismiss();
      }
    }
  }

  changeClass(value) {

    this.defaultClass = "";
    this.defaultClass = value.trim();

    for (var i = 0; i < this.classListArr.length; i++) {

      if (this.defaultClass == this.classListArr[i]['ref_grade']) {

        /**set classId to localStorage */
        localStorage.setItem('class_id', this.classListArr[i]['class_id']);
        localStorage.setItem('className', this.classListArr[i]['ref_grade']);

        /**Modal Popup Close Here */
        this.popoverCtrl.dismiss();

        /**App refreshing here */
        window.location.reload(true);
      }
    }
  }

  changeEntity(value) {
    localStorage.removeItem('className');
    localStorage.removeItem('class_id');//class_id    
    localStorage.removeItem('subject_id');
    localStorage.removeItem('subject_name');//class_id   
    
    if (this.defaultEntity != value) {
      this.isclassload = 'false';
    }
    console.log('localStorage.getItem(class_id)' + localStorage.getItem('class_id'));
    this.defaultEntity = "";
    this.defaultEntity = value.trim();
    for (var i = 0; i < this.entityArr.length; i++) {

      if (this.defaultEntity == this.entityArr[i]['name_town']) {

        /**set entityId, entityName & entity_no to localStorage */
        localStorage.setItem('entityId', this.entityArr[i]['id']);
        localStorage.setItem('entityName', this.entityArr[i]['name_town']);
        localStorage.setItem('entity_no', this.entityArr[i]['entity_no']);

        /**Modal Popup Close Here */
        this.popoverCtrl.dismiss();

        if (this.network.type != "none") {

          /**Get API response class list here */
          //this.getClass();
        } else if (this.network.type == 'none') {

          /**Get offline stored class list here */
          this.getClassOffline();
        }
      }
    }
  }

  getActor() {

    if (this.network.type != 'none') {

      if (localStorage.getItem('userType') == 'Actor') {

        var data = {
          'token': localStorage.getItem('token'),
          'userId': localStorage.getItem('userId')
        }
      } else if (localStorage.getItem('userType') == "Actor's Parent") {

        var data = {
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

        if (this.entityArr.length == 0) {
          this.translate.use(this.selectedLanguage);
          this.translate.get('Entity is not assigned to this account,please contact your Entity Manager').subscribe((res: string) => {
            alert(res);
            // localStorage.clear();
            this.popoverCtrl.dismiss();
            window.location.reload(true);
          });
        }
        console.log('this.entityArr.length getActor() :-' + this.entityArr.length);
        if (this.entityArr.length == 0)
          this.defaultClass = this.entityArr[0]['ref_grade'];

      }).catch(error => {
        // alert("getEntityName Error Here !" + error);
      });
    }
  }


  /**Offline App code start here */

  createDB() {
    this.sqlite.create({
      name: this.database_name,
      location: 'default'
    }).then((db: SQLiteObject) => {
      this.databaseObj = db;
      this.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' + this.table_name + ' (uniqueID INTEGER PRIMARY KEY AUTOINCREMENT, userid INTEGER, id INTEGER ,entity_name VARCHAR(200), name_town varchar(2),entity_no varchar(2))', [])
        .then(() => {

          if (this.network.type == 'none' && localStorage.getItem('userType') == 'Actor') {
            this.getActorEntity();
          }
        }).catch(e => {
          // alert("Error to table_name table Created" + JSON.stringify(e))
        });
    }).catch(e => {
      // alert("Error to Database Create" + JSON.stringify(e))
    });
  }

  createDBActorList() {
    this.sqlite.create({
      name: this.database_name,
      location: 'default'
    }).then((db: SQLiteObject) => {

      this.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' + this.table_nameactor + '(uniqueActorID INTEGER PRIMARY KEY AUTOINCREMENT, userid INTEGER, id INTEGER, firstname varchar(2), name varchar(2), type varchar(2), class_id varchar(2))', [])
        .then(() => {

          if (this.network.type == 'none' && localStorage.getItem('userType') == "Actor's Parent") {
            this.getactor();
          }

        }).catch(e => {
          // alert("Error to create table_nameactor Table" + JSON.stringify(e))
        });

      this.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' + this.table_name_EntityList + ' (uniqueID INTEGER PRIMARY KEY AUTOINCREMENT, userid INTEGER, id INTEGER ,entity_name VARCHAR(200), name_town varchar(2), actorId varchar(2))', [])
        .then(() => {
        }).catch(e => {
          // alert("Error to create table_name_EntityList Table" + JSON.stringify(e))
        });
    }).catch(e => {
      // alert("Error to Create ActorList database" + JSON.stringify(e))
    });
  }

  createDBClassList() {
    this.sqlite.create({
      name: this.database_name,
      location: 'default'
    }).then((db: SQLiteObject) => {
      this.databaseObj = db;
      this.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' + this.table_classListActor + ' (id INTEGER PRIMARY KEY AUTOINCREMENT, userId INTEGER, entityId vachar(2), class_id INTEGER ,class_reference VARCHAR(200), class_grade varchar(2), ref_grade varchar(2))', [])
        .then(() => {
        }).catch(e => {
          // alert("Error to create table_classListActor Table" + JSON.stringify(e))
        });

      this.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' + this.table_classListActorsParent + ' (id INTEGER PRIMARY KEY AUTOINCREMENT, actorId INTEGER, entityId vachar(2), class_id INTEGER ,class_reference VARCHAR(200), class_grade varchar(2), ref_grade varchar(2))', [])
        .then(() => {
        }).catch(e => {
          // alert("Error to create table_classListActorsParent table" + JSON.stringify(e))
        });

    }).catch(e => {
      // alert("Error to create classList Database" + JSON.stringify(e))
    });
  }

  insertactor() {
    this.platform.ready().then(() => {
      for (var i = 0; i < this.actorList.length; i++) {
        this.databaseObj.executeSql('INSERT INTO ' + this.table_nameactor + ' (userid , id , firstname , name, type, class_id) VALUES("' + localStorage.getItem('userId') + '", "' + this.actorList[i]['id'] + '", "'
          + this.actorList[i]['firstname'] + '", "'
          + this.actorList[i]['name'] + '", "'
          + this.actorList[i]['type'] + '", "' +
          this.actorList[i]['class_id'] + '")', [])
          .then(() => {
            // alert('Row inserted :-' + this.table_nameactor);
          }).catch(e => {
            // alert("Error to insert rows inside of 'table_nameactor' Table:- " + JSON.stringify(e))
          });
      }
    });
  }

  insertClass() {

    if (localStorage.getItem('userType') == "Actor") {

      this.databaseObj.executeSql("SELECT * FROM " + this.table_classListActor, [])
        .then((res) => {

          // alert("class list insert time length is:-" + res.rows.length);

          this.row_data = [];

          for (var i = 0; i < res.rows.length; i++) {
            this.row_data.push(res.rows.item(i));
          }

          // alert("this.row_data.length :-" + this.row_data.length);

          for (var i = 0; i < this.row_data.length; i++) {

            if (this.row_data[i]['userId'] == localStorage.getItem('userId') && this.row_data[i]['entityId'] == localStorage.getItem('entityId')) {

              this.databaseObj.executeSql(`DELETE FROM ${this.table_classListActor} WHERE userId = ${this.row_data[i]['userId']}`, [])
                .then((res) => {
                  // alert("Row deleted from 'table_classListActor' Table:-" + JSON.stringify(res));
                })
                .catch(e => {
                  // alert("Error to Delete rows from 'table_classListActor' table" + JSON.stringify(e))
                });
            }
          }

          for (var i = 0; i < this.classListArr.length; i++) {
            this.databaseObj.executeSql('INSERT INTO ' + this.table_classListActor + ' (userId, entityId, class_id, class_reference, class_grade, ref_grade ) VALUES ("' + localStorage.getItem('userId') + '","' + localStorage.getItem('entityId') + '","'
              + this.classListArr[i]['class_id'] + '","' + this.classListArr[i]['class_reference'] + '","' +
              this.classListArr[i]['class_grade'] + '","' + this.classListArr[i]['ref_grade'] + '")', [])
              .then(() => {
                // alert("Row inseted inside of 'table_classListActor' Table :-" + this.table_name);
              }).catch(e => {
                // alert("Error to insert rows inside of 'table_classListActor' Table:- " + JSON.stringify(e));
              });
          }
        })
        .catch(e => {
          // alert("Error to Get classList Actor Rows:- " + JSON.stringify(e))
        });
    } else if (localStorage.getItem('userType') == "Actor's Parent") {

      this.databaseObj.executeSql("SELECT * FROM " + this.table_classListActorsParent, [])
        .then((res) => {

          // alert("class list insert time length is:-" + res.rows.length);

          this.row_data = [];

          for (var i = 0; i < res.rows.length; i++) {
            this.row_data.push(res.rows.item(i));
          }

          // alert("this.row_data.length :-" + this.row_data.length);

          for (var i = 0; i < this.row_data.length; i++) {

            if (this.row_data[i]['entityId'] == localStorage.getItem('entityId') && this.row_data[i]['actorId'] == localStorage.getItem('actorId')) {

              this.databaseObj.executeSql(`DELETE FROM ${this.table_classListActorsParent} WHERE actorId = ${this.row_data[i]['actorId']}`, [])
                .then((res) => {
                  // alert("Row deleted from 'table_classListActorsParent' Table:-" + JSON.stringify(res));
                })
                .catch(e => {
                  // alert("Error to Delete rows from 'table_classListActorsParent' table" + JSON.stringify(e))
                });
            }
          }

          for (var i = 0; i < this.classListArr.length; i++) {
            this.databaseObj.executeSql('INSERT INTO ' + this.table_classListActorsParent + ' (actorId, entityId, class_id, class_reference, class_grade, ref_grade ) VALUES ("' + localStorage.getItem('actorId') + '","' + localStorage.getItem('entityId') + '","'
              + this.classListArr[i]['class_id'] + '","' + this.classListArr[i]['class_reference'] + '","' +
              this.classListArr[i]['class_grade'] + '","' + this.classListArr[i]['ref_grade'] + '")', [])
              .then(() => {
                // alert("Row inseted inside of 'table_classListActorsParent' Table :-" + this.table_name);
              }).catch(e => {
                // alert("Error to insert rows inside of 'table_classListActorsParent' Table:-" + JSON.stringify(e));
              });
          }
        })
        .catch(e => {
          // alert("Error to Get classList Actor's parent rows:-" + JSON.stringify(e))
        });
    }
  }

  getClassOffline() {

    if (localStorage.getItem('userType') == "Actor") {

      this.databaseObj.executeSql("SELECT DISTINCT userId, entityId, class_id, class_reference, class_grade, ref_grade FROM " + this.table_classListActor, [])
        .then((res) => {

          // alert("offline class list Actor :-" + res.rows.length);

          this.row_data = [];
          this.classListArr = [];

          for (var i = 0; i < res.rows.length; i++) {
            this.row_data.push(res.rows.item(i));
          }

          // alert("this.row_data:-" + JSON.stringify(this.row_data));

          for (var i = 0; i < this.row_data.length; i++) {

            if (this.row_data[i]['userId'] == localStorage.getItem('userId') && this.row_data[i]['entityId'] == localStorage.getItem('entityId')) {
              this.classListArr.push(this.row_data[i])
            }
          }

          // alert("this.classListArr.length Actor:-" + this.classListArr.length);

          if (this.classListArr.length == 0) {
            this.translate.use(this.selectedLanguage);
            this.translate.get('Class is not assigned to this account,please contact your Entity Manager').subscribe((res: string) => {
              alert(res);
              this.popoverCtrl.dismiss();
              localStorage.removeItem('actorName');
              localStorage.removeItem('entityName');
              localStorage.removeItem('loggedinflag');
              window.location.reload(true);
            });
          }
        })
        .catch(e => {
          // alert("Error to Get classList Actor Rows:- " + JSON.stringify(e))
        });
    } else if (localStorage.getItem('userType') == "Actor's Parent") {

      this.databaseObj.executeSql("SELECT DISTINCT actorId, entityId, class_id, class_reference, class_grade, ref_grade FROM " + this.table_classListActorsParent, [])
        .then((res) => {

          // alert("offline class list Actor's Parent :-" + res.rows.length);

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

  insertEntityList() {

    if (localStorage.getItem('userType') == "Actor") {

      this.databaseObj.executeSql("SELECT * FROM " + this.table_name, [])
        .then((res) => {

          // alert("Actor list insert time length is:-" + res.rows.length);

          this.row_data = [];

          for (var i = 0; i < res.rows.length; i++) {
            this.row_data.push(res.rows.item(i));
          }
          // alert("this.row_data.length :-" + this.row_data.length);

          for (var i = 0; i < this.row_data.length; i++) {

            if (this.row_data[i]['userid'] == localStorage.getItem('userId')) {

              this.databaseObj.executeSql(`DELETE FROM ${this.table_name} WHERE userid = ${this.row_data[i]['userid']}`, [])
                .then((res) => {
                  // alert("Row deleted from 'table_name' Table:-" + JSON.stringify(res));
                })
                .catch(e => {
                  // alert("Error to Delete rows from 'table_name' table" + JSON.stringify(e))
                });
            }
          }

          for (var i = 0; i < this.entityArr.length; i++) {
            this.databaseObj.executeSql('INSERT INTO ' + this.table_name + ' (userid , id, entity_name, name_town,entity_no) VALUES ("' + localStorage.getItem('userId') + '","' + this.entityArr[i]['id'] + '","' + this.entityArr[i]['entity_name'] + '","' + this.entityArr[i]['name_town'] + '","' + this.entityArr[i]['entity_no'] + '")', [])
              .then(() => {
                // alert("Row inseted inside of 'table_name' Table :-" + this.table_name);
              }).catch(e => {
                // alert("Error to insert rows inside of 'table_name' Table:- " + JSON.stringify(e));
              });
          }
        })
        .catch(e => {
          // alert("Error to Get entityList Actor's parent Rows:- " + JSON.stringify(e))
        });
    }

    if (localStorage.getItem('userType') == "Actor's Parent") {
      this.databaseObj.executeSql("SELECT * FROM " + this.table_name_EntityList, [])
        .then((res) => {

          // alert("Entity list insert time length is:-" + res.rows.length);

          this.row_data = [];
          for (var i = 0; i < res.rows.length; i++) {
            this.row_data.push(res.rows.item(i));
          }

          // alert("this.row_data.length :-" + this.row_data.length);

          for (var i = 0; i < this.row_data.length; i++) {

            if (this.row_data[i]['actorId'] == localStorage.getItem('actorId')) {

              this.databaseObj.executeSql(`DELETE FROM ${this.table_name_EntityList} WHERE actorId = ${this.row_data[i]['actorId']}`, [])
                .then((res) => {
                  // alert("Row deleted from 'table_name_EntityList' Table:-" + JSON.stringify(res));
                })
                .catch(e => {
                  // alert("Error to Delete rows from 'table_name_EntityList' table" + JSON.stringify(e))
                });
            }
          }

          for (var i = 0; i < this.entityArr.length; i++) {
            this.databaseObj.executeSql('INSERT INTO ' + this.table_name_EntityList + ' (userid , id, entity_name, name_town, actorId) VALUES ("' + localStorage.getItem('userId') + '","' + this.entityArr[i]['id'] + '","' + this.entityArr[i]['entity_name'] + '","' + this.entityArr[i]['name_town']
              + '","' + localStorage.getItem('actorId') + '")', [])
              .then(() => {
                // alert("Row inseted inside of 'table_name_EntityList' Table :-" + this.table_name_EntityList);
              }).catch(e => {
                // alert("Error to insert rows inside of 'table_name_EntityList' Table:- " + JSON.stringify(e));
              });
          }
        })
        .catch(e => {
          // alert("Error to Get Actor Entity Rows:- " + JSON.stringify(e))
        });
    }
  }

  getActorEntity() {

    if (localStorage.getItem('userType') == 'Actor') {

      this.databaseObj.executeSql("SELECT DISTINCT userid , id, entity_name, name_town,entity_no FROM " + this.table_name, [])
        .then((res) => {

          // alert("Actor Entity list length is:-" + res.rows.length);
          this.row_data = [];
          this.entityArr = [];

          for (var i = 0; i < res.rows.length; i++) {
            this.row_data.push(res.rows.item(i));
          }
          // alert("this.row_data:-" + JSON.stringify(this.row_data));
          // console.log("this.row_data Actor :-" + JSON.stringify(this.row_data));

          for (var i = 0; i < this.row_data.length; i++) {
            if (this.row_data[i]['userid'] == localStorage.getItem('userId')) {
              this.entityArr.push(this.row_data[i]);
            }
          }
          // alert("this.entityArr.length Actor:-" + JSON.stringify(this.entityArr));
        })
        .catch(e => {
          // alert("Error to Get Entity Actor Rows:- " + JSON.stringify(e))
        });
    }
  }

  getEntityActorsParent() {

    if (localStorage.getItem('userType') == "Actor's Parent") {

      this.databaseObj.executeSql("SELECT DISTINCT userid , id, entity_name, name_town, actorId FROM " + this.table_name_EntityList, [])
        .then((res) => {

          // alert("Actor's Parent Entity list length is:-" + res.rows.length);
          this.row_data = [];
          this.entityArr = [];

          for (var i = 0; i < res.rows.length; i++) {
            this.row_data.push(res.rows.item(i));
          }
          // alert("this.row_data:-" + JSON.stringify(this.row_data));

          for (var i = 0; i < this.row_data.length; i++) {
            if (this.row_data[i]['actorId'] == localStorage.getItem('actorId')) {
              this.entityArr.push(this.row_data[i]);
            }
          }
          // alert("this.entityArr.length Actor's Parent :-" + this.entityArr.length);
        })
        .catch(e => {
          // alert("Error to Get Entity Actor's Parent Rows:- " + JSON.stringify(e))
        });
    }
  }

  getactor() {

    this.databaseObj.executeSql("SELECT  DISTINCT userid , id , firstname , name, type, class_id FROM " + this.table_nameactor, [])
      .then((res) => {

        // alert("Actor's Parent Entity list length is:-" + res.rows.length);

        this.row_data = [];
        this.actorList = [];

        for (var i = 0; i < res.rows.length; i++) {
          this.row_data.push(res.rows.item(i));
        }
        // alert("this.row_data:-" + JSON.stringify(this.row_data));

        for (var i = 0; i < this.row_data.length; i++) {
          if (this.row_data[i]['userid'] == localStorage.getItem('userId')) {
            this.actorList.push(this.row_data[i])
          }
        }

        // alert("this.actorList.length is :-" + this.actorList.length);
      })
      .catch(e => {
        // alert("Error to get actor List:- " + JSON.stringify(e))
      });
  }

  /**Offline App code end here */


}