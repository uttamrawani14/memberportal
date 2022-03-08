import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeChartComponent } from './life-chart.component';

describe('LifeChartComponent', () => {
  let component: LifeChartComponent;
  let fixture: ComponentFixture<LifeChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
