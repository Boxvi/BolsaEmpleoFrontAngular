import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarexperienciaComponent } from './editarexperiencia.component';

describe('EditarexperienciaComponent', () => {
  let component: EditarexperienciaComponent;
  let fixture: ComponentFixture<EditarexperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarexperienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarexperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
