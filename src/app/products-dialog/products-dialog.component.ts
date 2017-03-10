import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-products-dialog',
  templateUrl: './products-dialog.component.html',
  styleUrls: ['./products-dialog.component.css']
})
export class ProductsDialogComponent implements OnInit {
  @Input() model: any;
  product: Product;
  constructor() {
    // console.log('pðð:', this.model);
   }

  ngOnInit() {
  }

}
