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
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { AngularFireDatabase } from "angularfire2/database";
import { PlanPage } from "../plan/plan";
var StudyPage = /** @class */ (function () {
    function StudyPage(navCtrl, navParams, viewCtrl, fdb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.fdb = fdb;
        this.study = fdb.list('/items/study');
    }
    ;
    StudyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StudyPage');
    };
    StudyPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    StudyPage.prototype.createStudy = function (name, hour) {
        var _this = this;
        this.study.push({
            name: name,
            hour: hour
        }).then(function (newStudy) {
            _this.navCtrl.push(PlanPage);
        }, function (error) {
            console.log(error);
        });
    };
    StudyPage = __decorate([
        Component({
            selector: 'page-study',
            templateUrl: 'study.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            ViewController,
            AngularFireDatabase])
    ], StudyPage);
    return StudyPage;
}());
export { StudyPage };
//# sourceMappingURL=study.js.map