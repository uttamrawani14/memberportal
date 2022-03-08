import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimHelpdeskDialogComponent } from './claim-helpdesk-dialog.component';

describe('ClaimHelpdeskDialogComponent', () => {
  let component: ClaimHelpdeskDialogComponent;
  let fixture: ComponentFixture<ClaimHelpdeskDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimHelpdeskDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimHelpdeskDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
