import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  url = 'http://localhost:8081'
  constructor(private httpCLient:HttpClient) { }

signUp(data:any){
  return this.httpCLient.post(this.url+"/user/signup",data,{
    headers:new HttpHeaders().set('Content-Type','application/json')
  })
}
}
