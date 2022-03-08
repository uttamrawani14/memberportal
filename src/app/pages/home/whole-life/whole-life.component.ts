import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whole-life',
  templateUrl: './whole-life.component.html',
  styleUrls: ['./whole-life.component.css']
})
export class WholeLifeComponent implements OnInit {

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
