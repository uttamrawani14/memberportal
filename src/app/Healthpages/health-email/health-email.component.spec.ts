import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthEmailComponent } from './health-email.component';

describe('HealthEmailComponent', () => {
  let component: HealthEmailComponent;
  let fixture: ComponentFixture<HealthEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
