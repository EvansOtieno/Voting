import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteTimeComponent } from './vote-time.component';

describe('VoteTimeComponent', () => {
  let component: VoteTimeComponent;
  let fixture: ComponentFixture<VoteTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
