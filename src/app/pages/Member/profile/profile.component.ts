import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  selectedAddress = 'primary';
  checked = false;
  primaryNumber = '+1 1009 5678';
  secondaryNumber = '+1 6789 7895';

  constructor() { }

  ngOnInit(): void {
  }

}
