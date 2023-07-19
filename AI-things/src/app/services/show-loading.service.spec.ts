import { TestBed } from '@angular/core/testing';

import { ShowLoadingService } from './show-loading.service';

describe('ShowLoadingService', () => {
  let service: ShowLoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowLoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
