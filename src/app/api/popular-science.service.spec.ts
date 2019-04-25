import { TestBed } from '@angular/core/testing';

import { PopularScienceService } from './popular-science.service';

describe('PopularScienceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PopularScienceService = TestBed.get(PopularScienceService);
    expect(service).toBeTruthy();
  });
});
