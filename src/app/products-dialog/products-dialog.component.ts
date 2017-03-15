import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
// import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
// import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';

export interface ConfirmModel {
  title: string;
  message: string;
  num: Product;
}

@Component({
  selector: 'app-products-dialog',
  templateUrl: './products-dialog.component.html',
  styleUrls: ['./products-dialog.component.css']
})
export class ProductsDialogComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {
  title: string;
  message: string;
  num: Product;
  newPr: Product;
  constructor(dialogService: DialogService) {
    super(dialogService);
    console.log('in constructor: ', this.num);
  }
  confirm() {
    console.log('in confirm: ', this.num);
    // on click on confirm button we set dialog result as true,
    // ten we can get dialog result from caller code
    this.result = true;
    this.close();
  }
  cancel() {
    console.log('in cancel: ', this.num);
    this.result = false;
    this.close();
  }
  test() {
    console.log('new:', this.newPr);
  }
}
