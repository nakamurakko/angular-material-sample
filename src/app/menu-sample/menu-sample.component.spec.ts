import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSampleComponent } from './menu-sample.component';

describe('MenuSampleComponent', () => {
  let component: MenuSampleComponent;
  let fixture: ComponentFixture<MenuSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
