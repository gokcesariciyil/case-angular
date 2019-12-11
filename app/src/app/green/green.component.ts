import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-green',
  templateUrl: './green.component.html',
  styleUrls: ['./green.component.scss']
})
export class GreenComponent implements OnInit {

  txt: string;
  name: string;

  constructor() { }

  ngOnInit() {
  }

}
