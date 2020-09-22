import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwittergridComponent } from './twittergrid.component';

describe('TwittergridComponent', () => {
  let component: TwittergridComponent;
  let fixture: ComponentFixture<TwittergridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwittergridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwittergridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
