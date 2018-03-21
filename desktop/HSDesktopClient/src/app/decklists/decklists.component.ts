import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry  } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { DataService } from "../data.service";
import { Router } from '@angular/router';
import { ConfigService } from '../config.service';


@Component({
  selector: 'app-decklists',
  templateUrl: './decklists.component.html',
  styleUrls: ['./decklists.component.css']
})
export class DecklistsComponent implements OnInit {

  constructor(private data: DataService, private router: Router, private config: ConfigService) { }

  email: string;

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.email = message);
    this.config.getUserDecklists(this.email)
        .subscribe(response => console.log(response));
  }


  decks = ['Murloc Paladin', 'Cube Lock', 'I Pay To Win'];

  addDeck(deckName: string){
    if(deckName){
      this.decks.push(deckName
      )
      /*this.sendDeck(deckCode)
  .subscribe(success => {
    if(success) this.decks.push(deckName
  )});*/
    }

  }

  validate(){
    this.router.navigate(['../validation']);

  }

}
