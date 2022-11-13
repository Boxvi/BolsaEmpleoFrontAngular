import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionlaboralestudianteComponent } from './informacionlaboralestudiante.component';

describe('InformacionlaboralestudianteComponent', () => {
  let component: InformacionlaboralestudianteComponent;
  let fixture: ComponentFixture<InformacionlaboralestudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionlaboralestudianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionlaboralestudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
