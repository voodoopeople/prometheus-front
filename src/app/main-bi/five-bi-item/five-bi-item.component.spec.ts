import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveBiItemComponent } from './five-bi-item.component';

describe('FiveBiItemComponent', () => {
  let component: FiveBiItemComponent;
  let fixture: ComponentFixture<FiveBiItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiveBiItemComponent]
    });
    fixture = TestBed.createComponent(FiveBiItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
