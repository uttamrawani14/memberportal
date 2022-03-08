import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthdonutComponent } from './healthdonut.component';

describe('HealthdonutComponent', () => {
  let component: HealthdonutComponent;
  let fixture: ComponentFixture<HealthdonutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthdonutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthdonutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
