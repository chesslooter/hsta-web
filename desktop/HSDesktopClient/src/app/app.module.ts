import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ValidationComponent } from './validation/validation.component';
import { DecklistsComponent } from './decklists/decklists.component';
import { ErrorComponent } from './error/error.component';

const appRoutes: Routes = [
    {
        path: 'validation',
        component: ValidationComponent
    },
    {
        path: '',
        component: DecklistsComponent
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
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
