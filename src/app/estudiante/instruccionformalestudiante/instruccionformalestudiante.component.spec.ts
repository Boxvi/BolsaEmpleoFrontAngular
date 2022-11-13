import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstruccionformalestudianteComponent } from './instruccionformalestudiante.component';

describe('InstruccionformalestudianteComponent', () => {
  let component: InstruccionformalestudianteComponent;
  let fixture: ComponentFixture<InstruccionformalestudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstruccionformalestudianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstruccionformalestudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
