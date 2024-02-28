import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Customer, Review } from '../models/review.model';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CustomersService {
  apiUrl: string = environment.apiURL;
  constructor(private http: HttpClient) {
  }

  getReviews(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiUrl + 'customers\n')
      .pipe(
        catchError(error => {
          console.log('Error: ' + error.message);
          return throwError(error);
        })
      );
  }

  getGoodReviews(paintingId: number): Observable<Review[]> {
    return this.http.get<Review[]>(this.apiUrl + 'goodsReviews\n')
      .pipe(
        map(reviews => reviews.filter(review => review.paintingId === paintingId)),
        catchError(error => {
          console.log('Error: ' + error.message);
          return throwError(error);
        })
      );
  }

  setReview(review: Review): Observable<Review> {
    return this.http.post<Review>(this.apiUrl + 'goodsReviews\n', review);
  }

}
