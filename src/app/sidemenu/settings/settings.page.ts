import { Component, Input, OnInit } from '@angular/core';
import { ModalController, PopoverController, Platform } from '@ionic/angular';
import { TranslateConfigService } from 'src/app/translate-config.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  actionList = [];
  defaultAction = "";//this.langTransalate(localStorage.getItem('scanAction'));
  selectedLanguage = localStorage.getItem('selectedL');
  @Input()
  heading = this.translateConfigService.get('Settings');

  defaultCamera = "";
  cameraList = [];

  defaultAlarm = "";
  alarmList = [];

  constructor(private popoverCtrl: PopoverController
    , private platform: Platform
    , private translateConfigService: TranslateConfigService,
    private translate: TranslateService) { }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.translate.use(this.selectedLanguage);

      // this.defaultAction = "";
      // this.defaultAction = this.langTransalate(localStorage.getItem('scanAction'));

      // this.defaultCamera = "";
      // this.defaultCamera = this.langTransalate(localStorage.getItem('cameraAction'));

      // this.defaultAlarm = "";
      // this.defaultAlarm = this.langTransalate(localStorage.getItem('scanAlarm'));
      console.log('scanActionID :=>' + localStorage.getItem('scanActionID') + '----cameraActionID--' + localStorage.getItem('cameraActionID') + '--scanAlarmID--' + localStorage.getItem('scanAlarmID'))
      console.log('ngonint this.defaultAction', this.defaultAction);
      console.log(' ngonint this.defaultCamera', this.defaultCamera);
      this.translate.get('Settings').subscribe((res: string) => {
        this.heading = "";
        this.heading = res;

        this.setLanguages();
        this.getScanAction();
        this.getCamera();
        this.getScanAlarm();
      });
      //alert('Settings clicked..');

    });
  }

  setLanguages() {
    if (localStorage.getItem('scanActionID') != "") {
      let scanid = localStorage.getItem('scanActionID');
      this.defaultAction = "";
      this.defaultAction = (scanid == "0") ? this.langTransalate('Activated') : this.langTransalate('Deactivated');
    }

    if (localStorage.getItem('cameraActionID') != "") {
      let cameraid = localStorage.getItem('cameraActionID');
      this.defaultCamera = "";
      this.defaultCamera = (cameraid == "0" )? this.langTransalate('Back Camera') : this.langTransalate('Front Camera');
    }

    if (localStorage.getItem('scanAlarmID') != "") {
      let alarmid = localStorage.getItem('scanAlarmID');
      this.defaultAlarm = ""
      this.defaultAlarm = (alarmid == "0") ? this.langTransalate('Sound') : ((alarmid == "1") ? this.langTransalate('Vibrate') : this.langTransalate('Sound and Vibrate'));
    }
    console.log('setlangugae this.defaultAction', this.defaultAction);
    console.log('setLanguage this.defaultCamera', this.defaultCamera);
    console.log('setLanguage this.defaultAlarm', this.defaultAlarm);

  }
  onCancel() {
    console.log('oncancel click');
    this.popoverCtrl.dismiss();
  }

  /** start Scan Action */
  getScanAction() {
    /**Bind static json data */
    this.actionList.push({
      "id": 0,
      "name": this.langTransalate("Activated"),
    },
      {
        "id": 1,
        "name": this.langTransalate("Deactivated")
      });


    if (localStorage.getItem('scanAction') == null) {
      for (var i = 0; i < this.actionList.length; i++) {
        this.defaultAction = this.langTransalate(this.actionList[0]['name']);
        localStorage.setItem('scanAction', this.actionList[0]['name']);
        localStorage.setItem('scanActionID', this.actionList[1]['id']);
      }
    }
  }

  langTransalate(changeText) {
    var localChnageText = changeText;
    this.translate.use(this.selectedLanguage);
    this.translate.get(changeText).subscribe((res: string) => {
      localChnageText = res;
    });
    // console.log('localChnageText', localChnageText)
    return localChnageText;
  }
  changeScanAction(value) {
    this.defaultAction = "";
    this.defaultAction = value.trim();
    console.log('this.defaultAction' + this.defaultAction);
    for (var i = 0; i < this.actionList.length; i++) {
      if (value.trim() == this.actionList[i]['name']) {
        localStorage.setItem('scanActionID', this.actionList[i]['id']);
        this.defaultAction = this.langTransalate(value.trim());
        localStorage.setItem('scanAction', this.actionList[i]['name']);
      }
    }
  }
  /** end Scan Action */

  /** Start camera option */
  getCamera() {
    /**Bind static json data */
    this.cameraList.push({
      "id": 0,
      "name": this.langTransalate("Back Camera"),
    },
      {
        "id": 1,
        "name": this.langTransalate("Front Camera"),
      });
    if (localStorage.getItem('cameraAction') == null) {
      for (var i = 0; i < this.cameraList.length; i++) {
        this.defaultAction = this.cameraList[0]['name'];
        localStorage.setItem('cameraActionID', this.cameraList[0]['id']);
        localStorage.setItem('cameraAction', this.cameraList[0]['name']);
      }
    }

  }

  changeCamera(value) {
    this.defaultCamera = "";
    this.defaultCamera = value.trim();
    console.log('this.defaultCamera' + this.defaultCamera);
    for (var i = 0; i < this.actionList.length; i++) {
      if (value.trim() == this.cameraList[i]['name']) {
        localStorage.setItem('cameraAction', this.cameraList[i]['name']);
        localStorage.setItem('cameraActionID', this.cameraList[i]['id']);
      }
    }
  }
  /** End camera option */


  /** start Scan Action */
  getScanAlarm() {
    /**Bind static json data */
    this.alarmList.push({
      "id": 0,
      "name": this.langTransalate("Sound"),
    },
      {
        "id": 1,
        "name": this.langTransalate("Vibrate"),
      },
      {
        "id": 2,
        "name": this.langTransalate("Sound and Vibrate"),
      });

    if (localStorage.getItem('scanAlarm') == null) {
      for (var i = 0; i < this.alarmList.length; i++) {
        this.defaultAction = this.alarmList[0]['name'];
        localStorage.setItem('scanAlarmID', this.alarmList[0]['id']);
        localStorage.setItem('scanAlarm', this.alarmList[0]['name']);
      }
    }
  }

  changeScanAlarm(value) {
    this.defaultAlarm = "";
    this.defaultAlarm = value.trim();
    console.log('this.defaultAlarm' + this.defaultAlarm);
    for (var i = 0; i < this.alarmList.length; i++) {
      if (value.trim() == this.alarmList[i]['name']) {
        localStorage.setItem('scanAlarmID', this.alarmList[i]['id']);
        localStorage.setItem('scanAlarm', this.alarmList[i]['name']);
      }
    }
  }
  /** end Scan Action */

}
