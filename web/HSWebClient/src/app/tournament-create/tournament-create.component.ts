import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../config.service';
import { DataService } from '../data.service';


@Component({
  selector: 'app-tournament-create',
  templateUrl: './tournament-create.component.html',
  styleUrls: ['./tournament-create.component.css']
})
export class TournamentCreateComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private config: ConfigService, private data: DataService) { }

  nTourName: string;
  nTourDesc: string;
  numPlayers: string;
  uID;

  sub1;
  sub2;

  ngOnInit() {
    this.sub1 = this.data.currentUserID.subscribe(res => this.uID = res);
  }

  ngOnDestroy(){
    if(this.sub1){
      this.sub1.unsubscribe();
    }
    if(this.sub2){
      this.sub2.unsubscribe();
    }
  }

  create() {
    var number = +this.numPlayers;
    this.sub2 = this.config.createTournament(this.nTourName, number, this.uID).subscribe(res => this.postCreate(res));
  }

  postCreate(res){
    console.log(res);
    if(res['success']){

      this.router.navigate(['home']);
    }
  }

  cancel() {
    this.router.navigate(['home']);
  }

}
