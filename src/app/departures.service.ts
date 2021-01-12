import { Injectable } from '@angular/core';
import {Stop} from './Stop';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {DepartureElement} from './DepartureElement';


@Injectable({
  providedIn: 'root'
})
export class DeparturesService {

  constructor(
    private http: HttpClient,
  ) { }

  private stopsUrl = '/api/search/dd';
  private departuresUrl = `/api/plan/`;

  getAllStops(): Observable<Stop[]> {
    return this.http.get<Stop[]>(this.stopsUrl);
  }

  getDepartures(id: number): Observable<DepartureElement[]> {
    return this.http.get<DepartureElement[]>(this.departuresUrl + id);
  }

}
