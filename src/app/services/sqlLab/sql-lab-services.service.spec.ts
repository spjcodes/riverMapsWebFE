import { TestBed } from '@angular/core/testing';

import { SqlLabServicesService } from './sql-lab-services.service';

describe('SqlLabServicesService', () => {
  let service: SqlLabServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SqlLabServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
