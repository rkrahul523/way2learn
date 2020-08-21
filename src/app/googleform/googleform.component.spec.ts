import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleformComponent } from './googleform.component';

describe('GoogleformComponent', () => {
  let component: GoogleformComponent;
  let fixture: ComponentFixture<GoogleformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
