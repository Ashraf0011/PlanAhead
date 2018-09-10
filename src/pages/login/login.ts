import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {SignupPage} from "../signup/signup";
import {HomePage} from "../home/home";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('username') username;
  @ViewChild('password') password;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  funcLogin(){

      /**
       *    when login successful we do not want any close button here
       *    we want user to directly go to app pages.
       *
       *    this.navCtrl.setRoot('MenuPage');
       *
       * */
      if(this.username.value == "admin" && this.password.value == "admin"){
        let alert = this.alertCtrl.create({
          title: 'Login Successful!',
          subTitle: 'You can use full functional app now',
          buttons: ['OK']
        });
        alert.present();
      }

      console.log("login function 1 worked");

  }
  openPage(){
    this.navCtrl.setRoot(HomePage);
  }

  funcRegister(){
    console.log("register function worked");

    /**
     *    When user want to register we will take them to another page
     *    so that they can signUP with Name, email and password.
     *
     *    this.navCtrl.setRoot('RegPage');
     *
     */

    this.navCtrl.push(SignupPage);
  }

}
