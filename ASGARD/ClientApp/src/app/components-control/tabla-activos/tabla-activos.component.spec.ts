import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaActivosComponent } from './tabla-activos.component';

describe('TablaActivosComponent', () => {
  let component: TablaActivosComponent;
  let fixture: ComponentFixture<TablaActivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaActivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaActivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
