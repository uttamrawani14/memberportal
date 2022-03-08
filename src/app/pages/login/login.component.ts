import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData={
    username:'',
    password:''
  }

  constructor(private snack:MatSnackBar ,private login:LoginService ,private router:Router) { }

  formSubmit(){

    if(this.loginData.username.trim()=='' ||this.loginData.username==null)
    {
        this.snack.open('Username is Required !! ','',{
          duration:3000,
        });
return;
    }
    this.login.generateToken(this.loginData).subscribe(
      (data:any)=>{
       


        //login..
        this.login.loginUser(data.token);
        this.login.getCurrentUser().subscribe(
          (user:any)=>{
            this.login.setUser(user);
         

            //redirect..Admin
            //redirect..Adjucator
            if(this.login.getUserRole()=="ADMIN")
            {
        
              // window.location.href='/admin'
              this.router.navigate(['buyInsurance']);

              this.login.loginStatusSubject.next(true);
            }else if(this.login.getUserRole()=="ADJUDICATOR"){
           
                // window.location.href='/user'

                this.router.navigate(['adjudicator']);
                this.login.loginStatusSubject.next(true);
             

            }else if(this.login.getUserRole()=="SR_UNDERWRITER"){
          
                this.router.navigate(['onboard']);
                this.login.loginStatusSubject.next(true);
             
            }
            else if(this.login.getUserRole()=="JR_UNDERWRITER"){
           
                this.router.navigate(['onboard']);
                this.login.loginStatusSubject.next(true);
               
            }
            else if(this.login.getUserRole()=="APPROVER"){
            
                this.router.navigate(['approver']);
                this.login.loginStatusSubject.next(true);
                
            }
            else if(this.login.getUserRole()=="AUDITOR"){

                this.router.navigate(['auditor']);
                this.login.loginStatusSubject.next(true);

            }
            else{
              //
              this.login.logout();
              //location.reload();
            }
          }
        );
      },
      (error)=>{
        console.log("error");
        console.log(error);
        this.snack.open("Invalid details" ,'',{
          duration:3000
        });
      }
    )
  }


  ngOnInit(): void {
  }

}

