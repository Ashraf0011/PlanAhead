import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import { PlanPage } from "../plan/plan";

@Component({
  selector: 'page-exercise',
  templateUrl: 'exercise.html',
})
export class ExercisePage {

  exercise : FirebaseListObservable<any[]>;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public fdb: AngularFireDatabase) {

                this.exercise = fdb.list('/items/exercise');

  };


  ionViewDidLoad() {
    console.log('ionViewDidLoad StudyPage');
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }

  createExercise(name, hour){
    this.exercise.push({
       name: name ,
      hour: hour
    }).then(newExercise => {
          this.navCtrl.push(PlanPage);
          }, error => { console.log(error);
    });


  }

}

