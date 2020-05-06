import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCargoComponent } from './form-cargo.component';

describe('FormCargoComponent', () => {
  let component: FormCargoComponent;
  let fixture: ComponentFixture<FormCargoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCargoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
