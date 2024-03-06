import { TestBed } from '@angular/core/testing';

import { GVariableService } from './g-variable.service';

describe('GVariableService', () => {
  let service: GVariableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GVariableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
