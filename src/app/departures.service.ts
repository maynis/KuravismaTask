import { Injectable } from '@angular/core';
import {Stop} from './Stop';
import {STOPS} from './mock-heroes';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class DeparturesService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Stop[]> {
    this.messageService.add('DeparturesService: fetched stop-list');
    return of(STOPS);
  }

  getHero(id: number): Observable<Stop> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(STOPS.find(hero => hero.id === id));
  }
}
