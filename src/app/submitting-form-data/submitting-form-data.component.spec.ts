import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmittingFormDataComponent } from './submitting-form-data.component';

describe('SubmittingFormDataComponent', () => {
  let component: SubmittingFormDataComponent;
  let fixture: ComponentFixture<SubmittingFormDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmittingFormDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmittingFormDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
