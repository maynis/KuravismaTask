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

  calculateDelay(): string{
    const delay = this.departure.arrivalTimeRelative - this.departure.scheduledTimeRelative;
    if (delay > 0) {
      return (delay + ' min late');
    }
    else if (delay === 0) {
      return 'in time';
    }
    else {
      return Math.abs(delay) + ' min early';
    }
  }

}
