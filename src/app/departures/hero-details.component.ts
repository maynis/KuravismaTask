import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {HeroService} from '../hero.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './departures.component.html',
  styleUrls: ['./departures.component.css']
})

export class HeroDetailsComponent implements OnInit {
@Input() hero: Hero;


  constructor(
    private heroService: HeroService,
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
