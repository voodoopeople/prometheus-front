import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoBiItemComponent } from './two-bi-item.component';

describe('TwoBiItemComponent', () => {
  let component: TwoBiItemComponent;
  let fixture: ComponentFixture<TwoBiItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwoBiItemComponent]
    });
    fixture = TestBed.createComponent(TwoBiItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
