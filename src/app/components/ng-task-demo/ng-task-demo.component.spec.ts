import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTaskDemoComponent } from './ng-task-demo.component';

describe('NgTaskDemoComponent', () => {
  let component: NgTaskDemoComponent;
  let fixture: ComponentFixture<NgTaskDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTaskDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTaskDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
