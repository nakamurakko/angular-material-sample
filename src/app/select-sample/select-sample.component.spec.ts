import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSampleComponent } from './select-sample.component';

describe('SelectSampleComponent', () => {
  let component: SelectSampleComponent;
  let fixture: ComponentFixture<SelectSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectSampleComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SelectSampleComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
