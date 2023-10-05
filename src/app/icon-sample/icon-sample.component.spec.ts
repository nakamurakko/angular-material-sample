import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSampleComponent } from './icon-sample.component';

describe('IconSampleComponent', () => {
  let component: IconSampleComponent;
  let fixture: ComponentFixture<IconSampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconSampleComponent]
    });
    fixture = TestBed.createComponent(IconSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
