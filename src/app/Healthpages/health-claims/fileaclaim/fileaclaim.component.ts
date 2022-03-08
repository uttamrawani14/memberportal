import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UploadDialogComponent } from '../../upload-dialog/upload-dialog.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-fileaclaim',
  templateUrl: './fileaclaim.component.html',
  styleUrls: ['./fileaclaim.component.css']
})
export class FileaclaimComponent implements OnInit {

  
constructor(public dialog: MatDialog) {}

openDialog(): void {
  const dialogRef = this.dialog.open(UploadDialogComponent, {
    width: '500px',
    height:'auto'
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
}

  ngOnInit(): void {
  }

}
