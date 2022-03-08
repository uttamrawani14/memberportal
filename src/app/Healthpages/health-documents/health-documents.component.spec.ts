import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthDocumentsComponent } from './health-documents.component';

describe('HealthDocumentsComponent', () => {
  let component: HealthDocumentsComponent;
  let fixture: ComponentFixture<HealthDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
