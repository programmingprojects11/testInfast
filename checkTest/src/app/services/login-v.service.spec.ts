import { TestBed } from '@angular/core/testing';

import { LoginVService } from './login-v.service';

describe('LoginVService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginVService = TestBed.get(LoginVService);
    expect(service).toBeTruthy();
  });
});
