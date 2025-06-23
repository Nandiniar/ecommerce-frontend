import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class Products {
  private baseurl = "http://localhost:8080/product"; // Or "/product" if using proxy

  constructor(private httpClient: HttpClient) {}

  getProductList(): Observable<Product[]> {
    console.log('Fetching from URL:', this.baseurl); // Debug URL
    return this.httpClient.get<GetResponse>(this.baseurl).pipe(
      map(response => {
        console.log('Raw response:', response); // Debug response
        return response._embedded.product;
      })
    );
  }
}

// component part me service ka use karenge take response  mil jaye  yaha service me humne observable use kara and hum component me subscribe karke usse use karenge and jab subscribe karte hai tab data milta hai

interface GetResponse {
  _embedded: {
    product: Product[];
  }
}