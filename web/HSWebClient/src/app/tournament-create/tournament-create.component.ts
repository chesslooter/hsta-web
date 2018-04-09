import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tournament-create',
  templateUrl: './tournament-create.component.html',
  styleUrls: ['./tournament-create.component.css']
})
export class TournamentCreateComponent implements OnInit {

  constructor(private router: Router) { }

  nTourName: string;
  nTourDesc: string;
  nTourPlayers: string;

  ngOnInit() {
  }

  create() {
    //API call to attempt to create. Redirect on success

    this.router.navigate(['home']);

  }

  cancel() {
    this.router.navigate(['home']);
  }

}
