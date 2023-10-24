import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionPanelSampleComponent } from './expansion-panel-sample.component';

describe('ExpansionPanelSampleComponent', () => {
  let component: ExpansionPanelSampleComponent;
  let fixture: ComponentFixture<ExpansionPanelSampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpansionPanelSampleComponent]
    });
    fixture = TestBed.createComponent(ExpansionPanelSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
