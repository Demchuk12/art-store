import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {Article, Comment} from '../models/article.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private http: HttpClient) {
  }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(' http://localhost:3000/articles\n')
      .pipe(
        catchError(error => {
          console.log('Error: ' + error.message);
          return throwError(error);
        })
      );
  }

  getArticlesByCategory(blogCategory: string): Observable<Article[]> {
    return this.http.get<Article[]>(' http://localhost:3000/articles\n')
      .pipe(
        map(articles => articles.filter(article => article.blogCategory === blogCategory)),
        catchError(error => {
          console.log('Error: ' + error.message);
          return throwError(error);
        })
      );
  }

  getArticleById(articleId: string): Observable<Article> {
    return this.http.get<Article>(`http://localhost:3000/articles/${+articleId}\n`)
      .pipe(
        catchError(error => {
          console.log('Error: ' + error.message);
          return throwError(error);
        })
      );
  }

  getArticleComments(articleId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(' http://localhost:3000/comments\n')
      .pipe(
        map(articles => articles.filter(article => article.articleId === articleId)),
        catchError(error => {
          console.log('Error: ' + error.message);
          return throwError(error);
        })
      );
  }

  setComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(' http://localhost:3000/comments\n', comment);
  }
}
