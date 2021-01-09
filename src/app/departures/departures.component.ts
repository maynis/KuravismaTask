import { Component, OnInit, Input } from '@angular/core';
import { Stop } from '../Stop';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {DeparturesService} from '../departures.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './departures.component.html',
  styleUrls: ['./departures.component.css']
})

export class DeparturesComponent implements OnInit {
@Input() hero: Stop;


  constructor(
    private heroService: DeparturesService,
    private route: ActivatedRoute,
    private location: Location) {

  }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

}
