import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadDeptComponent } from './head-dept.component';

describe('HeadDeptComponent', () => {
  let component: HeadDeptComponent;
  let fixture: ComponentFixture<HeadDeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadDeptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
