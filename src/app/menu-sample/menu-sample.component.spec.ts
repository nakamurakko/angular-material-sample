import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSampleComponent } from './menu-sample.component';

describe('MenuSampleComponent', () => {
  let component: MenuSampleComponent;
  let fixture: ComponentFixture<MenuSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuSampleComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MenuSampleComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
