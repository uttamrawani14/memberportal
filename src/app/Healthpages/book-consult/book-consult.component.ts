import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-consult',
  templateUrl: './book-consult.component.html',
  styleUrls: ['./book-consult.component.css']
})
export class BookConsultComponent implements OnInit {

  selected = 'option1';
  displayMatCards : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  displayCrads() {
    this.displayMatCards = true;
  }
}
