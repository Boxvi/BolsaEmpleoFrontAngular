import { ComponentFixture, TestBed } from '@angular/core/testing';

import { cvComponent } from './cv.component';

describe('CvComponent', () => {
  let component: cvComponent;
  let fixture: ComponentFixture<cvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ cvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(cvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
