import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-health-email',
  templateUrl: './health-email.component.html',
  styleUrls: ['./health-email.component.css']
})
export class HealthEmailComponent implements OnInit {

  isActive = false;
  public Editor = ClassicEditor;
  constructor(private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  onsend(){
    this.snack.open("Message Send Successfully" ,'',{
      duration:3000
    });
  }


}
