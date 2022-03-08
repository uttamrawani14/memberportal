import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor( private userService:UserService , private snack:MatSnackBar , private router:Router) { }

  public user={
    username:'',
    password:''
  }

  ngOnInit(): void {
  }

  formSubmit(){
    this.userService.addUser(this.user).subscribe(
      (data)=>{
        this.snack.open('Congratulations, your account has been created. ','',{
          duration:3000, 
        });
        this.router.navigate(['home']);
      },
      (error) => {
        //error
        console.log(error);
        // alert('something went wrong');
        this.snack.open(error.error.text, '', {
          duration: 3000,
        });
    
  });
  }
}
