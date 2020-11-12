import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContRegComponent } from './cont-reg.component';

describe('ContRegComponent', () => {
  let component: ContRegComponent;
  let fixture: ComponentFixture<ContRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContRegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
