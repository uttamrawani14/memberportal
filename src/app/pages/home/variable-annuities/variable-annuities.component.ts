import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ManageComponent } from '../manage/manage.component';

@Component({
  selector: 'app-variable-annuities',
  templateUrl: './variable-annuities.component.html',
  styleUrls: ['./variable-annuities.component.css']
})
export class VariableAnnuitiesComponent implements OnInit {

  constructor(public dialog: MatDialog ) { }
  show:boolean=false;
  addmorenom:boolean=false;
  ngOnInit(): void {
  }

  openDialog() {
    this.show=true;
    this.addmorenom=true;
  }
  openDialog1() {
    this.show=false;
    this.addmorenom=false;
  }

}
