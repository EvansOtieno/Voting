import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestanttableComponent } from './contestanttable.component';

describe('ContestanttableComponent', () => {
  let component: ContestanttableComponent;
  let fixture: ComponentFixture<ContestanttableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContestanttableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestanttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
