import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxSampleComponent } from './checkbox-sample.component';

describe('CheckboxSampleComponent', () => {
  let component: CheckboxSampleComponent;
  let fixture: ComponentFixture<CheckboxSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxSampleComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CheckboxSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
