import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private sellerService: SellerService) { }

  ngOnInit() {
    this.sellerService.getSellerProducts(1).subscribe(val => {
      console.log(val);
    });
  }

}
