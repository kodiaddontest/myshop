import { TestBed, inject } from '@angular/core/testing';

import { AfterLoginGuardService } from './after-login-guard.service';

describe('AfterLoginGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AfterLoginGuardService]
    });
  });

  it('should be created', inject([AfterLoginGuardService], (service: AfterLoginGuardService) => {
    expect(service).toBeTruthy();
  }));
});
