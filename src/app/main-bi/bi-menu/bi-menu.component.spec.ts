import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiMenuComponent } from './bi-menu.component';

describe('BiMenuComponent', () => {
  let component: BiMenuComponent;
  let fixture: ComponentFixture<BiMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BiMenuComponent]
    });
    fixture = TestBed.createComponent(BiMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
