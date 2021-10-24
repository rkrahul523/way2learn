import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillHomeComponent } from './bill-home.component';

describe('BillHomeComponent', () => {
  let component: BillHomeComponent;
  let fixture: ComponentFixture<BillHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
