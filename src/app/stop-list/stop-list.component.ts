import {Component, OnInit} from '@angular/core';
import {Stop} from '../Stop';
import {DeparturesService} from '../departures.service';

@Component({
  selector: 'app-stop-list',
  templateUrl: './stop-list.component.html',
  styleUrls: ['./stop-list.component.css']
})
export class StopListComponent implements OnInit {

  constructor(private departuresService: DeparturesService) {

  }
  stops: Stop[] = [];
  stopSelection: Stop[] = [];

  getStops(): void {
    this.departuresService.getAllStops()
    .subscribe(stops => {
      this.stops = stops;
      this.getStopSelection(10);
  });
  }

  // randomly select a number of stops in Dresden
  getStopSelection(numOfSelected: number): void {
    const remainingStops = [...this.stops];
    this.stopSelection = [];
    for (let i = 0; i < numOfSelected; i++){
      const randomIndex = this.getRandomInt(remainingStops.length);
      this.stopSelection.push(remainingStops[randomIndex]);
      remainingStops.splice( randomIndex - 1, 1 );
    }
  }

  getRandomInt(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
  }

  ngOnInit(): void {
    this.getStops();
  }

}
