import { TestBed, inject } from '@angular/core/testing';

import { BaterieService } from './baterie.service';

describe('BaterieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaterieService]
    });
  });

  it('should be created', inject([BaterieService], (service: BaterieService) => {
    expect(service).toBeTruthy();
  }));
});
