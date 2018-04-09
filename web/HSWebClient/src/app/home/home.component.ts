import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tournaments = ['tournament 1', 'tournament 2','tournament 3'];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  create() {
    this.router.navigate(['tournamentCreate']);
  }
  
}
