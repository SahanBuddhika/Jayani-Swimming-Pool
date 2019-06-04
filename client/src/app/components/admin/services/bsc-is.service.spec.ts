import { TestBed } from '@angular/core/testing';

import { BscIsService } from './bsc-is.service';

describe('BscIsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BscIsService = TestBed.get(BscIsService);
    expect(service).toBeTruthy();
  });
});
