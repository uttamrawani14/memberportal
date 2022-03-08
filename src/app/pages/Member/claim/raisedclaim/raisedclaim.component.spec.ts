import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaisedclaimComponent } from './raisedclaim.component';

describe('RaisedclaimComponent', () => {
  let component: RaisedclaimComponent;
  let fixture: ComponentFixture<RaisedclaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaisedclaimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaisedclaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
