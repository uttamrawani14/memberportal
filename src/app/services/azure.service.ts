import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Url from './Azure';

@Injectable({
  providedIn: 'root'
})
export class AzureService {

  private REST_API_SERVER = "https://mycamunda-flowz.azurewebsites.net/onboarding/getquote";

  constructor(private _http: HttpClient) { }

  public SendData(onboard:any)
  {
    return  this._http.post(`${Url}/onboarding/proposal`,onboard);
  }

  public GetData(assign:any)
  {
    return this._http.post(`${Url}/onboarding/usertask`,assign);
  }


  public GetDataByQouteNumber(assign:any)
  {
    return this._http.post(`${Url}/onboarding/getquote`,assign);
  }

  public SendDecision(assign:any)
  {
    return this._http.post(`${Url}/onboarding/uwdecision`,assign);
  }

}
