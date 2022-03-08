import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookConsultComponent } from './book-consult.component';

describe('BookConsultComponent', () => {
  let component: BookConsultComponent;
  let fixture: ComponentFixture<BookConsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookConsultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
