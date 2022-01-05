import {map} from 'rxjs/internal/operators';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ItemModel} from "../../assets/models/itemModel";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getProducts(complete = () => {
  }): Observable<any> {

    let requestURL = "http://localhost:8080/inventory/all"
    return this.http.get<ItemModel>(requestURL, httpOptions)
      .pipe(
        map((data: any) => {
          let items = new ItemModel();
          items = data;
          return items;
        }));
  }

}
