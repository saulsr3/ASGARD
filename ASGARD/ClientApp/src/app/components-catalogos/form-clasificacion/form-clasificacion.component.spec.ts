import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormClasificacionComponent } from './form-clasificacion.component';

describe('FormClasificacionComponent', () => {
  let component: FormClasificacionComponent;
  let fixture: ComponentFixture<FormClasificacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormClasificacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormClasificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
