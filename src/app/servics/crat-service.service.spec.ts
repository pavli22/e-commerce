import { TestBed } from '@angular/core/testing';

import { CratServiceService } from './crat-service.service';

describe('CratServiceService', () => {
  let service: CratServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CratServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
