import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerRespondModel } from '../Models/Responds/customerResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl = 'http://localhost:5040/customers/getall'
  constructor(private httpClient : HttpClient) { }
  getAll(): Observable<CustomerRespondModel>{
    return this.httpClient.get<CustomerRespondModel>(this.apiUrl);
  }
}
