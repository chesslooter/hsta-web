import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from "../data.service";
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private data: DataService, private router: Router, private config: ConfigService) { }

  battleTag: string;

  ngOnInit() {
    this.data.currentBattleTag.subscribe(message => this.battleTag = message);

  }

  decklists() {
    this.router.navigate(['decklists']);
  }

  enterTournament() {
    this.router.navigate(['tournament']);
  }

  exit() {
    //Electron only. Send message to main process to kill app
    this.config.exit()
  }
}
