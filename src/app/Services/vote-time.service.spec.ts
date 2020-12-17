import { TestBed } from '@angular/core/testing';

import { VoteTimeService } from './vote-time.service';

describe('VoteTimeService', () => {
  let service: VoteTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoteTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
