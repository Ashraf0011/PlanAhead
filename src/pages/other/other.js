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
var OtherPage = /** @class */ (function () {
    function OtherPage(navCtrl, navParams, viewCtrl, fdb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.fdb = fdb;
        this.other = fdb.list('/items/other');
    }
    ;
    OtherPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad otherPage');
    };
    OtherPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    OtherPage.prototype.createOther = function (name, hour) {
        var _this = this;
        this.other.push({
            name: name,
            hour: hour
        }).then(function (newOther) {
            _this.navCtrl.push(PlanPage);
        }, function (error) {
            console.log(error);
        });
    };
    OtherPage = __decorate([
        Component({
            selector: 'page-other',
            templateUrl: 'other.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            ViewController,
            AngularFireDatabase])
    ], OtherPage);
    return OtherPage;
}());
export { OtherPage };
//# sourceMappingURL=other.js.map