import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class SmartphoneService {

  apiUrl = 'https://phone-space-api.onrender.com';

  getSmartphones(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/phone-space/smartphones`);
  }

  constructor(private http: HttpClient) { }
}
