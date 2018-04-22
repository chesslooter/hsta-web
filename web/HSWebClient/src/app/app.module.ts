import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TournamentComponent } from './tournament/tournament.component';
import { TournamentCreateComponent } from './tournament-create/tournament-create.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {FormsModule} from '@angular/forms';
import { DataService } from './data.service';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ConfigService} from "./config.service";


const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'tournament',
    component: TournamentComponent
  },
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'tournamentCreate',
    component: TournamentCreateComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TournamentComponent,
    TournamentCreateComponent,
    NavbarComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule,
    NgbModule.forRoot(),
  ],
  providers: [
    DataService,
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
