import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTipoUsuarioComponent } from './form-tipo-usuario.component';

describe('FormTipoUsuarioComponent', () => {
  let component: FormTipoUsuarioComponent;
  let fixture: ComponentFixture<FormTipoUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTipoUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTipoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
