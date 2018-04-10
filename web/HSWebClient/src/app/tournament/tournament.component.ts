import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {

  tournament = {
    'name' : 'Battle of the Group Members'
  }

  matches = [
    ['match 1', 'Josh', 'Jake'],
    ['match 2', 'Sam', 'Chase'],
    ['match 3', 'Tim', 'Brian']
  ]

  constructor(private data: DataService, private router: Router) { }

  ngOnInit() {
  }

}
