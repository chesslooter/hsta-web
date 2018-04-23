import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit, OnDestroy {

  tID;
  aID = "";
  hID = "";
  wID = "";
  status;
  sub1;
  sub2;
  sub3;
  sub4;
  sub5;


  tournament;

  matches = [
    ['match 1', 'Josh', 'Jake', 'Josh', 'fair'],
    ['match 2', 'Sam', 'Chase', 'In Progress', 'In Progress'],
    ['match 3', 'Tim', 'Brian', 'Match not played', 'Match not played']
  ];

  match = [];

  battleTags = [];

  constructor(private data: DataService, private router: Router, private modalService: NgbModal, private config: ConfigService) { }

  ngOnInit() {
    this.sub5 = this.data.currentActiveTournament.subscribe(res => this.setupPage(res));

  }

  ngOnDestroy(){
    if(this.sub1){
      this.sub1.unsubscribe();
    }
    if(this.sub2){
      this.sub2.unsubscribe();
    }
    if(this.sub3){
      this.sub3.unsubscribe();
    }
    if(this.sub4){
      this.sub4.unsubscribe();
    }
    if(this.sub5){
      this.sub5.unsubscribe();
    }
  }

  setupPage(res) {
    console.log(res);
    this.tID = res['tournamentID'];
    this.tournament = { 'name': res['tournamentname'] };
    console.log(res['matches']);
    this.matches = res['matches'];
    for (var i = 0; i < this.matches.length; i++) {
      if (!this.matches[i]['winner']) {
        this.matches[i]['winner'] = 'Not yet played';
      }
      if (!this.matches[i]['isValid']) {
        this.matches[i]['isValid'] = 'Not yet played';
      }
    }
    this.sub1 = this.config.getBattleTags(this.tID).subscribe(res => this.postGetBattleTags(res['battletags']));
  }

  postGetBattleTags(tags) {
    this.battleTags = tags;
    if (this.battleTags.length > 1) {
      this.aID = this.battleTags[1];
      this.hID = this.battleTags[0];
    }
  }

  create(modal) {
    console.log(this.battleTags);
    this.modalService.open(modal, { centered: true });
  }

  generateMatch() {
    this.sub2 = this.config.createMatch(this.hID, this.aID, this.tID).subscribe(res => console.log(res));
  }

  edit(modal, match) {
    this.match = match;
    this.modalService.open(modal, { centered: true });
  }

  updateMatch() {
    this.sub3 = this.config.updateMatch(this.match[0],this.wID,this.status).subscribe(res=>console.log(res));
  }

  delete(modal, match) {
    this.match = match;
    this.modalService.open(modal, { centered: true });
  }

  deleteNow() {
    this.sub4 = this.config.deleteMatch(this.match[0]).subscribe(res => console.log(res));
    this.match = [];
  }

  back() {
    this.router.navigate(['home']);
  }

}
