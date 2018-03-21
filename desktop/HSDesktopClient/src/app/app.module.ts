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
import { DataService } from './data.service';
import {FormsModule} from '@angular/forms';


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
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ValidationComponent,
    DecklistsComponent,
    ErrorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    AlertModule.forRoot(),
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
