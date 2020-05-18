import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDerectiveDemoComponent } from './custom-derective-demo.component';

describe('CustomDerectiveDemoComponent', () => {
  let component: CustomDerectiveDemoComponent;
  let fixture: ComponentFixture<CustomDerectiveDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomDerectiveDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDerectiveDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
