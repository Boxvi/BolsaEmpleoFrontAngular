import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertaslaboralesComponent } from './ofertaslaborales.component';

describe('OfertaslaboralesComponent', () => {
  let component: OfertaslaboralesComponent;
  let fixture: ComponentFixture<OfertaslaboralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfertaslaboralesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfertaslaboralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
