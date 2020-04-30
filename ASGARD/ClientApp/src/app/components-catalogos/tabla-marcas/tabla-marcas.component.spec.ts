import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaMarcasComponent } from './tabla-marcas.component';

describe('TablaMarcasComponent', () => {
  let component: TablaMarcasComponent;
  let fixture: ComponentFixture<TablaMarcasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaMarcasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaMarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
