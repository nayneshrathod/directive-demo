import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NdswitchDemoComponent } from './ndswitch-demo.component';

describe('NdswitchDemoComponent', () => {
  let component: NdswitchDemoComponent;
  let fixture: ComponentFixture<NdswitchDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NdswitchDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NdswitchDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
