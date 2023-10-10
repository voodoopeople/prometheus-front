import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixBiItemComponent } from './six-bi-item.component';

describe('SixBiItemComponent', () => {
  let component: SixBiItemComponent;
  let fixture: ComponentFixture<SixBiItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SixBiItemComponent]
    });
    fixture = TestBed.createComponent(SixBiItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
