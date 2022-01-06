import {SpecialDiscount} from "./specialDiscount";
import {SalespersonModel} from "./salespersonModel";
import {ItemModel} from "./itemModel";
import {CustomerModel} from "./customerModel";

export class SalesModel {

  id?:number;
  transactionDate?:string = "";
  // @ts-ignore
  salesperson: SalespersonModel;
  // @ts-ignore
  product: ItemModel;
  // @ts-ignore
  customer: CustomerModel;


}
