import { Injectable } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Product } from './product';
import { Seller } from './seller';

import 'rxjs/rx';

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
        return <Seller[]>response.json();
      });
  }
  getSeller(id: number): Observable<Seller> {
    return this.http.get(this.serv + 'sellers/' + id)
      .map(response => {
        return <Seller>response.json();
      });
  }
  // private extractData(res: Response) {
  //   let body = res.json();
  //   return body.data || {};
  // }
  // CreateSeller(seller: Seller): Observable<boolean> {
  //   return this.http.post(this.serv + 'sellers', seller).map(this.extractData)
  //   // return this.http.get(this.serv + 'sellers/' + id)
  //   // .map(response => {
  //   //   return <Seller> response.json();
  //   // });
  // }
  getSellerProducts(id: number): Observable<Product[]> {
    return this.http.get(this.serv + 'sellers/' + id + '/products')
      .map(response => {
        return <Product[]>response.json();
      });
  }
}
