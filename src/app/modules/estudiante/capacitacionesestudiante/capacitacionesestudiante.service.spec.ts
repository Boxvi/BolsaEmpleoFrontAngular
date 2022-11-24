import { TestBed } from '@angular/core/testing';

import { CapacitacionesestudianteService } from './capacitacionesestudiante.service';

describe('CapacitacionesestudianteService', () => {
  let service: CapacitacionesestudianteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CapacitacionesestudianteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
