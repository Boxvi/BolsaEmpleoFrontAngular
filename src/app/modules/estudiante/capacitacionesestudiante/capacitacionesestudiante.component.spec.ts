import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacitacionesestudianteComponent } from './capacitacionesestudiante.component';

describe('CapacitacionesestudianteComponent', () => {
  let component: CapacitacionesestudianteComponent;
  let fixture: ComponentFixture<CapacitacionesestudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapacitacionesestudianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapacitacionesestudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
