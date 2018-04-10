import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';
import { DataService } from "../data.service";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tournaments = ['tournament 1', 'tournament 2','tournament 3'];

  constructor(private data: DataService, private router: Router) { }

  ngOnInit() {
  }

  view(tournament: JSON){ 
    this.data.changeActiveTournament(tournament);
    this.router.navigate(['tournament']);
  }

  create() {
    this.router.navigate(['tournamentCreate']);
  }
  
}
