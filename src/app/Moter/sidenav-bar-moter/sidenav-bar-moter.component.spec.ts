import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavBarMoterComponent } from './sidenav-bar-moter.component';

describe('SidenavBarMoterComponent', () => {
  let component: SidenavBarMoterComponent;
  let fixture: ComponentFixture<SidenavBarMoterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavBarMoterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavBarMoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
