import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectControlValidationComponent } from './select-control-validation.component';

describe('SelectControlValidationComponent', () => {
  let component: SelectControlValidationComponent;
  let fixture: ComponentFixture<SelectControlValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectControlValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectControlValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
