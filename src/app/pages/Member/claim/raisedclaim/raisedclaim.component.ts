import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

interface AddressProof {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-raisedclaim',
  templateUrl: './raisedclaim.component.html',
  styleUrls: ['./raisedclaim.component.css']
})
export class RaisedclaimComponent implements OnInit {
 
  constructor(private _formBuilder: FormBuilder) { }
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!:FormGroup;
  addmorenom:boolean=false;
  isSelected:string='';

  addressProof: AddressProof[] = [
    {value: 'Health', viewValue: 'Health Insurance'},
    {value: 'Moter', viewValue: 'Moter Insurance'},
  ];
  addressProofControl = new FormControl(this.addressProof[0].value);
  categoryOfClaim = new FormControl(this.addressProof[0].value);
  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      addressProofControl: [''],
    });
    this.thirdFormGroup = this._formBuilder.group({
      firstCtrl: ['']
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['']
    });
  }
  
  onClick()
  {
    console.log(this.firstFormGroup.value)
    if(this.firstFormGroup.value.option=="option1")
    {
      this.addmorenom=true;
    }
  }
 

}
