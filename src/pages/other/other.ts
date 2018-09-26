import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import { PlanPage } from "../plan/plan";


@Component({
  selector: 'page-other',
  templateUrl: 'other.html',
})
export class OtherPage {

  other: FirebaseListObservable<any>;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public fdb: AngularFireDatabase) {

    this.other = fdb.list('/items/other');

  };


  ionViewDidLoad() {
    console.log('ionViewDidLoad otherPage');
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }

  createOther(name, hour){
    this.other.push({
        name : "String",
            hour : "Number"
    }).then(newOther => {
          this.navCtrl.push(PlanPage);
          }, error => { console.log(error);
    });


  }

}
