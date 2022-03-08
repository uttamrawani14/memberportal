import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../health-claims/fileaclaim/fileaclaim.component';
import { HealthClaimsComponent } from '../health-claims/health-claims.component';

@Component({
  selector: 'app-claim-helpdesk-dialog',
  templateUrl: './claim-helpdesk-dialog.component.html',
  styleUrls: ['./claim-helpdesk-dialog.component.css']
})
export class ClaimHelpdeskDialogComponent  {

  constructor(
    public dialogRef: MatDialogRef<HealthClaimsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

 

}
