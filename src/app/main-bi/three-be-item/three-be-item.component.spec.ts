import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeBeItemComponent } from './three-be-item.component';

describe('ThreeBeItemComponent', () => {
  let component: ThreeBeItemComponent;
  let fixture: ComponentFixture<ThreeBeItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThreeBeItemComponent]
    });
    fixture = TestBed.createComponent(ThreeBeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
