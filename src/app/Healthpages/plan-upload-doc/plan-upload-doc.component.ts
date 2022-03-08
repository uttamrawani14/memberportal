import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../health-claims/fileaclaim/fileaclaim.component';
import { HealthClaimsComponent } from '../health-claims/health-claims.component';

@Component({
  selector: 'app-plan-upload-doc',
  templateUrl: './plan-upload-doc.component.html',
  styleUrls: ['./plan-upload-doc.component.css']
})
export class PlanUploadDocComponent implements OnInit {

 

 
  dataimage:any;

   @ViewChild('fileInput') fileInput: ElementRef;
  fileAttr = 'Choose File';

  constructor(
    public dialogRef: MatDialogRef<HealthClaimsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }


  uploadFileEvt(imgFile: any) {
    if (imgFile.target.files && imgFile.target.files[0]) {
      this.fileAttr = '';
      Array.from(imgFile.target.files).forEach((file: File) => {
        this.fileAttr += file.name ;
      });

      // HTML5 FileReader API
      let reader = new FileReader();
      reader.onload = (e: any) => {
        let image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          let imgBase64Path = e.target.result;
          console.log(imgBase64Path);
          this.dataimage = imgBase64Path;
        };
      };
      reader.readAsDataURL(imgFile.target.files[0]);
      
      // Reset if duplicate image uploaded again
      this.fileInput.nativeElement.value = "";
    } else {
      this.fileAttr = 'Choose File';
    }
  }

  ngOnInit(): void {
  }

}
