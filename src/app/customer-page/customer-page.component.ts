import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../services/customer-service";
import {CustomerModel} from "../../assets/models/customerModel";

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPageComponent implements OnInit {

  customersList: any = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
      this.customerService.getCusomers().subscribe(data=> {
        console.log(data);
        this.customersList= data;
      })
  }

}
