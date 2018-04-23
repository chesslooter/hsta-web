import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';
import { DataService } from "../data.service";
import {ConfigService} from "../config.service";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  
  tournaments = [];
  uID;

  sub1;
  sub2;

  constructor(private data: DataService, private router: Router, private config: ConfigService) { }

  ngOnInit() {
    this.sub1 = this.data.currentUserID.subscribe(res => this.postGetID(res));
    
  }

  ngOnDestroy(){
    if(this.sub1){
      this.sub1.unsubscribe();
    }
    if(this.sub2){
      this.sub2.unsubscribe();
    }
  }

  postGetID(res){
    this.uID = res;
    this.sub2 = this.config.getTournaments(this.uID).subscribe(res => this.postPostID(res));

  }

  postPostID(res){
    this.data.changeActiveTournamentJson(res);
    this.setupPage(res);
  }

  setupPage(res){
    var hold;
    hold = JSON.parse(res['data']);
    this.tournaments = hold['tournaments'];
  }

  view(tournament){
    this.data.changeActiveTournament(tournament);
    this.router.navigate(['tournament']);
  }

  create() {
    this.router.navigate(['tournamentCreate']);
  }

}
