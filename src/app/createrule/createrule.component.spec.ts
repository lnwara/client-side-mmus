import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateruleComponent } from './createrule.component';

describe('CreateruleComponent', () => {
  let component: CreateruleComponent;
  let fixture: ComponentFixture<CreateruleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateruleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateruleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
