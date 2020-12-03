import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentdialogComponent } from './studentdialog.component';

describe('StudentdialogComponent', () => {
  let component: StudentdialogComponent;
  let fixture: ComponentFixture<StudentdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
