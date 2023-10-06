import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { telecomcustomers } from './telecomcustomers';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustserviceService {

  constructor(private http:HttpClient) { }

public CustomerRegister(cust:telecomcustomers):Observable<any>{
  return this.http.post(`http://localhost:8086/NewCust`,cust)
}

}
