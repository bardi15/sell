import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SellerService } from '../seller.service';
// import { NgbModule, NgbTabset, NgbTab, NgbTabContent,
//   NgbModal, NgbModalOptions, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ProductsDialogComponent } from '../products-dialog/products-dialog.component';
import { DialogService } from 'ng2-bootstrap-modal';
import { Product } from '../product';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  sellerId: number;
  Products: any[];
  TopProducts: any[];
  closeResult: string;
  confirmResult: boolean = null;
  // promptMessage: string = '';
  constructor(private router: Router,
    private route: ActivatedRoute, private sellerService: SellerService,
    private dialogService: DialogService) {
    this.Products = [];
    this.TopProducts = [];
  }

  ngOnInit() {
    const successHandler = (result) => {
      this.Products = result;
    };
    const errorHandler = (err) => {
      console.log('something failed');
    };

    this.sellerId = this.route.snapshot.params['id'];
    this.sellerService.getSellerProducts(this.sellerId).subscribe(val => {
      this.Products = val;
      this.TopProducts = this.getTopProducts();
    });
  }

  getTopProducts(): any[] {
    const tmpList = this.Products.slice(0);
    const len = tmpList.length;
    tmpList.sort(function (a, b) {
      if (a.quantitySold < b.quantitySold) {
        return 1;
      } else if (a.quantitySold > b.quantitySold) {
        return -1;
      } else {
        return 0;
      }
    });
    if (len >= 10) {
      return tmpList.slice(0, 10);
    }
    return tmpList;
  }

  createProduct() {
    const product = {} as Product;
    this.dialogService.addDialog(ProductsDialogComponent, {
      product: product,
      seller: this.sellerId,
      create: true
    })
      .subscribe((isConfirmed) => {
        this.confirmResult = isConfirmed;
        console.log('confirmed', isConfirmed);
      });
  }
}
