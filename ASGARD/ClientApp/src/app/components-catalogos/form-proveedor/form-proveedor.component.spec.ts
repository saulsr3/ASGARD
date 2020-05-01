import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProveedorComponent } from './form-proveedor.component';

describe('FormProveedorComponent', () => {
  let component: FormProveedorComponent;
  let fixture: ComponentFixture<FormProveedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormProveedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
