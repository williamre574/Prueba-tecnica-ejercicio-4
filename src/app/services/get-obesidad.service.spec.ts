import { TestBed } from '@angular/core/testing';

import { GetObesidadService } from './get-obesidad.service';

describe('GetObesidadService', () => {
  let service: GetObesidadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetObesidadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
