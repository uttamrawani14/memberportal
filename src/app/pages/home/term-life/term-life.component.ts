import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-term-life',
  templateUrl: './term-life.component.html',
  styleUrls: ['./term-life.component.css']
})
export class TermLifeComponent implements OnInit {

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
