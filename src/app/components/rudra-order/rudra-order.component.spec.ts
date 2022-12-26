import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RudraOrderComponent } from './rudra-order.component';

describe('RudraOrderComponent', () => {
  let component: RudraOrderComponent;
  let fixture: ComponentFixture<RudraOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RudraOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RudraOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
