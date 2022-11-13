import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertasaplicadasestudianteComponent } from './ofertasaplicadasestudiante.component';

describe('OfertasaplicadasestudianteComponent', () => {
  let component: OfertasaplicadasestudianteComponent;
  let fixture: ComponentFixture<OfertasaplicadasestudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfertasaplicadasestudianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfertasaplicadasestudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
