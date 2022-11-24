import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdireferenciaslaboralesComponent } from './edireferenciaslaborales.component';

describe('EdireferenciaslaboralesComponent', () => {
  let component: EdireferenciaslaboralesComponent;
  let fixture: ComponentFixture<EdireferenciaslaboralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdireferenciaslaboralesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdireferenciaslaboralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
