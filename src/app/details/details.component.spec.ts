/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { DetailsComponent } from './details.component';
import { SellerService } from '../seller.service';
import { Observable } from 'rxjs/Observable';
import { Product } from '../product';
import { Router } from '@angular/router';

// class RouterStub {
//   navigateByUrl(url: string) { return url; }
// }
let routerStub;


// class MockSellerService extends SellerService {
//   // getSellerProducts(id: number): Observable<Product[]> {
//   //   let n: Product[];
//   //   n.push({ id: 6, name: 'test', price: 5, quantityInStock: 5, quantitySold: 5, imagePath: 'test' });
//   //   const obs = new Observable((val) => {
//   //     val.next(n);
//   //   });
//   //   return obs;
//   successGetProducts: true,
//   getSellerProducts(id: number) { 
//     return 
//   }
// }

describe('DetailsComponent', () => {

  const MockSellerService = {
    successGetProducts: true,
    getSellerProducts: function(id) {
      return {
        subscribe: function(fnSuccess, fnError) {
          if (MockSellerService.successGetProducts === true) {
            fnSuccess();
          } else {
            fnError();
          }
        }
      };
    }
  };

  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async(() => {
    routerStub = {
      navigate: jasmine.createSpy('navigate');
    };
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [DetailsComponent],
      providers: [
        { provide: SellerService, useClass: MockSellerService },
        { provide: Router, useValue: routerStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
