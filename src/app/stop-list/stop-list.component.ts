import {Component, OnInit} from '@angular/core';
import {Stop} from '../Stop';
import {DeparturesService} from '../departures.service';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-stop-list',
  templateUrl: './stop-list.component.html',
  styleUrls: ['./stop-list.component.css']
})
export class StopListComponent implements OnInit {

  constructor(private departuresService: DeparturesService) {

  }
  stops: Stop[];

  getAllStops(): void {
    this.departuresService.getAllStops()
    .subscribe(stops => this.stops = stops);
  }

  ngOnInit(): void {
    this.getAllStops();
  }

}
