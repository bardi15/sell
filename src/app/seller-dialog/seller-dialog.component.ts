import { Component, OnInit, Input } from '@angular/core';
import { Seller } from '../seller';
export interface ConfirmModel {
  title: string;
  message: string;
}
@Component({
  selector: 'app-seller-dialog',
  templateUrl: './seller-dialog.component.html',
  styleUrls: ['./seller-dialog.component.css']
})
export class SellerDialogComponent implements OnInit {
  @Input()
  seller: Seller;
  constructor() { }

  ngOnInit() {
  }

}
