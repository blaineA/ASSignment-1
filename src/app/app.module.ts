import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MyTeamsPage } from '../pages/pages';
import { GamePage } from '../pages/pages';
import { TournamentsPage } from '../pages/pages';
import { TeamDetailPage } from '../pages/pages';
import { TeamsPage } from '../pages/pages';
import { HttpModule } from '@angular/http';
import { elite-api-service} from '../providers/shared';

@NgModule({
  declarations: [
    MyApp,
    MyTeamsPage,
    GamePage,
    TournamentsPage,
    TeamDetailPage,
    TeamsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeamsPage,
    GamePage,
    TournamentsPage,
    TeamDetailPage,
    TeamsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler, EliteApiService}]
})
export class AppModule {}
