import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevenBiItemComponent } from './seven-bi-item.component';

describe('SevenBiItemComponent', () => {
  let component: SevenBiItemComponent;
  let fixture: ComponentFixture<SevenBiItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SevenBiItemComponent]
    });
    fixture = TestBed.createComponent(SevenBiItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
