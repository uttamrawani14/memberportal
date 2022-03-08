import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthClaimStatusComponent } from './health-claim-status.component';

describe('HealthClaimStatusComponent', () => {
  let component: HealthClaimStatusComponent;
  let fixture: ComponentFixture<HealthClaimStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthClaimStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthClaimStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
