var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SignupPage } from "../signup/signup";
import { HomePage } from "../home/home";
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.funcLogin = function () {
        /**
         *    when login successful we do not want any close button here
         *    we want user to directly go to app pages.
         *
         *    this.navCtrl.setRoot('MenuPage');
         *
         * */
        if (this.username.value == "admin" && this.password.value == "admin") {
            var alert_1 = this.alertCtrl.create({
                title: 'Login Successful!',
                subTitle: 'You can use full functional app now',
                buttons: ['OK']
            });
            alert_1.present();
        }
        console.log("login function 1 worked");
    };
    LoginPage.prototype.openPage = function () {
        this.navCtrl.setRoot(HomePage);
    };
    LoginPage.prototype.funcRegister = function () {
        console.log("register function worked");
        /**
         *    When user want to register we will take them to another page
         *    so that they can signUP with Name, email and password.
         *
         *    this.navCtrl.setRoot('RegPage');
         *
         */
        this.navCtrl.push(SignupPage);
    };
    __decorate([
        ViewChild('username'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "username", void 0);
    __decorate([
        ViewChild('password'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "password", void 0);
    LoginPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-login',
            templateUrl: 'login.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, AlertController])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.js.map