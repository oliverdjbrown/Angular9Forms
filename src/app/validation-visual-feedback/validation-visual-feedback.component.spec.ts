import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationVisualFeedbackComponent } from './validation-visual-feedback.component';

describe('ValidationVisualFeedbackComponent', () => {
  let component: ValidationVisualFeedbackComponent;
  let fixture: ComponentFixture<ValidationVisualFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationVisualFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationVisualFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
