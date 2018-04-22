import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../config.service';


@Component({
  selector: 'app-tournament-create',
  templateUrl: './tournament-create.component.html',
  styleUrls: ['./tournament-create.component.css']
})
export class TournamentCreateComponent implements OnInit {

  constructor(private router: Router, private config: ConfigService) { }

  nTourName: string;
  nTourDesc: string;
  numPlayers: string;



  ngOnInit() {

  }

  create() {
    var number = +this.numPlayers;
    //API call to attempt to create. Redirect on success
    this.config.createTournament(this.nTourName, number, 1).subscribe(res => console.log(res));
    this.router.navigate(['home']);
  }

  cancel() {
    this.router.navigate(['home']);
  }

}
