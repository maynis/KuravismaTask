import { Component, OnInit } from '@angular/core';
import { Stop } from '../Stop';
import { DeparturesService } from '../departures.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  stops: Stop[] = [];
  constructor(private heroService: DeparturesService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getAllStops()
      .subscribe(stops => this.stops = stops.slice(1, 5));
  }

}
