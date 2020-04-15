import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingDataToModelComponent } from './binding-data-to-model.component';

describe('BindingDataToModelComponent', () => {
  let component: BindingDataToModelComponent;
  let fixture: ComponentFixture<BindingDataToModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindingDataToModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingDataToModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
