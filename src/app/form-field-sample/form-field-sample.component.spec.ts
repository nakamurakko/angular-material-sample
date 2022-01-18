import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldSampleComponent } from './form-field-sample.component';

describe('FormFieldSampleComponent', () => {
  let component: FormFieldSampleComponent;
  let fixture: ComponentFixture<FormFieldSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFieldSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
