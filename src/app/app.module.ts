import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SellerService } from './seller.service';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { Routes, RouterModule } from '@angular/router';
import { SellerDialogComponent } from './seller-dialog/seller-dialog.component';
import { ProductsDialogComponent } from './products-dialog/products-dialog.component';
import { ProductsCardComponent } from './products-card/products-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JsonpModule } from '@angular/http';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';

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
    ReactiveFormsModule,
    JsonpModule,
    NgbModule.forRoot(),
    BootstrapModalModule.forRoot({container: document.body}),
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
  bootstrap: [AppComponent],
  entryComponents: [
    ProductsDialogComponent,
    SellerDialogComponent
  ],
})
export class AppModule { }
