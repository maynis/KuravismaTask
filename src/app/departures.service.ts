import { Injectable } from '@angular/core';
import {Stop} from './Stop';
import {STOPS} from './mock-heroes';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DeparturesService {

  constructor(
    private messageService: MessageService,
    private http: HttpClient,
  ) { }

  private stopsUrl = '/api/search/dd';


  getAllStops(): Observable<Stop[]> {
    return this.http.get<Stop[]>(this.stopsUrl);
  }


  getStopDetails(id: number): Observable<Stop> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(STOPS.find(stop => stop.id === id));
  }
}
