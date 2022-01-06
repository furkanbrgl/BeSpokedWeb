import {map} from 'rxjs/internal/operators';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CustomerModel} from "../../assets/models/customerModel";
import {SalesDTO} from "../../assets/models/salesDTO";
import {SaleModel} from "../../assets/models/saleModel";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) {
  }

  getAllSales(complete = () => {
  }): Observable<any> {

    let requestURL = "http://localhost:8080/sales"
    return this.http.get<SalesDTO>(requestURL, httpOptions)
      .pipe(
        map((data: any) => {
          let sales = new SalesDTO();
          sales = data;
          return sales;
        }));
  }

  makeASale(makeASaleObject: SaleModel, complete = () => {
  }): Observable<any> {

    return this.http.post<any>("http://localhost:8080/sales/make", JSON.stringify(makeASaleObject), httpOptions)
      .pipe(
        map((data: any) => {
          return data;
        })
      );
  }

}
