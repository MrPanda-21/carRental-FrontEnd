import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Brand } from '../Models/Entities/brand';
import { BrandResponseModel } from '../Models/Responds/brandResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl = 'https://localhost:5001/brands/getall';
  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<BrandResponseModel> {
    return this.httpClient.get<BrandResponseModel>(this.apiUrl);
  }
}
