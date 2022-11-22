import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilOcupacionalComponent } from './perfil-ocupacional.component';

describe('PerfilOcupacionalComponent', () => {
  let component: PerfilOcupacionalComponent;
  let fixture: ComponentFixture<PerfilOcupacionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilOcupacionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilOcupacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
