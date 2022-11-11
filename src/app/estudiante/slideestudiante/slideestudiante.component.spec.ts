import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideestudianteComponent } from './slideestudiante.component';

describe('SlideestudianteComponent', () => {
  let component: SlideestudianteComponent;
  let fixture: ComponentFixture<SlideestudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideestudianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideestudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
