import { Component, OnInit } from '@angular/core';
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
export class NavbarComponent implements OnInit {

  constructor(private data: DataService, private router: Router, private config: ConfigService) { }

  loggedIn: boolean = false;

  ngOnInit() {
    this.data.currentLoggedIn.subscribe(message => this.loggedIn = message);

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
    this.data.changeLoggedIn(false);
    this.router.navigate([''])
    }

}
