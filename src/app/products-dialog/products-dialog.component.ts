import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { SellerService } from '../seller.service';

export interface ConfirmModel {
  product: Product;
  seller: number;
  create: boolean;

}

@Component({
  selector: 'app-products-dialog',
  templateUrl: './products-dialog.component.html',
  styleUrls: ['./products-dialog.component.css']
})
export class ProductsDialogComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {
  product: Product;
  seller: number;
  create: boolean;

  getData: string;

  constructor(dialogService: DialogService, private sellerService: SellerService) {
    super(dialogService);
    console.log('in constructor: ', this.product);
  }
  confirm() {
    console.log('in confirm, ', this.create);
    if (this.create) {
      this.sellerService.createProduct(this.product, this.seller)
        .subscribe(
        data => this.getData = JSON.stringify(data)
        );
    } else {
     this.sellerService.editProduct(this.product, this.seller)
        .subscribe(
        data => this.getData = JSON.stringify(data)
        );
    }

    this.result = true;
    this.close();
  }
  cancel() {
    this.result = false;
    this.close();
  }
}
