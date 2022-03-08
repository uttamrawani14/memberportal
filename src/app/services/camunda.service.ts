import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CamundaService {

  baseURL: string = "http://localhost:8080/";
  constructor(private http: HttpClient) {
  }
 
  getRepos(userName: string): Observable<any> {
    return this.http.get(this.baseURL + 'life/' + userName)
  }
}