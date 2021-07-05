import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from 'src/app/translate-config.service';
import { Router } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';
import { Platform } from '@ionic/angular';
import { Location } from '@angular/common';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {
  heading = this.translateConfigService.get('Logout');

  constructor(private router: Router, private network: Network,
    private translateConfigService: TranslateConfigService
    , private platform: Platform
    , private _location: Location) {

  }

  ngOnInit() {
    this.platform.ready().then(() => {
      // call device backbtn functionality
      this.initializeBackButtonCustomHandler();
    });

    if (localStorage.getItem('remembermechecked') != 'true') {
      localStorage.removeItem('USERNAME');
      localStorage.removeItem('PASSWORD');
      localStorage.removeItem('remembermechecked');
    }

    localStorage.setItem('lastloggedinuserid', localStorage.getItem('userId'));
    localStorage.setItem('lastloggedinentityId', localStorage.getItem('entityId'));
    localStorage.setItem('lastloggedinentityName', localStorage.getItem('entityName'));
    localStorage.setItem('lastloggedinentityName', localStorage.getItem('entityName'));

    localStorage.removeItem('loggedinflag');
    localStorage.removeItem('selectedL');
    localStorage.removeItem('ischecked');
    localStorage.removeItem("token");
    localStorage.removeItem("actorName");
    localStorage.removeItem("notificationFlag");
    localStorage.removeItem("bckbtnpage");
    localStorage.removeItem("currenturl");
    localStorage.removeItem('userName'),
      localStorage.removeItem('email'),
      localStorage.removeItem("selectedL");
    localStorage.removeItem("entityName");
    localStorage.removeItem("entityId");
    localStorage.removeItem('className');
    localStorage.removeItem('class_id');//class_id    
    localStorage.removeItem('subject_id');
    localStorage.removeItem('subject_name');//class_id   
    
    localStorage.removeItem("entity_no");
    localStorage.removeItem("actorId");
    localStorage.removeItem("userId");
    localStorage.removeItem('classId');
    localStorage.removeItem('className');
    localStorage.removeItem('class_id');
    localStorage.removeItem('citizen_id');

    localStorage.removeItem('cameraAction');
    localStorage.removeItem('scanAction');
    localStorage.removeItem('scanAlarm');
    window.location.reload(true);
    /** 04-05-2020 :- route shows white blank space before navigate to login page*/
    //this.router.navigateByUrl('app-home', { replaceUrl: true });

  }

  initializeBackButtonCustomHandler(): void {
    this.platform.backButton.subscribeWithPriority(999990, () => {
      navigator['app'].exitApp();
    });
  }


}
