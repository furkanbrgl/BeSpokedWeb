import {SpecialDiscount} from "./specialDiscount";

export class ItemModel {

  id?:number;
  manufacturer?:string = "";
  name?:string = "";
  style?:string = "";
  purchasePrice?:number;
  salePrice?:number;
  stock?:number;
  commission?:number;
  active?:boolean;
  // @ts-ignore
  discounts: Array<SpecialDiscount>;

}
