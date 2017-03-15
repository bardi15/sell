import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
// import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
// import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { SellerService } from '../seller.service';

export interface ConfirmModel {
  product: Product;
  seller: number;
}

@Component({
  selector: 'app-products-dialog',
  templateUrl: './products-dialog.component.html',
  styleUrls: ['./products-dialog.component.css']
})
export class ProductsDialogComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {
  product: Product;
  seller: number;
  getData: string;

  constructor(dialogService: DialogService, private sellerService: SellerService) {
    super(dialogService);
    console.log('in constructor: ', this.product);
    // this.n_id = this.num.id;
  }
  confirm() {
    console.log('in confirm: ', this.product);
    // on click on confirm button we set dialog result as true,
    // ten we can get dialog result from caller code
    this.sellerService.editProduct(this.product, this.seller)
      .subscribe(
        data => this.getData = JSON.stringify(data)
      );
    this.result = true;
    this.close();
  }
  cancel() {
    console.log('in cancel: ', this.product);
    this.result = false;
    this.close();
  }
  test() {
    console.log('new:', this.product);
  }
}
