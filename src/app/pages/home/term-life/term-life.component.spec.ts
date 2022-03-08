import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermLifeComponent } from './term-life.component';

describe('TermLifeComponent', () => {
  let component: TermLifeComponent;
  let fixture: ComponentFixture<TermLifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermLifeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TermLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
