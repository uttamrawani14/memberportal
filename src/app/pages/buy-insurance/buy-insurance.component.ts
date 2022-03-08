import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-insurance',
  templateUrl: './buy-insurance.component.html',
  styleUrls: ['./buy-insurance.component.css']
})
export class BuyInsuranceComponent implements OnInit {
name:string;
  constructor() {
    this.get();
   }

  ngOnInit(): void {
  }

  get()
  {
    this.name=localStorage.getItem("token");
  }

}
