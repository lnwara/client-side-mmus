import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelgridComponent } from './panelgrid.component';

describe('PanelgridComponent', () => {
  let component: PanelgridComponent;
  let fixture: ComponentFixture<PanelgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
