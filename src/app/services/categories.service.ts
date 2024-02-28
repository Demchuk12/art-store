import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Category } from '../models/category.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  apiUrl: string = environment.apiURL;
  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl + 'categories\n')
      .pipe(
        catchError(error => {
          console.log('Error: ' + error.message);
          return throwError(error);
        })
      );
  }

  getCategoriesSideBar(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl + 'categories\n')
      .pipe(
        map(categories => categories.slice(0, 6)),
        catchError(error => {
          console.log('Error: ' + error.message);
          return throwError(error);
        })
      );
  }
}
