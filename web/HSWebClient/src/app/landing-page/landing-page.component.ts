import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { ConfigService } from '../config.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit, OnDestroy {

  constructor(private data: DataService, private config: ConfigService, private router: Router) { }

  bTag;
  userID;

  sub1;
  sub2;

  ngOnInit() {
    this.data.logout();
  }

  ngOnDestroy(){
    if(this.sub1){
      this.sub1.unsubscribe();
    }
    if(this.sub2){
      this.sub2.unsubscribe();
    }
  }

  login(bTag: string) {
    this.data.changeLoggedIn(true);
    this.sub1 = this.config.login(bTag).subscribe(res =>
      this.postLog(res['success'], res['id']));
    //Send API call to server with battletag

  }

  postLog(success: string, uID: string) {
    console.log(success)
    if (success) {
      this.userID = uID;
      this.data.changeUserID(this.userID);
      this.data.changeBattleTag(this.bTag);
      this.router.navigate(['home']);

    }
    else {
      document.getElementById('BattleTag').className = "form-control is-invalid";
      console.log("login failed");
    }
  }


  createUser(bTag: string) {    
    this.data.changeLoggedIn(true);
    this.sub2 = this.config.createUser(bTag).subscribe(res =>
      this.postLog(res['success'], res['id'])); 

  }
}
