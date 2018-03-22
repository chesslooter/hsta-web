import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import { ConfigService } from '../config.service';
import {Observable} from 'rxjs/Observable';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private data: DataService, private router: Router, private config: ConfigService) { }

  userID : string;
  email: string;

  ngOnInit() {
    this.data.currentUserID.subscribe(ID => this.userID = ID);
    this.data.currentEmail.subscribe(mail => this.email = mail);
  }

  login(nEmail: string){
    this.data.changeUserID(this.userID);
    this.data.changeEmail(this.email);
    this.router.navigate(['decklists']);
  }   

  createUser(nEmail: string){
    this.config.createUser(nEmail).subscribe(response => console.log(response));    
    this.data.changeUserID(this.userID);
    this.data.changeEmail(this.email);
    this.router.navigate(['decklists']);
  }
}
