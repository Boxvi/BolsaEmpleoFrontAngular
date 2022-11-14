import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarcurriculumsComponent } from './consultarcurriculums.component';

describe('ConsultarcurriculumsComponent', () => {
  let component: ConsultarcurriculumsComponent;
  let fixture: ComponentFixture<ConsultarcurriculumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarcurriculumsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarcurriculumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
