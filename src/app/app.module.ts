import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppHeaderComponent} from './app-header/app-header.component';
import {InventoryPageComponent} from './inventory-page/inventory-page.component';
import {RouterModule} from "@angular/router";
import {CustomerPageComponent} from './customer-page/customer-page.component';
import {HttpClientModule} from "@angular/common/http";
import { ProductUpdateDialogComponent } from './dialog-components/product-update-dialog/product-update-dialog.component';
import {FormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatInputModule} from "@angular/material/input";
import { SalespersonsPageComponent } from './salespersons-page/salespersons-page.component';
import { SalespersonUpdateDialogComponent } from './dialog-components/salesperson-update-dialog/salesperson-update-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    InventoryPageComponent,
    CustomerPageComponent,
    ProductUpdateDialogComponent,
    SalespersonsPageComponent,
    SalespersonUpdateDialogComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    RouterModule.forRoot([
      {path: '', pathMatch: 'full', redirectTo: 'home'},
      {
        path: 'inventory',
        component: InventoryPageComponent
      },
      {
        path: 'customers',
        component: CustomerPageComponent
      },
      {
        path: 'salespersons',
        component: SalespersonsPageComponent
      }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
