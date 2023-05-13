import { TestBed } from '@angular/core/testing';

import { ClusterServicesService } from './cluster-services.service';

describe('ClusterServicesService', () => {
  let service: ClusterServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClusterServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
