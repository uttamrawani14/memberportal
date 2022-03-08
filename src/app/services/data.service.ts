import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseURL: string = "http://localhost:8084";
  // baseURL: string = "http://18.189.8.183:8080";
  constructor(private http:HttpClient ) { }

  // public readPlan(plan: string)
  // {
  //   return  this.http.get(`${baseUrl}/{plan}`);
  // }

  getRepos(plan: string): Observable<any> {
    return this.http.get(this.baseURL + '/'+'xyz' +'/' + plan)
  }

}
