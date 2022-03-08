import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanUploadDocComponent } from './plan-upload-doc.component';

describe('PlanUploadDocComponent', () => {
  let component: PlanUploadDocComponent;
  let fixture: ComponentFixture<PlanUploadDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanUploadDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanUploadDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
