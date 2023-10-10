import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagmentProjectComponent } from './managment-project.component';

describe('ManagmentProjectComponent', () => {
  let component: ManagmentProjectComponent;
  let fixture: ComponentFixture<ManagmentProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagmentProjectComponent]
    });
    fixture = TestBed.createComponent(ManagmentProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
