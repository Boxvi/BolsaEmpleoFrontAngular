import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilocupacionalComponent } from './perfilocupacional.component';

describe('PerfilocupacionalComponent', () => {
  let component: PerfilocupacionalComponent;
  let fixture: ComponentFixture<PerfilocupacionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilocupacionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilocupacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
