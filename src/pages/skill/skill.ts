import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import { PlanPage } from "../plan/plan";


@Component({
  selector: 'page-skill',
  templateUrl: 'skill.html',
})
export class SkillPage {

  skill : FirebaseListObservable<any[]>;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public fdb: AngularFireDatabase) {
    this.skill = fdb.list('/items/skill');

  };


  ionViewDidLoad() {
    console.log('ionViewDidLoad StudyPage');
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }

  createSkill(name, hour){
    this.skill.push({
     name: name,
      hour: hour
    }).then(newSkill => {
          this.navCtrl.push(PlanPage);
          }, error => { console.log(error);
    });


  }

}

