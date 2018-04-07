import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ConfigService } from '../config.service';
import { Observable } from 'rxjs/Observable';

//TODO: Change email to Battletag

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private data: DataService, private router: Router, private config: ConfigService) { }

  userID : string;
  battleTag: string;
  success: boolean;

  ngOnInit() {
    this.data.currentUserID.subscribe(ID => this.userID = ID);
    this.data.currentBattleTag.subscribe(battle => this.battleTag = battle);
  }

  login(nBattleTag: string){
   this.config.login(nBattleTag).subscribe(res => 
    this.postLog(res['id']));
  }
  
  postLog(uID: string){
    this.userID = uID;
    console.log(uID);
    this.data.changeUserID(this.userID);
    this.data.changeBattleTag(this.battleTag);
    this.router.navigate(['menu']);
  }

  createUser(nBattleTag: string){
    this.config.createUser(nBattleTag).subscribe(response => console.log(response));    
    this.data.changeUserID(this.userID);
    this.data.changeBattleTag(this.battleTag);
    this.router.navigate(['menu']);
  }
}
