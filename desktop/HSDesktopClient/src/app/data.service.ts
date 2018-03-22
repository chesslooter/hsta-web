import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private emailSource = new BehaviorSubject<string>("");
  private userIDSource = new BehaviorSubject<string>("");

  currentEmail = this.emailSource.asObservable();
  currentUserID = this.userIDSource.asObservable();

  constructor() { }

  changeUserID(ID: string) {
    this.userIDSource.next(ID)
  }

  changeEmail(email: string) {
    this.emailSource.next(email)
  }

}