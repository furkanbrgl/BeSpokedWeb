import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppHeaderComponent} from './app-header/app-header.component';
import {InventoryPageComponent} from './inventory-page/inventory-page.component';
import {RouterModule} from "@angular/router";
import {CustomerPageComponent} from './customer-page/customer-page.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    InventoryPageComponent,
    CustomerPageComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', pathMatch: 'full', redirectTo: 'home'},
      {
        path: 'inventory',
        component: InventoryPageComponent
      },
      {
        path: 'customers',
        component: CustomerPageComponent
      }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
