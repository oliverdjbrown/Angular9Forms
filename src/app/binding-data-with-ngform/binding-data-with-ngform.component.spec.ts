import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingDataWithNgformComponent } from './binding-data-with-ngform.component';

describe('BindingDataWithNgformComponent', () => {
  let component: BindingDataWithNgformComponent;
  let fixture: ComponentFixture<BindingDataWithNgformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindingDataWithNgformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingDataWithNgformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
