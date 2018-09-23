import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import { PlanPage } from "../plan/plan";


@Component({
  selector: 'page-travel',
  templateUrl: 'travel.html',
})
export class TravelPage {

  travel : FirebaseListObservable<any[]>;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public fdb: AngularFireDatabase) {

    this.travel = fdb.list('/items/travel');

  };


  ionViewDidLoad() {
    console.log('ionViewDidLoad StudyPage');
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }

  createTravel(name, hour){
    this.travel.push({
      name: name,
      hour: hour
    }).then(newTravel => {
          this.navCtrl.push(PlanPage);
          }, error => { console.log(error);
    });


  }

}
