import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourBiItemComponent } from './four-bi-item.component';

describe('FourBiItemComponent', () => {
  let component: FourBiItemComponent;
  let fixture: ComponentFixture<FourBiItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FourBiItemComponent]
    });
    fixture = TestBed.createComponent(FourBiItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
