import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, Nav, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})


export class SignupPage {

  userData = { "name": "", "username": "", "password": ""};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  @ViewChild(Nav) nav:Nav;



  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  signupFunc(){
      this.navCtrl.setRoot(HomePage);
  }

  openPage() {
    this.navCtrl.setRoot(HomePage);
  }

}
