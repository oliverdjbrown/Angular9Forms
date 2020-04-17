import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressServerReceiveFormDataComponent } from './express-server-receive-form-data.component';

describe('ExpressServerReceiveFormDataComponent', () => {
  let component: ExpressServerReceiveFormDataComponent;
  let fixture: ComponentFixture<ExpressServerReceiveFormDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpressServerReceiveFormDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpressServerReceiveFormDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
