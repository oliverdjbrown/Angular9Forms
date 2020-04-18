import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdfReactiveModelDrivenComponent } from './tdf-reactive-model-driven.component';

describe('TdfReactiveModelDrivenComponent', () => {
  let component: TdfReactiveModelDrivenComponent;
  let fixture: ComponentFixture<TdfReactiveModelDrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdfReactiveModelDrivenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdfReactiveModelDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
