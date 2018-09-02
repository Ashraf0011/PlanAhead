import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

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
  public subjectName = [];
  public exerciseName =[];
  public movieName = [];
  public placeName = [];
  public otherName = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlanPage');
  }

  addStudyAlert(){
    let addItemAlert = this.alertCtrl.create({
      title: "Add new item",
      message: "Please type the Entry Name. Ex: Math/Swimming/Hobby",
      inputs:[{type: "Text", name: "Subject"}],
      buttons:[{text: "Cancel",},
        {text: "Add to list",
          handler:(inputData)=>{
          let addEvent;
          addEvent = inputData.Subject;
          this.subjectName.push(addEvent);
        }}]
    });addItemAlert.present();}

    addExerciseAlert(){
    let addItemAlert = this.alertCtrl.create({
      title: "Add new item",
      message: "Please type the Entry Name. Ex: Math/Swimming/Hobby",
      inputs:[{type: "Text", name: "Subject"}],
      buttons:[{text: "Cancel",},
        {text: "Add to list",
          handler:(inputData)=>{
          let addEvent;
          addEvent = inputData.Subject;
          this.exerciseName.push(addEvent);
        }}]
    });addItemAlert.present();}

    addMovieAlert(){
    let addItemAlert = this.alertCtrl.create({
      title: "Add new item",
      message: "Please type the Entry Name. Ex: Math/Swimming/Hobby",
      inputs:[{type: "Text", name: "Subject"}],
      buttons:[{text: "Cancel",},
        {text: "Add to list",
          handler:(inputData)=>{
          let addEvent;
          addEvent = inputData.Subject;
          this.movieName.push(addEvent);
        }}]
    });addItemAlert.present();}

    addPlaceAlert(){
    let addItemAlert = this.alertCtrl.create({
      title: "Add new item",
      message: "Please type the Entry Name. Ex: Math/Swimming/Hobby",
      inputs:[{type: "Text", name: "Subject"}],
      buttons:[{text: "Cancel",},
        {text: "Add to list",
          handler:(inputData)=>{
          let addEvent;
          addEvent = inputData.Subject;
          this.placeName.push(addEvent);
        }}]
    });addItemAlert.present();}
    addOtherAlert(){
        let addItemAlert = this.alertCtrl.create({
          title: "Add new item",
          message: "Please type the Entry Name. Ex: Math/Swimming/Hobby",
          inputs:[{type: "Text", name: "Subject"}],
          buttons:[{text: "Cancel",},
            {text: "Add to list",
              handler:(inputData)=>{
              let addEvent;
              addEvent = inputData.Subject;
              this.otherName.push(addEvent);
            }}]
        });addItemAlert.present();}

}
