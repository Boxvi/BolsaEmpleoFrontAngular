import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallelofaplicadasestudianteComponent } from './detallelofaplicadasestudiante.component';

describe('DetallelofaplicadasestudianteComponent', () => {
  let component: DetallelofaplicadasestudianteComponent;
  let fixture: ComponentFixture<DetallelofaplicadasestudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallelofaplicadasestudianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallelofaplicadasestudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
