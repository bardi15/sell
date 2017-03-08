import { Injectable } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
import 'rxjs/rx';

export interface Seller {
  id: number;
  name: string;
  category: string;
  imagePath: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  quantitySold: number;
  quantityInStock: number;
  imagePath: string;
}

@Injectable()
export class SellerService {
  serv: string;
  _data: any;

  constructor(private http: Http) {
    this.serv = 'http://localhost:5000/api/';
  }

  getAllSellers(): Observable<Seller[]> {
    return this.http.get(this.serv + 'sellers')
    .map(response => {
      return <Seller[]> response.json();
    });
  }
  getSeller(id: number): Observable<Seller> {
    return this.http.get(this.serv + 'sellers/' + id)
    .map(response => {
      return <Seller> response.json();
    });
  }
  getSellerProducts(id: number): Observable<Product[]> {
    return this.http.get(this.serv + 'sellers/' + id + '/products')
    .map(response => {
      return <Product[]> response.json();
    });
  }
}
