import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevofertaLaboralComponent } from './revoferta-laboral.component';

describe('RevofertaLaboralComponent', () => {
  let component: RevofertaLaboralComponent;
  let fixture: ComponentFixture<RevofertaLaboralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevofertaLaboralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevofertaLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
