import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../Models/Entities/carImage';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  apiUrl: string = "https://localhost:5040/api"
  constructor(private _httpClient : HttpClient) { }
  getAll(): Observable<CarImage>{
    let allUrl = "/carimage/getall"
    return this._httpClient.get<CarImage>(allUrl)
  }
}
