import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenciaslaboralesComponent } from './referenciaslaborales.component';

describe('ReferenciaslaboralesComponent', () => {
  let component: ReferenciaslaboralesComponent;
  let fixture: ComponentFixture<ReferenciaslaboralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferenciaslaboralesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferenciaslaboralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
