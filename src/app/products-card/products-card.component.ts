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
  showConfirm(val: any) {
    console.log('val', val);
    this.dialogService.addDialog(ProductsDialogComponent, {
      product: val.p,
      seller: val.s
    })
      .subscribe((isConfirmed) => {
        // Get dialog result
        this.confirmResult = isConfirmed;
        console.log('confirmed', isConfirmed);
      });
  }
}
