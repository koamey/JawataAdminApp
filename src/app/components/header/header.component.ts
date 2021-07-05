import { Component, OnInit,Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(public popoverCtrl: PopoverController, ) { }

  ngOnInit() { }

  @Input() heading = "";

  async showPopUp(value: any) {

    const popover = await this.popoverCtrl.create({
      component: ModalPage,
      event: value,
      translucent: true,
      cssClass:'popovercustom',
      showBackdrop: true

      //,backdropDismiss: false
    });
    return await popover.present();
  }

}
