import { TestBed } from '@angular/core/testing';

import { DeparturesService } from './departures.service';

describe('HeroService', () => {
  let service: DeparturesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeparturesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
