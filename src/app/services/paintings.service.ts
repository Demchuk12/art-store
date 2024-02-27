import {Injectable} from '@angular/core';
import {catchError, interval, Observable, startWith, switchMap, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Painting} from '../models/painting.model';

@Injectable({
  providedIn: 'root'
})
export class PaintingsService {
  constructor(private http: HttpClient) {
  }

  getPaintingsBestsellers(): Observable<Painting[]> {
    let iterations = -1;
    const stream$ = interval(1500);
    return this.http.get<Painting[]>(' http://localhost:3000/paintings\n')
      .pipe(
        map(paintings => paintings.filter(painting => painting.bestsellerRate)),
        catchError(error => {
          console.log('Error: ' + error.message);
          return throwError(error);
        }),
        switchMap(paintings => {
          return stream$
            .pipe(
              startWith(paintings),
              map(() => {
                iterations++;
                const first = paintings[iterations % (paintings.length)];
                const second = paintings[(iterations + 1) % (paintings.length)];
                const third = paintings[(iterations + 2) % (paintings.length)];
                return [first, second, third];
              })
            );
        })
      );
  }

  getPaintingsMostPopular(): Observable<Painting[]> {
    return this.http.get<Painting[]>(' http://localhost:3000/paintings\n')
      .pipe(
        map(paintings => paintings.filter(painting => painting.mostPopular)),
        catchError(error => {
          console.log('Error: ' + error.message);
          return throwError(error);
        })
      );
  }

  getPaintingsTopRanking(): Observable<Painting[]> {
    return this.http.get<Painting[]>(' http://localhost:3000/paintings\n')
      .pipe(
        map(paintings => paintings.filter(painting => painting.topRanking)),
        catchError(error => {
          console.log('Error: ' + error.message);
          return throwError(error);
        })
      );
  }

  getPaintingsByCategory(category: string): Observable<Painting[]> {
    return this.http.get<Painting[]>(' http://localhost:3000/paintings\n')
      .pipe(
        map(paintings => paintings.filter(painting => painting.category === category)),
        catchError(error => {
          console.log('Error: ' + error.message);
          return throwError(error);
        })
      );
  }

  getPaintingsById(id: string): Observable<Painting[]> {
    return this.http.get<Painting[]>(' http://localhost:3000/paintings\n')
      .pipe(
        map(paintings => paintings.filter(painting => painting.id === +id)),
        catchError(error => {
          console.log('Error: ' + error.message);
          return throwError(error);
        })
      );
  }
}
