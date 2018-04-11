import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { MatchComponent } from '../match/match.component';
import { EditMatchComponent } from '../edit-match/edit-match.component';
import { DeleteMatchComponent } from '../delete-match/delete-match.component';

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
  ]

  constructor(private data: DataService, private router: Router, private modalService: NgbModal) { }

  ngOnInit() {
  }

  create() {
    const modalRef = this.modalService.open(MatchComponent, {centered: true});
  }

  edit(match) {
    const modalRef = this.modalService.open(EditMatchComponent, {centered: true});
    modalRef.componentInstance.match = match;
  }

  delete(match) {
    const modalRef = this.modalService.open(DeleteMatchComponent, {centered: true});
    modalRef.componentInstance.match = match;
  }

  back() {
    this.router.navigate(['home']);
  }

}
