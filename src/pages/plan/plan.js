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
import { IonicPage, NavController, NavParams, ViewController, } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { StudyPage } from '../study/study';
import { ExercisePage } from "../exercise/exercise";
import { MoviePage } from "../movie/movie";
import { TravelPage } from "../travel/travel";
import { SkillPage } from "../skill/skill";
import { OtherPage } from "../other/other";
/**
 * Generated class for the PlanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlanPage = /** @class */ (function () {
    function PlanPage(navCtrl, navParams, viewCtrl, fdb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.fdb = fdb;
        this.study = fdb.list('/items/study');
        this.exercise = fdb.list('/items/exercise');
        this.movie = fdb.list('/items/movie');
        this.travel = fdb.list('/items/travel');
        this.skill = fdb.list('/items/skill');
        this.other = fdb.list('/items/other');
    }
    PlanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlanPage');
    };
    PlanPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    PlanPage.prototype.addStudy = function () {
        this.navCtrl.push(StudyPage);
    };
    PlanPage.prototype.addExercise = function () {
        this.navCtrl.push(ExercisePage);
    };
    PlanPage.prototype.addMovie = function () {
        this.navCtrl.push(MoviePage);
    };
    PlanPage.prototype.addTravel = function () {
        this.navCtrl.push(TravelPage);
    };
    PlanPage.prototype.addSkill = function () {
        this.navCtrl.push(SkillPage);
    };
    PlanPage.prototype.addOther = function () {
        this.navCtrl.push(OtherPage);
    };
    PlanPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-plan',
            templateUrl: 'plan.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            ViewController,
            AngularFireDatabase])
    ], PlanPage);
    return PlanPage;
}());
export { PlanPage };
//# sourceMappingURL=plan.js.map