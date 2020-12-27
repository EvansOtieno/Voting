import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetDatabaseComponent } from './reset-database.component';

describe('ResetDatabaseComponent', () => {
  let component: ResetDatabaseComponent;
  let fixture: ComponentFixture<ResetDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetDatabaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
