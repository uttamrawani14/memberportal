import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WholeLifeComponent } from './whole-life.component';

describe('WholeLifeComponent', () => {
  let component: WholeLifeComponent;
  let fixture: ComponentFixture<WholeLifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WholeLifeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WholeLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
