import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locate-hospital',
  templateUrl: './locate-hospital.component.html',
  styleUrls: ['./locate-hospital.component.css']
})
export class LocateHospitalComponent implements OnInit {

  displayMsg : string = 'No Records found!';
  displayTable : boolean = false;
  displayRow : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  showTable() {
    this.displayTable = true;
    this.displayRow = false;
  }


}
