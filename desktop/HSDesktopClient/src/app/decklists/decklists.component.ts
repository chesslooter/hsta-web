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
  nDeckName: string;
  nDeckCode: string;
  decks = [];
  deckCodes = [];

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.email = message);
    this.config.getUserDecklists(this.email).subscribe(me => console.log(me['success']));
              //.map(body => body.Data)
              //.map(data => data.success).subscribe(test => console.log(test));
       // .subscribe(response => console.log(response.text()));
  }

  addDeck(deckName: string, deckCode: string){
    if(deckName && deckCode){
      this.decks.push(deckName);
      this.deckCodes.push(deckCode);
      this.config.addDeck(this.email, deckCode,deckName)
        .subscribe(response => console.log(response));

      this.nDeckName = "";
      this.nDeckCode ="";     
    }
  }

  validate(){
    this.router.navigate(['../validation']);
  }

  decksEntered():boolean{
    return(this.decks.length > 0);
  }

}
