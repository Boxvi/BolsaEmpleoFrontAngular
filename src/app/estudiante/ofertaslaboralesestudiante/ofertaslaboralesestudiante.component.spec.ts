import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertaslaboralesestudianteComponent } from './ofertaslaboralesestudiante.component';

describe('OfertaslaboralesestudianteComponent', () => {
  let component: OfertaslaboralesestudianteComponent;
  let fixture: ComponentFixture<OfertaslaboralesestudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfertaslaboralesestudianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfertaslaboralesestudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
