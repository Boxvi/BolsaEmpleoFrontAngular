import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefpersonalesestudianteComponent } from './refpersonalesestudiante.component';

describe('RefpersonalesestudianteComponent', () => {
  let component: RefpersonalesestudianteComponent;
  let fixture: ComponentFixture<RefpersonalesestudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefpersonalesestudianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefpersonalesestudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
