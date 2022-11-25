import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReportesEstadisticosComponent } from './list-reportes-estadisticos.component';

describe('ListReportesEstadisticosComponent', () => {
  let component: ListReportesEstadisticosComponent;
  let fixture: ComponentFixture<ListReportesEstadisticosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListReportesEstadisticosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListReportesEstadisticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
