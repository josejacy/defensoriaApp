import { TestBed } from '@angular/core/testing';

import { DiarioEletronicoService } from './diario-eletronico.service';

describe('DiarioEletronicoService', () => {
  let service: DiarioEletronicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiarioEletronicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
