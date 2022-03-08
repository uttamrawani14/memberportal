import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthClaimViewComponent } from './health-claim-view.component';

describe('HealthClaimViewComponent', () => {
  let component: HealthClaimViewComponent;
  let fixture: ComponentFixture<HealthClaimViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthClaimViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthClaimViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
