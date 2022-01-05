import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../services/product-service";
import {SalespersonService} from "../services/salesperson-service";
import {SpecialDiscountService} from "../services/special-discount-service";

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
  total: any = "$0";


  constructor(private formBuilder: FormBuilder,private productService: ProductService,private specialDiscountService: SpecialDiscountService, private salespersonService: SalespersonService) { }

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

    this.productService.getProducts().subscribe(data=> {
      console.log(data);
      this.productList= data;
    })
    this.salespersonService.getSalesPersons().subscribe(data=> {
      console.log(data);
      this.salespersonsList= data;
    })
    this.specialDiscountService.getSpecialDiscounts().subscribe(data=> {
      console.log(data);
      this.specialDiscountList= data.specialDeal;
    })


  }

  onSubmit(formData:any) {
  console.log(formData)
  }

  onChange(event:any){

  }

}
