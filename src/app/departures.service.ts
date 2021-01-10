import { Injectable } from '@angular/core';
import {Stop} from './Stop';
import {Observable} from 'rxjs';
import {MessageService} from './message.service';
import {HttpClient} from '@angular/common/http';
import {DepartureElement} from './DepartureElement';


@Injectable({
  providedIn: 'root'
})
export class DeparturesService {

  constructor(
    private messageService: MessageService,
    private http: HttpClient,
  ) { }

  private stopsUrl = '/api/search/dd';
  private departuresUrl = `/api/plan/`;

  getAllStops(): Observable<Stop[]> {
    return this.http.get<Stop[]>(this.stopsUrl);
  }

  getDepartures(id: number): Observable<DepartureElement[]> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    console.log(this.departuresUrl + id);
    return this.http.get<DepartureElement[]>(this.departuresUrl + id);
  }

}
