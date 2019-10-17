import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nombre = '';

  constructor(public navCtrl: NavController) {

  }

  click() {
    console.log('Hola', this.nombre);
  }

}
