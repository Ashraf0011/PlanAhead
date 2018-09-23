var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { PlanPage } from "../plan/plan";
import { AngularFireDatabase } from "angularfire2/database";
/**
 * Generated class for the MoviePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MoviePage = /** @class */ (function () {
    function MoviePage(navCtrl, navParams, viewCtrl, fdb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.fdb = fdb;
        this.movie = fdb.list('/items/other');
    }
    ;
    MoviePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StudyPage');
    };
    MoviePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    MoviePage.prototype.createMovie = function (name, hour) {
        var _this = this;
        this.movie.push({
            name: name,
            hour: hour
        }).then(function (newOther) {
            _this.navCtrl.push(PlanPage);
        }, function (error) {
            console.log(error);
        });
    };
    MoviePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-movie',
            templateUrl: 'movie.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            ViewController,
            AngularFireDatabase])
    ], MoviePage);
    return MoviePage;
}());
export { MoviePage };
//# sourceMappingURL=movie.js.map