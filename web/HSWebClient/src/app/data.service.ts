import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private battleTagSource = new BehaviorSubject<string>("");
  private userIDSource = new BehaviorSubject<string>("");
  private loggedInSource = new BehaviorSubject<boolean>(false);
  private activeTournamentSource = new BehaviorSubject<[""]>([""]);
  private activeTournamentJson = new BehaviorSubject<JSON>(null);
  private deleteMatchSource = new BehaviorSubject<[""]>([""]);

  currentActiveTournament = this.activeTournamentSource.asObservable();
  currentActiveTournamentJson = this.activeTournamentJson.asObservable();
  currentLoggedIn = this.loggedInSource.asObservable();
  currentMatch = this.deleteMatchSource.asObservable();
  currentBattleTag = this.battleTagSource.asObservable();
  currentUserID = this.userIDSource.asObservable();

  constructor() { }

  logout(){
    this.loggedInSource.next(false);
    this.userIDSource.next("");
    this.battleTagSource.next("");
    this.deleteMatchSource.next([""]);
    this.activeTournamentSource.next([""]);
    this.activeTournamentJson.next(null);

  }

  changeUserID(ID: string) {
    this.userIDSource.next(ID)
  }

  changeBattleTag(battleTag: string) {
    this.battleTagSource.next(battleTag)
  }
  changeLoggedIn(status: boolean) {
    this.loggedInSource.next(status);
  }

  changeDeleteMatch(match: [""]) {
    this.deleteMatchSource.next(match);
  }

  changeActiveTournament(tournament) {
    this.activeTournamentSource.next(tournament);
  }

  changeActiveTournamentJson(tournament: JSON) {
    if(tournament['success']) {
      this.activeTournamentJson.next(tournament);
    }
  }


}
