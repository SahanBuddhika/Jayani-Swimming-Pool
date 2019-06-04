import { TestBed } from '@angular/core/testing';

import { BscCsService } from './bsc-cs.service';

describe('BscCsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BscCsService = TestBed.get(BscCsService);
    expect(service).toBeTruthy();
  });
});
