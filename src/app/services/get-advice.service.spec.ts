import { TestBed } from '@angular/core/testing';

import { GetAdviceService } from './get-advice.service';

describe('GetAdviceService', () => {
  let service: GetAdviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAdviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
