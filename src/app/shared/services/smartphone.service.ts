import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class SmartphoneService {

  // apiUrl = 'https://phone-space-api.onrender.com';
  apiUrl = 'http://localhost:3000';

  getSmartphones(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/phone-space/smartphones`);
  }

  getSmartphone(productId: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/phone-space/smartphones/${productId}`);
  }

  constructor(private http: HttpClient) { }
}
