import { TestBed, inject } from '@angular/core/testing';

import { DepserviceService } from './depservice.service';

describe('DepserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DepserviceService]
    });
  });

  it('should be created', inject([DepserviceService], (service: DepserviceService) => {
    expect(service).toBeTruthy();
  }));
});
