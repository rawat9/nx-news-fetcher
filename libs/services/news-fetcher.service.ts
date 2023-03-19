import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { News } from '@shared/types';

@Injectable({
  providedIn: 'root',
})
export class NewsFetcherService {
  constructor(private httpClient: HttpClient) {}
  endpoint =
    'https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed';

  getNews(): Observable<News[]> {
    return this.httpClient.get<News[]>(this.endpoint).pipe(
      catchError((err) => {
        throw new Error(err);
      })
    );
  }
}
