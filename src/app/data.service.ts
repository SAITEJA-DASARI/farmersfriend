import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URL } from './env';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private userObj
  setFormData(f){
    this.userObj=f;
  }
  constructor(private hc:HttpClient) { }
  getPrediction():Observable<any>{
    return this.hc.post(`${API_URL}/api/predict`,this.userObj);
  }
}
