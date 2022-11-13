import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilempresasestudianteComponent } from './perfilempresasestudiante.component';

describe('PerfilempresasestudianteComponent', () => {
  let component: PerfilempresasestudianteComponent;
  let fixture: ComponentFixture<PerfilempresasestudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilempresasestudianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilempresasestudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
