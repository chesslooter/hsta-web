import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

  constructor(private data: DataService, private router: Router) { }
  
  decks = ['Murloc Paladin', 'Cube Lock', 'I Pay To Win'];

  ngOnInit() {
  }

  back() {
    this.router.navigate(['decklists']);

  }
}
