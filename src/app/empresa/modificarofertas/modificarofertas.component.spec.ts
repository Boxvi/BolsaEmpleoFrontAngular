import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarofertasComponent } from './modificarofertas.component';

describe('ModificarofertasComponent', () => {
  let component: ModificarofertasComponent;
  let fixture: ComponentFixture<ModificarofertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarofertasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarofertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
