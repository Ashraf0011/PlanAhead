import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController,} from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
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

@IonicPage()
@Component({
  selector: 'page-plan',
  templateUrl: 'plan.html',
})
export class PlanPage {

  study : FirebaseListObservable<any[]>;
  exercise : FirebaseListObservable<any[]>;
  movie : FirebaseListObservable<any[]>;
  travel : FirebaseListObservable<any[]>;
  skill : FirebaseListObservable<any[]>;
  other : FirebaseListObservable<any[]>;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public fdb: AngularFireDatabase) {

    this.study = fdb.list('/items/study');
    this.exercise = fdb.list('/items/exercise');
    this.movie = fdb.list('/items/movie');
    this.travel = fdb.list('/items/travel');
    this.skill = fdb.list('/items/skill');
    this.other = fdb.list('/items/other');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlanPage');
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

  addStudy(){
    this.navCtrl.push(StudyPage);
  }
  addExercise(){
    this.navCtrl.push(ExercisePage);
  }
  addMovie(){
    this.navCtrl.push(MoviePage);
  }
  addTravel(){
    this.navCtrl.push(TravelPage);
  }
  addSkill(){
    this.navCtrl.push(SkillPage);
  }
  addOther(){
    this.navCtrl.push(OtherPage);
  }



}
