import {map} from 'rxjs/internal/operators';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CustomerModel} from "../../assets/models/customerModel";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  getCusomers(complete = () => {
  }): Observable<any> {

    let requestURL = "assets/customers.json"
    return this.http.get<CustomerModel>(requestURL, httpOptions)
      .pipe(
        map((data: any) => {
          let customers = new CustomerModel();
          customers = data;
          return customers;
        }));
  }

}
