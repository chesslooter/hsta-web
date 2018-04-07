import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Router } from '@angular/router';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-ban',
  templateUrl: './ban.component.html',
  styleUrls: ['./ban.component.css']
})
export class BanComponent implements OnInit {

  constructor(private data: DataService, private router: Router, private config: ConfigService) {}

  decks = ['Murloc Paladin','Cubelock','Secret Hunter'];
  deckCodes = [];

  ngOnInit() {
  }

  back() {
    this.router.navigate(['match']);
  }

  ban() {
    this.router.navigate(['validation']);
  }

}
