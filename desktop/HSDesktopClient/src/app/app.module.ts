import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ValidationComponent } from './validation/validation.component';
import { DecklistsComponent } from './decklists/decklists.component';
import { ErrorComponent } from './error/error.component';
import { AlertModule } from 'ngx-bootstrap';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';
import { ConfigService } from './config.service';
import {FormsModule} from '@angular/forms';
import { NgxElectronModule } from 'ngx-electron';
import { MenuComponent } from './menu/menu.component';
import { JoinTournamentComponent } from './join-tournament/join-tournament.component';
import { JoinMatchComponent } from './join-match/join-match.component';
import { BanComponent } from './ban/ban.component';


const appRoutes: Routes = [
  {
    path: 'validation',
    component: ValidationComponent
  },
  {
    path: 'decklists',
    component: DecklistsComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'tournament',
    component: JoinTournamentComponent
  },
  {
    path: 'match',
    component: JoinMatchComponent
  },
  {
    path: 'ban',
    component: BanComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ValidationComponent,
    DecklistsComponent,
    ErrorComponent,
    LoginComponent,
    MenuComponent,
    JoinTournamentComponent,
    JoinMatchComponent,
    BanComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    AlertModule.forRoot(),
    HttpModule,
    FormsModule,
    NgxElectronModule
  ],
  providers: [
    DataService,
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
