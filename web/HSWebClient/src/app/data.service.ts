import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
  private loggedInSource = new BehaviorSubject<boolean>(false);
  private activeTournamentSource = new BehaviorSubject<JSON>(null);
  private activeTournamentJson = new BehaviorSubject<JSON>(null);
  private deleteMatchSource = new BehaviorSubject<[""]>([""]);

  currentActiveTournament = this.activeTournamentSource.asObservable();
  currentActiveTournamentJson = this.activeTournamentJson.asObservable();
  currentLoggedIn = this.loggedInSource.asObservable();
  currentMatch = this.deleteMatchSource.asObservable();

  constructor() { }

  changeLoggedIn(status: boolean) {
    this.loggedInSource.next(status);
  }

  changeDeleteMatch(match: [""]) {
    this.deleteMatchSource.next(match);
  }

  changeActiveTournament(tournament: JSON) {
    this.activeTournamentSource.next(tournament);
  }

  changeActiveTournamentJson(tournament: JSON) {
    console.log('changeActiveTournamentJson');
    if(tournament['success']) {
      this.activeTournamentJson.next(tournament);
    }
  }

/*
  private battleTagSource = new BehaviorSubject<string>("");
  private userIDSource = new BehaviorSubject<string>("");
  private tournaments = new BehaviorSubject<string[]>([]);
  private deckCodesSource = new BehaviorSubject<string[]>([]);

  currentBattleTag = this.battleTagSource.asObservable();
  currentUserID = this.userIDSource.asObservable();
  currentDecks = this.decksSource.asObservable();
  currentDeckCodes = this.deckCodesSource.asObservable();

  constructor() { }

  changeUserID(ID: string) {
    this.userIDSource.next(ID)
  }

  changeBattleTag(battleTag: string) {
    this.battleTagSource.next(battleTag)
  }

  changeDecks(decks: string[]) {
    this.decksSource.next(decks)
  }

  changeDeckCodes(deckCodes: string[]) {
    this.deckCodesSource.next(deckCodes)
  }*/

}
