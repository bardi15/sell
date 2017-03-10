// import { Injectable } from '@angular/core';
// import { HttpModule, JsonpModule } from '@angular/http';
// import { Http } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// // import 'rxjs/add/operator/map';
// import 'rxjs/rx';

// export interface Seller {
//   id: number;
//   name: string;
//   category: string;
//   imagePath: string;
// }

// export interface Product {
//   id: number;
//   name: string;
//   price: number;
//   quantitySold: number;
//   quantityInStock: number;
//   imagePath: string;
// }

// @Injectable()
// export class MockSellerService {
//   // serv: string;
//   // _data: any;
//   m: Seller;
//   p: Product;
//   constructor(private http: Http) {
//     // this.serv = 'http://localhost:5000/api/';
//     this.m = { id: 5, category: 'test', imagePath: 'test', name: 'test' };
//     this.p = { id: 6, name: 'test', price: 5, quantityInStock: 5, quantitySold: 5, imagePath: 'test' };
//   }

//   getAllSellers(): Observable<Seller[]> {
//     let n: Seller[];
//     n.push(this.m);
//     const obs = new Observable((val) => {
//       val.next(n);
//     });
//     return obs;

//   }
//   getSeller(id: number): Observable<Seller> {
//     const obs = new Observable((val) => {
//       val.next(this.m);
//     });
//     return obs;
//   }

//   getSellerProducts(id: number): Observable<Product[]> {
//     let n: Product[];
//     n.push(this.p);
//     const obs = new Observable((val) => {
//       val.next(n);
//     });
//     return obs;
//     // return this.http.get(this.serv + 'sellers/' + id + '/products')
//     //   .map(response => {
//     //     return <Product[]>response.json();
//     //   });
//   }
// }