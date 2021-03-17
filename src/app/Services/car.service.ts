import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailDto } from '../Models/DTOs/carDetailDto';
import { Car } from '../Models/Entities/car';
import { ListResponseModel } from '../Models/Responds/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl= 'https://localhost:5040'
  constructor(private httpClient : HttpClient) { }
  getAll(): Observable<ListResponseModel<Car>>{
    let getall= this.apiUrl + "/cars/getall"
    return this.httpClient.get<ListResponseModel<Car>>(getall);
  }
  getCarDetail(): Observable<CarDetailDto>{
    let detailUrl = this.apiUrl + "/cars/getdetail"
    return this.httpClient.get<CarDetailDto>(detailUrl)
  }
}
