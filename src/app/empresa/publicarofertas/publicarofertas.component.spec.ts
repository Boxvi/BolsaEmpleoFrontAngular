import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicarofertasComponent } from './publicarofertas.component';

describe('PublicarofertasComponent', () => {
  let component: PublicarofertasComponent;
  let fixture: ComponentFixture<PublicarofertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicarofertasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicarofertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
