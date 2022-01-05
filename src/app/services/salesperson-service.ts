import {map} from 'rxjs/internal/operators';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ItemModel} from "../../assets/models/itemModel";
import {SalespersonModel} from "../../assets/models/salespersonModel";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class SalespersonService {

  constructor(private http: HttpClient) {
  }

  getSalesPersons(complete = () => {
  }): Observable<any> {

    let requestURL = "http://localhost:8080/salespersons/"
    return this.http.get<SalespersonModel>(requestURL, httpOptions)
      .pipe(
        map((data: any) => {
          let items = new SalespersonModel();
          items = data;
          return items;
        }));
  }

}
