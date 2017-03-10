import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { SellerService } from '../seller.service';


@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.css']
})
export class ProductsCardComponent implements OnInit {
  @Input()
  product: Product;
  constructor() { }

  ngOnInit() {
  }

}
