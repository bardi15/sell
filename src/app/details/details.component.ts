import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SellerService } from '../seller.service';
// import { NgbModule, NgbTabset, NgbTab, NgbTabContent,
//   NgbModal, NgbModalOptions, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ProductsDialogComponent } from '../products-dialog/products-dialog.component';
import { DialogService } from 'ng2-bootstrap-modal';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  sellerId: number;
  Products: any[];
  closeResult: string;
  confirmResult: boolean = null;
  // promptMessage: string = '';
  constructor(private router: Router,
    private route: ActivatedRoute, private sellerService: SellerService,
    private dialogService: DialogService) {
    this.Products = [];
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
    });
  }
  // showConfirm(val: number) {
  //   this.dialogService.addDialog(ProductsDialogComponent, {
  //     title: 'Confirmation',
  //     message: 'Bla bla confirm some action?',
  //     num: val
  //   })
  //     .subscribe((isConfirmed) => {
  //       // Get dialog result
  //       this.confirmResult = isConfirmed;
  //     });
  // }
}
