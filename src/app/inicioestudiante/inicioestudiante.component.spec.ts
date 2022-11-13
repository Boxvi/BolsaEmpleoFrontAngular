import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioestudianteComponent } from './inicioestudiante.component';

describe('InicioestudianteComponent', () => {
  let component: InicioestudianteComponent;
  let fixture: ComponentFixture<InicioestudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioestudianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioestudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
