import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-health-claim-status',
  templateUrl: './health-claim-status.component.html',
  styleUrls: ['./health-claim-status.component.css']
})
export class HealthClaimStatusComponent implements OnInit {

  displayClaimStatus : boolean = false;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
  
  }

  claimStatus() {
      this.displayClaimStatus = true;
  }
}
