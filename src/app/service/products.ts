import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class Products {
  private baseurl = "http://localhost:8080/product"; // by default spring rest only takes 20 items at a page if we want to include more then we can do like this size=no

  constructor(private httpClient: HttpClient) {}

  getProductList(thecategoryid:number): Observable<Product[]> {
   
    const searchurl=`${this.baseurl}/search/findByCategoryId?id=${thecategoryid}`;
      console.log('Fetching from URL:', searchurl); 
    return this.httpClient.get<GetResponse>(searchurl).pipe(
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