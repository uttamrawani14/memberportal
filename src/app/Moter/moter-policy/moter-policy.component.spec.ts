import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoterPolicyComponent } from './moter-policy.component';

describe('MoterPolicyComponent', () => {
  let component: MoterPolicyComponent;
  let fixture: ComponentFixture<MoterPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoterPolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoterPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
