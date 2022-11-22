import { TestBed } from '@angular/core/testing';

import { CurriculumEstudianteService } from './curriculum-estudiante.service';

describe('CurriculumEstudianteService', () => {
  let service: CurriculumEstudianteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurriculumEstudianteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
