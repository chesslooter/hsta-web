import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


@Injectable()
export class ConfigService {
  private url = 'localhost:3000';

  constructor(private http: Http) { }

  getUserDecklists(userid) {
    return this.http.get(this.url + '/api/get_user_decklists&userid=' + userid);
  }

  addDeck(userid, deckcode, deckname) {
    return this.http.get(this.url + '/api/add_deck&userid=' + 
            userid + '&deckcode=' + deckcode + '&deckname=' + deckname);
  }

  deleteDeck(userid, deckcode) {
    return this.http.get(this.url + '/api/delete_deck&userid=' + 
            userid + '&deckcode=' + deckcode);
  }

  updateDecklistName(userid, deckcode, deckname) {
    return this.http.get(this.url + '/api/update_decklist_name&userid=' + 
            userid + '&deckcode=' + deckcode + '&deckname=' + deckname);
  }

  createUser(email) {
    return this.http.get(this.url + '/api/add_deck&email=' + email);
  }

}
