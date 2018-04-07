import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ConfigService } from '../config.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-join-tournament',
  templateUrl: './join-tournament.component.html',
  styleUrls: ['./join-tournament.component.css']
})
export class JoinTournamentComponent implements OnInit {

  constructor(private data: DataService, private router: Router, private config: ConfigService) { }

  ngOnInit() {
  }

  joinTournament() {
    //TODO: add logic to check if tournament is valid. If so, open up option to select decks with number 
    //equal to those valid for the tournament
    this.router.navigate(['match']);
  }

  back() {
    this.router.navigate(['menu']);
  }

}
