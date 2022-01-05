import {map} from 'rxjs/internal/operators';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ItemModel} from "../../assets/models/itemModel";
import {SpecialDiscount} from "../../assets/models/specialDiscount";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class SpecialDiscountService {

  constructor(private http: HttpClient) {
  }

  getSpecialDiscounts(complete = () => {
  }): Observable<any> {

    let requestURL = "assets/specialdeals.json"
    return this.http.get<SpecialDiscount>(requestURL, httpOptions)
      .pipe(
        map((data: any) => {
          let items = new ItemModel();
          items = data;
          return items;
        }));
  }

}
