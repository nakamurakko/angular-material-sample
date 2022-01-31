import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarSampleComponent } from './progress-bar-sample.component';

describe('ProgressBarSampleComponent', () => {
  let component: ProgressBarSampleComponent;
  let fixture: ComponentFixture<ProgressBarSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressBarSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
