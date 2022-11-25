import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacitacionesFormComponent } from './capacitaciones-form.component';

describe('CapacitacionesFormComponent', () => {
  let component: CapacitacionesFormComponent;
  let fixture: ComponentFixture<CapacitacionesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapacitacionesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapacitacionesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
