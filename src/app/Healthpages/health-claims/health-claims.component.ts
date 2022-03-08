import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClaimHelpdeskDialogComponent } from '../claim-helpdesk-dialog/claim-helpdesk-dialog.component';
import { PlanUploadDocComponent } from '../plan-upload-doc/plan-upload-doc.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-health-claims',
  templateUrl: './health-claims.component.html',
  styleUrls: ['./health-claims.component.css']
})


export class HealthClaimsComponent implements OnInit {

  defaultElevation = 2;
  raisedElevation = 8;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(PlanUploadDocComponent, {
      width: '500px',
      height:'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog1(): void {
    const dialogRef = this.dialog.open(ClaimHelpdeskDialogComponent, {
      width: '650px',
      height:'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  ngOnInit(): void {
  }

}
