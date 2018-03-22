import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


@Injectable()
export class ConfigService {
  private url = 'http://192.168.1.12:3000';

  constructor(private http: Http) { }

  getUserDecklists(userid) {
    return this.http.get(this.url + '/api/get_user_decklists?userid=' + userid).map(res => res.json());
  }

  addDeck(userid, deckcode, deckname) {      
    return this.http.get(this.url + '/api/add_deck?userid=' + 
            userid + '&deckcode=' + deckcode + '&deckname=' + deckname).map(res => res.json());
  }

  deleteDeck(userid, deckcode) {
    return this.http.get(this.url + '/api/delete_deck?userid=' + 
            userid + '&deckcode=' + deckcode).map(res => res.json());
  }

  updateDecklistName(userid, deckcode, deckname) {
    return this.http.get(this.url + '/api/update_decklist_name?userid=' + 
            userid + '&deckcode=' + deckcode + '&deckname=' + deckname);
  }

  createUser(email) {
    return this.http.get(this.url + '/api/create_user?email=' + email).map(res => res.json());
  }

  login(email) {
    return this.http.get(this.url + '/api/login?email=' + email).map(res => res.json());
  }

}
