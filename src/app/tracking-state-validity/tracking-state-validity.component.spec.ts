import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingStateValidityComponent } from './tracking-state-validity.component';

describe('TrackingStateValidityComponent', () => {
  let component: TrackingStateValidityComponent;
  let fixture: ComponentFixture<TrackingStateValidityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackingStateValidityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingStateValidityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
