import { Component, OnInit } from '@angular/core';
import {ProductService} from "../services/product-service";
import {MatDialog} from "@angular/material/dialog";
import {ProductUpdateDialogComponent} from "../dialog-components/product-update-dialog/product-update-dialog.component";
import {NotificationService} from "../services/notification/notification.service";

@Component({
  selector: 'app-inventory-page',
  templateUrl: './inventory-page.component.html',
  styleUrls: ['./inventory-page.component.css']
})
export class InventoryPageComponent implements OnInit {

  productList: any = [];

  constructor(private productService: ProductService, public dialog: MatDialog, private notifyService: NotificationService) { }

  ngOnInit(): void {

    this.productService.getProducts().subscribe(data=> {
      console.log(data);
      this.productList= data;
    })

  }

  editProduct(element:any): void {
    let dialogRef = this.dialog.open(ProductUpdateDialogComponent, {
      width: '650px',
      disableClose: true,
      data: {
        productId: element.productId,
        manufacturer: element.manufacturer,
        name: element.name,
        style: element.style,
        purchasePrice: element.purchasePrice,
        salePrice: element.salePrice,
        stock: element.stock,
        commission: element.commission,
        active: element.active
      }
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result == "" || result == null || result.manufacturer == ""
        || result.name == "" || result.style == ""
        || result.purchasePrice == ""|| result.salePrice == ""|| result.stock == ""|| result.commission == "") {
        this.notifyService.showInfo("Empty Input","")
      } else {
        for (let i = 0; i < this.productList.length; i++) {
          if (result.productId == this.productList[i].productId) {

            // updating the list so it updates the fronside
            this.productList[i].manufacturer = result.manufacturer;
            this.productList[i].name = result.name;
            this.productList[i].style = result.style;
            this.productList[i].purchasePrice = result.purchasePrice;
            this.productList[i].salePrice = result.salePrice;
            this.productList[i].stock = result.stock;
            this.productList[i].commission = result.commission;
            this.productList[i].active = result.active;

            // creating new object with the updated data and send it to webserver for updating the DB
            //this.eventService.updateEvent(this.createEventModel).subscribe();
            this.notifyService.showSuccess("Product Updated", "")

            break;
          }
        }
      }

    });

  }

  deleteProduct(element:any) {

    for (let i = 0; i < this.productList.length; i++) {
      if (element.productId == this.productList[i].productId) {
        this.productList.splice(i, 1);
        // call web service and delete it from DB.
        //this.eventService.deleteEvent(result).subscribe();
        break;
      }
    }

  }

}
