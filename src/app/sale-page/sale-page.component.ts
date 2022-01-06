import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../services/product-service";
import {SalespersonService} from "../services/salesperson-service";
import {SpecialDiscountService} from "../services/special-discount-service";
import {DashboardService} from "../services/dashboard-service";
import {SaleModel} from "../../assets/models/saleModel";
import {CustomerModel} from "../../assets/models/customerModel";
import {NotificationService} from "../services/notification/notification.service";

@Component({
  selector: 'app-sale-page',
  templateUrl: './sale-page.component.html',
  styleUrls: ['./sale-page.component.css']
})
export class SalePageComponent implements OnInit {

  createSaleForm!: FormGroup;
  productList: any = [];
  chosenProduct: any;
  salespersonsList: any = [];
  specialDiscountList: any = [];
  total: any = "0";

  saleModel: SaleModel = new SaleModel();

  constructor(private formBuilder: FormBuilder, private notifyService: NotificationService, private dashboardService: DashboardService, private productService: ProductService, private specialDiscountService: SpecialDiscountService, private salespersonService: SalespersonService) {
  }

  ngOnInit(): void {
    this.createSaleForm = this.formBuilder.group({
      customername: ['', Validators.required],
      lastname: ['', Validators.required],
      address: ['', Validators.required],
      phonenumber: ['', Validators.required],
      productDetail: ['', Validators.required],
      salesperson: ['', Validators.required],
      specialDiscount: ['', Validators.required]
    });

    this.productService.getProducts().subscribe(data => {
      this.productList = data;
    })
    this.salespersonService.getSalesPersons().subscribe(data => {
      this.salespersonsList = data;
    })
  }

  onSubmit(formData: any) {
    console.log(formData)
    let c = new CustomerModel();
//  c.customerId
    c.firstName = formData.customername;c.lastName = formData.lastname;c.phoneNumber = formData.phonenumber;
//  c.registered = null;
    c.active = true;this.saleModel.customer = c;
    // @ts-ignore
    this.saleModel.product.discounts=undefined;

    this.dashboardService.makeASale(this.saleModel).subscribe(data => {
      console.log(data);
      this.notifyService.showSuccess("Product Updated", "")
    })
    console.log(this.saleModel);
    this.createSaleForm.reset();
  }

  onChangeProduct(event: any) {
    for (let i = 0; i < this.productList.length; i++) {
      if (event.target.value == this.productList[i].name) {
        this.specialDiscountList = this.productList[i].discounts;
        this.total = this.productList[i].salePrice;
        this.saleModel.product = this.productList[i];
      }
    }
  }
  onChangeSalesperson(event: any) {
    for (let i = 0; i < this.salespersonsList.length; i++) {
      if (event.target.value == this.salespersonsList[i].firstName) {
        this.saleModel.salesperson = this.salespersonsList[i];
        this.saleModel.salesperson.startDate = undefined;
        this.saleModel.salesperson.terminationDate = undefined;
      }
    }
  }
}
