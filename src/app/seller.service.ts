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

  // editProduct(product: Product) {
  //   console.log('in CreateSeller', product);
  //   // const p = {params: {id: product.id}, body: {name: 'ih'}};
  //   const json = JSON.stringify({var1: 'tets', var2: 2});
  //   const params = 'json=' + json;
  //   const p = 55;
  //   const headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   return this.http.put('http://localhost:5000/api/sellers/1', params, headers)
  //     .subscribe(
  //       () => {},
  //       err => console.error(err)
  //     );
  // }
  editProduct(product: Product, seller: number) {
    console.log('in CreateSeller', product, 'seller: ', seller);
    // const p = {params: {id: product.id}, body: {name: 'ih'}};
    const json = JSON.stringify({ var1: 'tets', var2: 2 });
    const params = product;
    const p = 55;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // app.put("/api/sellers/:id/products/:prodId", (req, res) => {

    return this.http.put(`http://localhost:5000/api/sellers/${seller}/products/${product.id}`, params, {
      headers: headers
    })
      .map(res => res.json());

  }
  // createFood(food): Observable<Response> {
  //   const headers = new Headers({ 'Content-Type': 'application/json' });
  //   const options = new RequestOptions({ headers: headers });
  //   const body = JSON.stringify(food);
  //   // return this.http.post('/api/food/', body, headers).map((res: Response) => res.json());
  //   return this.http.post(this.serv + 'sellers/1/products', body, headers).map((res: Response) => res.json());
  // }
  // editProduct(food): Observable<Response> {
  //   console.log('ind editProduct');
  //   let id = 1;
  //   const headers = new Headers({ 'Content-Type': 'application/json' });
  //   const options = new RequestOptions({ headers: headers });
  //   const body = JSON.stringify(food);
  //   return this.http.put(this.serv + 'sellers/' + id, body, headers).map((res: Response) => res.json());
  // }
  // deleteFood(food_id): Observable<Response> {
  //   return this.http.delete(this.serv + 'sellers/' + food_id);
  // }

  getSellerProducts(id: number): Observable<Product[]> {
    return this.http.get(this.serv + 'sellers/' + id + '/products')
      .map(response => {
        return <Product[]>response.json();
      });
  }
}
