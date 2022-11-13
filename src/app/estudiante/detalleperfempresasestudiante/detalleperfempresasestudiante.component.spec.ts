import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleperfempresasestudianteComponent } from './detalleperfempresasestudiante.component';

describe('DetalleperfempresasestudianteComponent', () => {
  let component: DetalleperfempresasestudianteComponent;
  let fixture: ComponentFixture<DetalleperfempresasestudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleperfempresasestudianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleperfempresasestudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
