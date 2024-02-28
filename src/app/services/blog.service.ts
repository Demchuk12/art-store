import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {Article, Comment} from '../models/article.model';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  apiUrl: string = environment.apiURL;
  constructor(private http: HttpClient) {
  }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl + 'articles\n')
      .pipe(
        catchError(error => {
          console.log('Error: ' + error.message);
          return throwError(error);
        })
      );
  }

  getArticlesByCategory(blogCategory: string): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl + 'articles\n')
      .pipe(
        map(articles => articles.filter(article => article.blogCategory === blogCategory)),
        catchError(error => {
          console.log('Error: ' + error.message);
          return throwError(error);
        })
      );
  }

  getArticleById(articleId: string): Observable<Article> {
    return this.http.get<Article>(this.apiUrl + `articles/${+articleId}\n`)
      .pipe(
        catchError(error => {
          console.log('Error: ' + error.message);
          return throwError(error);
        })
      );
  }

  getArticleComments(articleId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.apiUrl + 'comments\n')
      .pipe(
        map(articles => articles.filter(article => article.articleId === articleId)),
        catchError(error => {
          console.log('Error: ' + error.message);
          return throwError(error);
        })
      );
  }

  setComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(this.apiUrl + 'comments\n', comment);
  }
}
