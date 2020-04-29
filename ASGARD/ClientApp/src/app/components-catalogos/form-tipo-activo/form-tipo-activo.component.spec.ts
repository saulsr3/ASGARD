import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTipoActivoComponent } from './form-tipo-activo.component';

describe('FormTipoActivoComponent', () => {
  let component: FormTipoActivoComponent;
  let fixture: ComponentFixture<FormTipoActivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTipoActivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTipoActivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
