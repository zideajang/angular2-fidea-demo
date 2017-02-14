/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PopularService } from './popular.service';

describe('PopularService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PopularService]
    });
  });

  it('should ...', inject([PopularService], (service: PopularService) => {
    expect(service).toBeTruthy();
  }));
});
