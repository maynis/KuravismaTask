import {Component, Input, OnInit} from '@angular/core';
import {DepartureElement} from '../DepartureElement';

@Component({
  selector: 'app-departure',
  templateUrl: './departure.component.html',
  styleUrls: ['./departure.component.css']
})
export class DepartureComponent implements OnInit {

  @Input() departure: DepartureElement;

  constructor() { }

  ngOnInit(): void {
  }

}
