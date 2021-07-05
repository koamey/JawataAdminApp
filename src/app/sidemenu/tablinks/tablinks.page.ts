import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { TranslateConfigService } from 'src/app/translate-config.service';
import { TranslateService } from '@ngx-translate/core';
// import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonTabs, PopoverController, NavController } from '@ionic/angular';
import { ModalPage } from '../../components/modal/modal.page';
import { EntitymodalPage } from 'src/app/components/entitymodal/entitymodal.page';

@Component({
  selector: 'app-tablinks',
  templateUrl: './tablinks.page.html',
  styleUrls: ['./tablinks.page.scss'],
})
export class TablinksPage implements OnInit {
  header = true;
  // heading = this.translateConfigService.get('Check-In');
  private activeTab?: HTMLElement;
  constructor(private translateConfigService: TranslateConfigService
    , public popoverCtrl: PopoverController
    , private changeRef: ChangeDetectorRef
    , public navCtrl: NavController
    , private translate: TranslateService) {
    // this.changeRef.detectChanges();

  }
  selectedLanguage = localStorage.getItem('selectedL');
  @Input() 
  //heading = "Check-In";
  heading
  ngOnInit() {
  
  
    this.translate.use(this.selectedLanguage);
    this.translate.get('Check-In').subscribe((res: string) => {
      this.heading = "";
      this.heading = res;
    });
    if(localStorage.getItem('nav')=='true')
    {
     this.navCtrl.navigateForward(['tablinks/history']);
    }
    if (localStorage.getItem('entityName') == null) {
      this.showEntityModalPopup();
    }
  }

 
  /** For Header pop-up (three dots) */
  async showPopUp(value: any) {

    const popover = await this.popoverCtrl.create({
      component: ModalPage,
      event: value,
      translucent: true,
      cssClass: 'popovercustom',
      showBackdrop: true

      //,backdropDismiss: false
    });
    return await popover.present();
  }

  
  async showEntityModalPopup() {
    const popover = await this.popoverCtrl.create({
      component: EntitymodalPage,
      translucent: true,
      backdropDismiss: false,
      // event: value,
    });
    return await popover.present();
  }

  tabChange(tabs: IonTabs) {
    console.log('tabChange tablinks/history');
  //  if(localStorage.getItem('nav')=='true')
  //  {
  //   this.navCtrl.navigateForward(['tablinks/history']);
  //  }else{
    this.navCtrl.navigateForward(['tablinks/'+tabs.getSelected()]);
  // }
    // this.navCtrl.navigateBack(['tablinks/'+tabs.getSelected()]);
    console.log('after change:-',['tablinks/'+tabs.getSelected()]);

  }

  // ionViewWillEnter()
  // {
  //   alert('ionViewWillEnter history');
  //   this.navCtrl.navigateForward(['tablinks/'+this.selectedtabs]);
  // }
  // ionViewDidEnter()
  // {
  //   alert('ionViewDidEnter history');
  //   this.navCtrl.navigateForward(['tablinks/'+this.selectedtabs]);
  // }

  ionSelected(){
    console.log('ionSelected method invoked');
  }
}
