import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoterManagePolicyComponent } from './moter-manage-policy.component';

describe('MoterManagePolicyComponent', () => {
  let component: MoterManagePolicyComponent;
  let fixture: ComponentFixture<MoterManagePolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoterManagePolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoterManagePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
