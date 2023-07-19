import { TestBed } from '@angular/core/testing';

import { MicrophoneBusyService } from './microphone-busy.service';

describe('MicrophoneBusyService', () => {
  let service: MicrophoneBusyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MicrophoneBusyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
