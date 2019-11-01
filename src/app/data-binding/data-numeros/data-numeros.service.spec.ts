import { TestBed } from '@angular/core/testing';

import { DataNumerosService } from './data-numeros.service';

describe('DataNumerosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataNumerosService = TestBed.get(DataNumerosService);
    expect(service).toBeTruthy();
  });
});
