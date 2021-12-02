import { TestBed } from '@angular/core/testing';

import { ServiceDocService } from './service-doc.service';

describe('ServiceDocService', () => {
  let service: ServiceDocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceDocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
