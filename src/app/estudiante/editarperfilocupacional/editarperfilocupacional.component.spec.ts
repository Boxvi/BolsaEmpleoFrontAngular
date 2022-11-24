import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarperfilocupacionalComponent } from './editarperfilocupacional.component';

describe('EditarperfilocupacionalComponent', () => {
  let component: EditarperfilocupacionalComponent;
  let fixture: ComponentFixture<EditarperfilocupacionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarperfilocupacionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarperfilocupacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
