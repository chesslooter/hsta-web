import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/Rx';
import { concat } from 'rxjs/operator/concat';

@Injectable()
export class ConfigService {
  private url = 'https://hsta-server.herokuapp.com';
  //private url = 'http://192.168.1.12:3000'; //Test URL for running server when not pushed to Heroku
  //private url = 'http://localhost:3000';
  constructor(private http: Http) { }

  getTournaments(userid) {
    return this.http.get(this.url + '/api/get_tournaments?userid=' + userid).map(res => res.json());
  }

  createTournament(tournamentName, numDecks, userid) {
    return this.http.get(this.url + '/api/create_tournament?userid=' + userid + '&name=' + tournamentName
                            + '&numDecks=' + numDecks).map(res => res.json());
  }

  createUser(email) {
    return this.http.get(this.url + '/api/create_user?battletag=' + email).map(res => res.json());
  }

  login(email) {
    return this.http.get(this.url + '/api/login?battletag=' + email).map(res => res.json());
  }
}
