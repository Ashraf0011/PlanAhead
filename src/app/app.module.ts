import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MomentPipe } from "../pipes/moment/moment";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from "../pages/login/login";
import { SignupPage } from "../pages/signup/signup";
import { WelcomePage } from "../pages/welcome/welcome";
import { SummaryPage} from "../pages/summary/summary";
import { TodayPage} from "../pages/today/today";


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EventsProvider } from '../providers/events/events';

import { PlanPage} from "../pages/plan/plan";
import { MoviePage} from "../pages/movie/movie";
import { OtherPage} from "../pages/other/other";
import { SkillPage} from "../pages/skill/skill";
import { StudyPage} from "../pages/study/study";
import { TravelPage} from "../pages/travel/travel";
import { ExercisePage } from "../pages/exercise/exercise";


const config = {
    apiKey: "AIzaSyDBN--FhVd9m5z4uux3YlOSxUFqm4E4spE",
    authDomain: "planahead-69dd6.firebaseapp.com",
    databaseURL: "https://planahead-69dd6.firebaseio.com",
    storageBucket: "planahead-69dd6.appspot.com",
    messagingSenderId: "1063578646965"
  };

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
    TodayPage,
    ExercisePage,
    MoviePage,
    OtherPage,
    SkillPage,
    StudyPage,
    TravelPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule,
    AngularFireModule.initializeApp(config)
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
    TodayPage,
    ExercisePage,
    MoviePage,
    OtherPage,
    SkillPage,
    StudyPage,
    TravelPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EventsProvider,
    AngularFireDatabase,
  ]
})
export class AppModule {}
