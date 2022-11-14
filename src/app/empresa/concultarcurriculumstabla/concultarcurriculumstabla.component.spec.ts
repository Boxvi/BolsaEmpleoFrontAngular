import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcultarcurriculumstablaComponent } from './concultarcurriculumstabla.component';

describe('ConcultarcurriculumstablaComponent', () => {
  let component: ConcultarcurriculumstablaComponent;
  let fixture: ComponentFixture<ConcultarcurriculumstablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcultarcurriculumstablaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcultarcurriculumstablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
