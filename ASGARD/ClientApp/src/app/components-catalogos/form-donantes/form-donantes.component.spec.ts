import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDonantesComponent } from './form-donantes.component';

describe('FormDonantesComponent', () => {
  let component: FormDonantesComponent;
  let fixture: ComponentFixture<FormDonantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDonantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDonantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
