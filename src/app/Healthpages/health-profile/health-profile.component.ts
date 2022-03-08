import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-health-profile',
  templateUrl: './health-profile.component.html',
  styleUrls: ['./health-profile.component.css']
})
export class HealthProfileComponent implements OnInit {

  selectedAddress = 'primary';
  checked = false;
  primaryNumber = '+1 1009 5678';
  secondaryNumber = '+1 6789 7895';

  constructor() { }

  ngOnInit(): void {
  }


}
