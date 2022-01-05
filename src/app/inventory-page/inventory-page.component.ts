import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../services/customer-service";
import {ProductService} from "../services/product-service";

@Component({
  selector: 'app-inventory-page',
  templateUrl: './inventory-page.component.html',
  styleUrls: ['./inventory-page.component.css']
})
export class InventoryPageComponent implements OnInit {

  productList: any = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {

    this.productService.getProducts().subscribe(data=> {
      console.log(data);
      this.productList= data;
    })

  }

}
