import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller.service';
import { Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DialogService } from 'ng2-bootstrap-modal';
import { SellerDialogComponent } from '../seller-dialog/seller-dialog.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  Sellers: any[];

  constructor(private sellerService: SellerService, private router: Router,
  private dialogService: DialogService) {
    this.Sellers = [];
  }

  ngOnInit() {
    this.sellerService.getAllSellers().subscribe(val => {
      // console.log(val);
      this.Sellers = val;
    });
  }

  goToProducts(id: number) {
    this.router.navigate(['details', id]);
  }
  showConfirm(val: any) {
    console.log('val', val);
    this.dialogService.addDialog(SellerDialogComponent, {
      seller: val
    })
      .subscribe((isConfirmed) => {
        // Get dialog result
        // this.confirmResult = isConfirmed;
        console.log('confirmed', isConfirmed);
      });
  }
}
