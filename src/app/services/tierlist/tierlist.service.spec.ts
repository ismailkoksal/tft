import { TestBed } from '@angular/core/testing';

import { TierlistService } from './tierlist.service';

describe('TierlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TierlistService = TestBed.get(TierlistService);
    expect(service).toBeTruthy();
  });
});
