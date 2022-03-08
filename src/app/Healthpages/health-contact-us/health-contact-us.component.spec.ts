import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthContactUsComponent } from './health-contact-us.component';

describe('HealthContactUsComponent', () => {
  let component: HealthContactUsComponent;
  let fixture: ComponentFixture<HealthContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthContactUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
