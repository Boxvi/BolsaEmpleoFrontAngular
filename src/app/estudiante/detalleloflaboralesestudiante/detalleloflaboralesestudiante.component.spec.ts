import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleloflaboralesestudianteComponent } from './detalleloflaboralesestudiante.component';

describe('DetalleloflaboralesestudianteComponent', () => {
  let component: DetalleloflaboralesestudianteComponent;
  let fixture: ComponentFixture<DetalleloflaboralesestudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleloflaboralesestudianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleloflaboralesestudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
