import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAreasNegocioComponent } from './form-areas-negocio.component';

describe('FormAreasNegocioComponent', () => {
  let component: FormAreasNegocioComponent;
  let fixture: ComponentFixture<FormAreasNegocioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAreasNegocioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAreasNegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
