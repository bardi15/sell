import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SellerService } from '../seller.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  sellerId: number;
  Products: any[];
  constructor(private router: Router,
    private route: ActivatedRoute, private sellerService: SellerService) {
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

}
