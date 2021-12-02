import { TestBed } from '@angular/core/testing';

import { ServiceNoticiaService } from './service-noticia.service';

describe('ServiceNoticiaService', () => {
  let service: ServiceNoticiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceNoticiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
