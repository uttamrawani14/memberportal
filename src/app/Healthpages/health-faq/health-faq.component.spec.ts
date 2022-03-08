import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthFaqComponent } from './health-faq.component';

describe('HealthFaqComponent', () => {
  let component: HealthFaqComponent;
  let fixture: ComponentFixture<HealthFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthFaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
