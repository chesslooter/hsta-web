import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry  } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { DataService } from "../data.service";



@Component({
  selector: 'app-decklists',
  templateUrl: './decklists.component.html',
  styleUrls: ['./decklists.component.css']
})
export class DecklistsComponent implements OnInit {

  constructor(private data: DataService) { }

  email: string;

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.email = message)

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

}
