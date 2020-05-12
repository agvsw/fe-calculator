import { TestBed } from '@angular/core/testing';

import { AritchService } from './aritch.service';

describe('AritchService', () => {
  let service: AritchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AritchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
