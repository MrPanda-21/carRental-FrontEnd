import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorRespondModel } from '../Models/Responds/colorResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl = 'http://localhost:5040/colors/getall'
  constructor(private httpClient : HttpClient) { }
  getAll(): Observable<ColorRespondModel>{
    return this.httpClient.get<ColorRespondModel>(this.apiUrl);
  }
}
