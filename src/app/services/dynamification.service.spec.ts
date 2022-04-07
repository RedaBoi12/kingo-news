import { TestBed } from '@angular/core/testing';

import { DynamificationService } from './dynamification.service';

describe('DynamificationService', () => {
  let service: DynamificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
