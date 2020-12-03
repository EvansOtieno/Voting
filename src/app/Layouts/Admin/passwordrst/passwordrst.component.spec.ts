import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordrstComponent } from './passwordrst.component';

describe('PasswordrstComponent', () => {
  let component: PasswordrstComponent;
  let fixture: ComponentFixture<PasswordrstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordrstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordrstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
