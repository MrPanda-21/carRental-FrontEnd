import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarRespondModel } from '../Models/Responds/carResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl= 'http://localhost:5040/cars/getall'
  constructor(private httpClient : HttpClient) { }
  getAll(): Observable<CarRespondModel>{
    return this.httpClient.get<CarRespondModel>(this.apiUrl);
  }
}
