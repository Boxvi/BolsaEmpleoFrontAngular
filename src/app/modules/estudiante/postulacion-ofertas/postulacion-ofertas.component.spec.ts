import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulacionOfertasComponent } from './postulacion-ofertas.component';

describe('PostulacionOfertasComponent', () => {
  let component: PostulacionOfertasComponent;
  let fixture: ComponentFixture<PostulacionOfertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostulacionOfertasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostulacionOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
