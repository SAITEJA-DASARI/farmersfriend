import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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
    return this.hc.get('/user/predict',this.userObj);
  }
}
