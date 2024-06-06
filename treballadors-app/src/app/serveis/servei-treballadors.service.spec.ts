import { TestBed } from '@angular/core/testing';

import { ServeiTreballadorsService } from './servei-treballadors.service';

describe('ServeiTreballadorsService', () => {
  let service: ServeiTreballadorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeiTreballadorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
