import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneBiItemComponent } from './one-bi-item.component';

describe('OneBiItemComponent', () => {
  let component: OneBiItemComponent;
  let fixture: ComponentFixture<OneBiItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneBiItemComponent]
    });
    fixture = TestBed.createComponent(OneBiItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
