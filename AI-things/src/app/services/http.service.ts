import { HttpClient, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private http:HttpClient) { }
  postData(url:string,body:any, options:any){
   return this.http.post(url,body, options)
  }
  getData(url:string, options?:any):Observable<any>{
    return this.http.get(url,options)
  }
}
