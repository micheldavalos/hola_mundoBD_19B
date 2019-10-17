import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nombre = '';

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController) {

  }

  click() {
    //console.log('Hola', this.nombre);
    const alerta = this.alertCtrl.create({
      title: 'Hola',
      subTitle: this.nombre,
      buttons: ['Ok', 'Cancel']
    });

    alerta.present();
  }

}
