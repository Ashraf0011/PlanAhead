import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MomentPipe } from "../pipes/moment/moment";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from "../pages/login/login";
import { SignupPage } from "../pages/signup/signup";
import { WelcomePage } from "../pages/welcome/welcome";
import {PlanPage} from "../pages/plan/plan";
import {SummaryPage} from "../pages/summary/summary";
import {TodayPage} from "../pages/today/today";


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EventsProvider } from '../providers/events/events';


@NgModule({
  declarations: [
    MyApp,
    MomentPipe,
    HomePage,
    ListPage,
    LoginPage,
    PlanPage,
    SignupPage,
    WelcomePage,
    SummaryPage,
    TodayPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    PlanPage,
    SignupPage,
    WelcomePage,
    SummaryPage,
    TodayPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EventsProvider,
  ]
})
export class AppModule {}
