import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Painting } from '../models/painting.model';
import { BillingInfo } from '../models/billing-info.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  apiUrl: string = environment.apiURL;
  constructor(private http: HttpClient) {
  }

  getPaintings(): Observable<Painting[]> {
    return this.http.get<Painting[]>(this.apiUrl + 'basket\n');
  }

  addPaintingToCart(painting: Painting): Observable<Painting> {
    return this.http.post<Painting>(this.apiUrl + 'basket/', painting);
  }

  changePaintingsCount(painting: Painting): Observable<Painting> {
    return this.http.put<Painting>(this.apiUrl + `basket/${painting.id}`, painting);
  }

  deletePaintingFromCart(id: number) {
    return this.http.delete<Painting>(this.apiUrl + `basket/${id}`);
  }

  addBillingInfo(billingInfo: BillingInfo): Observable<BillingInfo> {
    return this.http.post<BillingInfo>(this.apiUrl + 'billingInfo\n', billingInfo);
  }

}
