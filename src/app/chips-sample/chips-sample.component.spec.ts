import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsSampleComponent } from './chips-sample.component';

describe('ChipsSampleComponent', () => {
  let component: ChipsSampleComponent;
  let fixture: ComponentFixture<ChipsSampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChipsSampleComponent]
    });
    fixture = TestBed.createComponent(ChipsSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
