import { Injectable } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Product } from './product';
import { Seller } from './seller';

// import 'rxjs/rx';

@Injectable()
export class SellerService {
  serv: string;
  _data: any;
  headers: Headers;
  options: RequestOptions;
  constructor(private http: Http) {
    this.serv = 'http://localhost:5000/api/';
    this.headers = new Headers({
      'Content-Type': 'text/html; charset=utf-8'
    });
    this.options = new RequestOptions({ headers: this.headers });
  }

  getAllSellers(): Observable<Seller[]> {
    return this.http.get('http://localhost:5000/api/sellers')
      .map(response => {
        return <Seller[]>response.json();
      });
  }
  getSeller(id: number): Observable<Seller> {
    return this.http.get(`http://localhost:5000/api/sellers/${id}`)
      .map(response => {
        return <Seller>response.json();
      });
  }

  editProduct(product: Product, seller: number) {
    const params = product;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.put(`http://localhost:5000/api/sellers/${seller}/products/${product.id}`, params, {
      headers: headers
    })
      .map(res => res.json());
  }

  editSeller(seller: Seller) {
    const params = seller;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.put(`http://localhost:5000/api/sellers/${seller.id}/`, params, {
      headers: headers
    })
      .map(res => res.json());
  }

  createSeller(seller: Seller) {
    // app.post("/api/sellers", (req, res) => {
    console.log('create: ', seller);
    const params = seller;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(`http://localhost:5000/api/sellers/`, params, {
      headers: headers
    })
      .map(res => res.json());
  }

  createProduct(product: Product, seller: number) {
    // app.post("/api/sellers/:id/products", (req, res) => {
    console.log('in createProduct');
    const params = product;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(`http://localhost:5000/api/sellers/${seller}/products`, params, {
      headers: headers
    })
      .map(res => res.json());
  }

  getSellerProducts(id: number): Observable<Product[]> {
    return this.http.get(this.serv + 'sellers/' + id + '/products')
      .map(response => {
        return <Product[]>response.json();
      });
  }
}
