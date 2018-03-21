import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private data: DataService, private router: Router) { }

  email :string;

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.email = message)
  }

  login(nEmail: string){
    this.data.changeMessage(nEmail);
    this.router.navigate(['decklists']);
  }

}
