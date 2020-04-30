import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaProveedorComponent } from './tabla-proveedor.component';

describe('TablaProveedorComponent', () => {
  let component: TablaProveedorComponent;
  let fixture: ComponentFixture<TablaProveedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaProveedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
