import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from "../data.service";
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';

import { ConfigService } from '../config.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {

  constructor(private data: DataService, private router: Router, private config: ConfigService) { }

  loggedIn: boolean = false;

  sub1;

  ngOnInit() {
    this.sub1 = this.data.currentLoggedIn.subscribe(message => this.loggedIn = message);

  }

  ngOnDestroy(){
    if(this.sub1){
      this.sub1.unsubscribe();
    }
  }

  home() {
    this.router.navigate(['home']);
  }

  login() {
    console.log('logging in');
    this.data.changeLoggedIn(true);
    this.config.getTournaments(1).subscribe(res => this.data.changeActiveTournamentJson(res));
    this.router.navigate(['home']);
  }

  logout(){
    console.log('logging out');
    this.router.navigate(['']);
    }

}
