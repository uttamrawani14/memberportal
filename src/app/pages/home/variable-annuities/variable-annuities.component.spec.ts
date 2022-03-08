import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableAnnuitiesComponent } from './variable-annuities.component';

describe('VariableAnnuitiesComponent', () => {
  let component: VariableAnnuitiesComponent;
  let fixture: ComponentFixture<VariableAnnuitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariableAnnuitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VariableAnnuitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
