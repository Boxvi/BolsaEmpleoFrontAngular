import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideempresaComponent } from './slideempresa.component';

describe('SlideempresaComponent', () => {
  let component: SlideempresaComponent;
  let fixture: ComponentFixture<SlideempresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideempresaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideempresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
