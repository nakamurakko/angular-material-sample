import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetalSelectionSheetComponent } from './metal-selection-sheet.component';

describe('MetalSelectionSheetComponent', () => {
  let component: MetalSelectionSheetComponent;
  let fixture: ComponentFixture<MetalSelectionSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetalSelectionSheetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MetalSelectionSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
