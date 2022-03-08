import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocxforLifeComponent } from './docxfor-life.component';

describe('DocxforLifeComponent', () => {
  let component: DocxforLifeComponent;
  let fixture: ComponentFixture<DocxforLifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocxforLifeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocxforLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
