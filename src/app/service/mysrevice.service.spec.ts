import { TestBed } from '@angular/core/testing';

import { MysreviceService } from './mysrevice.service';

describe('MysreviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MysreviceService = TestBed.get(MysreviceService);
    expect(service).toBeTruthy();
  });
});
