import { Component, OnInit, Input } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-match',
  templateUrl: './delete-match.component.html',
  styleUrls: ['./delete-match.component.css']
})
export class DeleteMatchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  delete(match) {

    console.log('delete not yet implemented');
  }

}
