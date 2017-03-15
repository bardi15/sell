import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { SellerService } from '../seller.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DialogService } from 'ng2-bootstrap-modal';
import { ProductsDialogComponent } from '../products-dialog/products-dialog.component';

@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.css']
})
export class ProductsCardComponent implements OnInit {
  @Input()
  product: Product;
  num: number;
  confirmResult: boolean = null;
  promptMessage = '';
  constructor(private dialogService: DialogService) { }

  ngOnInit() {
  }
  editProduct(val: any) {
    this.dialogService.addDialog(ProductsDialogComponent, {
      product: val.p,
      seller: val.s,
      create: false
    })
      .subscribe((isConfirmed) => {
        this.confirmResult = isConfirmed;
        console.log('confirmed', isConfirmed);
      });
  }
  // createProduct(val: any) {
  //   this.dialogService.addDialog(ProductsDialogComponent, {
  //     product: val.p,
  //     seller: val.s,
  //     create: true
  //   })
  //     .subscribe((isConfirmed) => {
  //       this.confirmResult = isConfirmed;
  //       console.log('confirmed', isConfirmed);
  //     });
  // }
}
