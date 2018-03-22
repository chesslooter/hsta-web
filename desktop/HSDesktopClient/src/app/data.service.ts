import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private emailSource = new BehaviorSubject<string>("");
  private userIDSource = new BehaviorSubject<string>("");
  private decksSource = new BehaviorSubject<string[]>([]);
  private deckCodesSource = new BehaviorSubject<string[]>([]);

  currentEmail = this.emailSource.asObservable();
  currentUserID = this.userIDSource.asObservable();
  currentDecks = this.decksSource.asObservable();
  currentDeckCodes = this.deckCodesSource.asObservable();

  constructor() { }

  changeUserID(ID: string) {
    this.userIDSource.next(ID)
  }

  changeEmail(email: string) {
    this.emailSource.next(email)
  }

  changeDecks(decks: string[]) {
    this.decksSource.next(decks)
  }

  changeDeckCodes(deckCodes: string[]) {
    this.deckCodesSource.next(deckCodes)
  }

}