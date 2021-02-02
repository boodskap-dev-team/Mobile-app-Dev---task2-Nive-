import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';


@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
})
export class ButtonPage {

  constructor(public alertController: AlertController,public popoverController: PopoverController,public modalController: ModalController) { }
  async show() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Warning!!!', 
      subHeader: 'Something Went Wrong',
      message: 'Oops!,You have clicked me',
      buttons: ['OK','CANCEL']
    });

    await alert.present();
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
  


  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
