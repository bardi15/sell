import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SellerService } from './seller.service';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { Routes, RouterModule } from '@angular/router';
import { SellerDialogComponent } from './seller-dialog/seller-dialog.component';
import { ProductsDialogComponent } from './products-dialog/products-dialog.component';
import { ProductsCardComponent } from './products-card/products-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailsComponent,
    SellerDialogComponent,
    ProductsDialogComponent,
    ProductsCardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([{
      path: '',
      redirectTo: 'list',
      pathMatch: 'full'
    }, {
      path: 'list',
      component: ListComponent
    }, {
      path: 'details/:id',
      component: DetailsComponent
    }])
  ],
  providers: [SellerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
