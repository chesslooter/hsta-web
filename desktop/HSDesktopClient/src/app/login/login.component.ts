import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private data: DataService) { }

  email :string;

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.email = message)
  }

  login(nEmail: string){
    console.log("logging in");

    this.data.changeMessage(nEmail);
  }

}
