import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  Sellers: any[];

  constructor(private sellerService: SellerService, private router: Router) {
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
}
