import { Component, OnInit, Input } from '@angular/core';
import { Seller } from '../seller';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { SellerService } from '../seller.service';

export interface ConfirmModel {
  seller: Seller;
  sellerId: number;
  create: boolean;
}

@Component({
  selector: 'app-seller-dialog',
  templateUrl: './seller-dialog.component.html',
  styleUrls: ['./seller-dialog.component.css']
})
export class SellerDialogComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {
  seller: Seller;
  sellerId: number;
  create: boolean;

  getData: string;

  constructor(dialogService: DialogService, private sellerService: SellerService) {
    super(dialogService);
    // console.log('in constructor: ', this.seller);
  }
  confirm() {
    if (this.create) {
      this.sellerService.createSeller(this.seller)
        .subscribe(
        data => this.getData = JSON.stringify(data)
        );

    } else {
      this.sellerService.editSeller(this.seller)
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