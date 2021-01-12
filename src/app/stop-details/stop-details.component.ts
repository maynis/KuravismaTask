import {Component, OnInit} from '@angular/core';
import {Stop} from '../Stop';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {DeparturesService} from '../departures.service';
import {DepartureElement} from '../DepartureElement';

@Component({
  selector: 'app-stop-details',
  templateUrl: './stop-details.component.html',
  styleUrls: ['./stop-details.component.css']
})

export class StopDetailsComponent implements OnInit {


  constructor(
    private departuresService: DeparturesService,
    private route: ActivatedRoute,
    private location: Location) {
  }

  departureList: DepartureElement[];
  stop: Stop;

  ngOnInit(): void {
    this.getStopDetails();
  }

  getStopDetails(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getStopByID(id);
    this.departuresService.getDepartures(id)
      .subscribe(stop => this.departureList = stop);
  }

  goBack(): void {
    this.location.back();
  }

  getStopByID(id: number): void {
    this.departuresService.getAllStops()
      .subscribe(stops => {
        // search for the stop with the right id and saving it
        stops.forEach(stop => {
            if (stop.id.toString() === id.toString()) {
              this.stop = stop;
            }
          }
        );
      });
  }

}
