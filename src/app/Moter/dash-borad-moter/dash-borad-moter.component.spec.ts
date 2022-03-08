import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBoradMoterComponent } from './dash-borad-moter.component';

describe('DashBoradMoterComponent', () => {
  let component: DashBoradMoterComponent;
  let fixture: ComponentFixture<DashBoradMoterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashBoradMoterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashBoradMoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
