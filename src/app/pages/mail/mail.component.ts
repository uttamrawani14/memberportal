import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {
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
