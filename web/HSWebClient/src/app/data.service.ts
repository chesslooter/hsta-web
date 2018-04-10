import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
  private loggedInSource = new BehaviorSubject<boolean>(false);
  private activeTournamentSource = new BehaviorSubject<string>("");

  currentActiveTournament = this.activeTournamentSource.asObservable();
  currentLoggedIn = this.loggedInSource.asObservable();

  constructor() { }

  changeLoggedIn(status: boolean) {
    this.loggedInSource.next(status);
  }

  changeActiveTournament(tournament: string) {
    this.activeTournamentSource.next(tournament);
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