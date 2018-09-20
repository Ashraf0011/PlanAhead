import { Injectable } from '@angular/core';


/*
  Generated class for the EventsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventsProvider {

  events:any = [];

  constructor() {
    console.log('Hello EventsProvider Provider');
    this.load();
  }

  load(){
    this.events=[
    {title:"app",summary:" working"},
    {title:"model ",summary:"good "},
    ];
  }
  add(){

  }

}
