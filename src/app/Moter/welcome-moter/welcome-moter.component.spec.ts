import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeMoterComponent } from './welcome-moter.component';

describe('WelcomeMoterComponent', () => {
  let component: WelcomeMoterComponent;
  let fixture: ComponentFixture<WelcomeMoterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeMoterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeMoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
