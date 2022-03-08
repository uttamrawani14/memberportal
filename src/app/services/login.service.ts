import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import baseUrl from './helper';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public loginStatusSubject=new Subject<boolean>();

  constructor(private http:HttpClient ) {}

  //current User
  public getCurrentUser()
  {
    return this.http.get(`${baseUrl}/current-user`);
  }

  public generateToken(loginData:any){
    return this.http.post(`${baseUrl}/generate-token`,loginData);
  }

  public loginUser(token:any)
  {
    localStorage.setItem('token' ,token);
    return true;
  }

  public isLoggedIn()
  {
    let tokenStr=localStorage.getItem("token")
    if(tokenStr==undefined || tokenStr=='' || tokenStr==null)
    {
      return false;
    }
    else{
      return true;
    }
  }


//logout :remove token from token local storage
public logout()
{
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  return true;
}

//get token
public getToken()
{
  return localStorage.getItem("token");
}

//set UserDetails
public setUser(user:any){
  localStorage.setItem('user',JSON.stringify(user));
}

//getUser
public getUser()
{
  let userStr=localStorage.getItem("user");
  if(userStr!=null)
  {
    return JSON.parse(userStr);
  }else{
    this.logout();
    return null;
  }
}

//get user role
public getUserRole()
{
  let user=this.getUser();
  return user.authorities[0].authority;
}
}

