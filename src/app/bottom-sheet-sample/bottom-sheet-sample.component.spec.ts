import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetSampleComponent } from './bottom-sheet-sample.component';

describe('BottomSheetSampleComponent', () => {
  let component: BottomSheetSampleComponent;
  let fixture: ComponentFixture<BottomSheetSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomSheetSampleComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BottomSheetSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
