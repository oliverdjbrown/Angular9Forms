import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayingErrorMessagesComponent } from './displaying-error-messages.component';

describe('DisplayingErrorMessagesComponent', () => {
  let component: DisplayingErrorMessagesComponent;
  let fixture: ComponentFixture<DisplayingErrorMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayingErrorMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayingErrorMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
