import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ConfigService } from '../config.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private data: DataService, private config: ConfigService, private router: Router) { }

  battleTag;

  ngOnInit() {

  }

  login(bTag: string) {
    this.data.changeLoggedIn(true);
    this.config.getTournaments(1).subscribe(res => this.data.changeActiveTournamentJson(res));
    this.router.navigate(['home']);
    //Send API call to server with battletag

  }

  createUser(bTag: string) {

    this.router.navigate(['home']);    
    this.data.changeLoggedIn(true);
    this.config.getTournaments(1).subscribe(res => this.data.changeActiveTournamentJson(res));

  }

}
