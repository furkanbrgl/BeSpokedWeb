import {map} from 'rxjs/internal/operators';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CustomerModel} from "../../assets/models/customerModel";

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  getCusomers(complete = () => {
  }): Observable<any> {

    let requestURL = "http://localhost:8080/customers/"
    return this.http.get<CustomerModel>(requestURL, httpOptions)
      .pipe(
        map((data: any) => {
          let customers = new CustomerModel();
          customers = data;
          return customers;
        }));
  }

}
