import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Painting} from '../models/painting.model';
import {BillingInfo} from '../models/billing-info.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private http: HttpClient) {
  }

  getPaintings(): Observable<Painting[]> {
    return this.http.get<Painting[]>('http://localhost:3000/basket\n');
  }

  addPaintingToCart(painting: Painting): Observable<Painting> {
    return this.http.post<Painting>('http://localhost:3000/basket/', painting);
  }

  changePaintingsCount(painting: Painting): Observable<Painting> {
    return this.http.put<Painting>(`http://localhost:3000/basket/${painting.id}`, painting);
  }

  deletePaintingFromCart(id: number) {
    return this.http.delete<Painting>(`http://localhost:3000/basket/${id}`);
  }

  addBillingInfo(billingInfo: BillingInfo): Observable<BillingInfo> {
    return this.http.post<BillingInfo>(' http://localhost:3000/billingInfo\n', billingInfo);
  }

}
