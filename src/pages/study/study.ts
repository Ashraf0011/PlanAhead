import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import { PlanPage } from "../plan/plan";


@Component({
  selector: 'page-study',
  templateUrl: 'study.html',
})
export class StudyPage {

  study : FirebaseListObservable<any[]>;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public fdb: AngularFireDatabase) {
    this.study = fdb.list('/items/study');

  };


  ionViewDidLoad() {
    console.log('ionViewDidLoad StudyPage');
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }

  createStudy(name, hour){
    this.study.push({
      name : name,
      hour : hour
    }).then(newStudy => {
          this.navCtrl.push(PlanPage);
          }, error => { console.log(error);
    });


  }

}

