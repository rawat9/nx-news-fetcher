import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { News } from '@shared/types';

@Injectable({
  providedIn: 'root',
})
export class NewsFetcherService {
  private readonly baseUrl = 'https://techcrunch.com/wp-json/wp/v2';

  private posts = '/posts';

  constructor(private readonly httpClient: HttpClient) {}

  public getNews(): Observable<News[]> {
    return this.httpClient
      .get<News[]>(`${this.baseUrl}${this.posts}`, {
        params: { per_page: '10', context: 'view' },
      })
      .pipe(
        catchError((err) => {
          throw new Error(err);
        })
      );
  }

  public getNewsById(id: string): Observable<News> {
    return this.httpClient.get<News>(`${this.baseUrl}${this.posts}/${id}`).pipe(
      catchError((err) => {
        throw new Error(err);
      })
    );
  }

  public getNewsByCategory(category: string): Observable<News[]> {
    return this.httpClient
      .get<News[]>(`${this.baseUrl}&categories=${category}`)
      .pipe(
        catchError((err) => {
          throw new Error(err);
        })
      );
  }
}
