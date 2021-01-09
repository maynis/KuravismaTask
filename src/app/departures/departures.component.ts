import { Component, OnInit, Input } from '@angular/core';
import { Stop } from '../Stop';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {DeparturesService} from '../departures.service';

@Component({
  selector: 'app-departures',
  templateUrl: './departures.component.html',
  styleUrls: ['./departures.component.css']
})

export class DeparturesComponent implements OnInit {
@Input() stop: Stop;

  constructor(
    private departuresService: DeparturesService,
    private route: ActivatedRoute,
    private location: Location) {}

  ngOnInit(): void {
    this.getStopDetails();
  }

  getStopDetails(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.departuresService.getStopDetails(id)
      .subscribe(stop => this.stop = stop);
  }

  goBack(): void {
    this.location.back();
  }

}
