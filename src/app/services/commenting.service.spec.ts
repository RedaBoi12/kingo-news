import { TestBed } from '@angular/core/testing';

import { CommentingService } from './commenting.service';

describe('CommentingService', () => {
  let service: CommentingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
