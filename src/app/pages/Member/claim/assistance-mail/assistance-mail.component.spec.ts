import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistanceMailComponent } from './assistance-mail.component';

describe('AssistanceMailComponent', () => {
  let component: AssistanceMailComponent;
  let fixture: ComponentFixture<AssistanceMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssistanceMailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistanceMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
