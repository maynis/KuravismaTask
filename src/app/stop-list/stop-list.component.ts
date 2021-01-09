import {Component, OnInit} from '@angular/core';
import {Stop} from '../Stop';
import {DeparturesService} from '../departures.service';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './stop-list.component.html',
  styleUrls: ['./stop-list.component.css']
})
export class StopListComponent implements OnInit {

  constructor(private departuresService: DeparturesService) {

  }

  heroes: Stop[];
  selectedHero: Stop;

  getHeroes(): void {
    this.departuresService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}
