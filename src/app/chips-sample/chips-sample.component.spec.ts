import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsSampleComponent } from './chips-sample.component';

describe('ChipsSampleComponent', () => {
  let component: ChipsSampleComponent;
  let fixture: ComponentFixture<ChipsSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipsSampleComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ChipsSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
