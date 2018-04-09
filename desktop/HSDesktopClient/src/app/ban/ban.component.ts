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

  constructor(private data: DataService, private router: Router, private config: ConfigService) { }

  opDecks = ['Murloc Paladin', 'Cubelock', 'Secret Hunter'];
  opDeckCodes = [];
  bannedDeck;
  

  ngOnInit() {
    this.getOpponentDecks();
    this.onSelect(this.opDecks[0]);  

  }

  onSelect(deck) {
    this.bannedDeck = deck;
  }

  getOpponentDecks() {

  }

  back() {
    this.router.navigate(['match']);
  }

  ban() {
    console.log(this.bannedDeck);
    this.router.navigate(['validation']);
  }

}
