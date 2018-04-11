import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from "../data.service";
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private data: DataService, private router: Router) { }

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
    this.router.navigate(['home']);
  }

  logout(){
    console.log('logging out');
    this.data.changeLoggedIn(false);
    this.router.navigate([''])
    }

}
