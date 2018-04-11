import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

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
    ['match 1', 'Josh', 'Jake', 'Josh', 'fair'],
    ['match 2', 'Sam', 'Chase', 'In Progress', 'In Progress'],
    ['match 3', 'Tim', 'Brian', 'Match not played', 'Match not played']
  ];

  match = [];

  constructor(private data: DataService, private router: Router, private modalService: NgbModal) { }

  ngOnInit() {
  }

  create(modal) {
    this.modalService.open(modal, {centered: true});
  }

  edit(modal, match) {
    this.match = match;
    this.modalService.open(modal, {centered: true});
  }

  delete(modal, match) {
    this.match = match;
    this.modalService.open(modal, {centered: true});
  }

  back() {
    this.router.navigate(['home']);
  }

}
