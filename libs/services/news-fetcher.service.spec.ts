import { TestBed } from '@angular/core/testing';
import { NewsFetcherService } from './news-fetcher.service';

describe('NewsFetcherService', () => {
  let service: NewsFetcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [NewsFetcherService] });
    service = TestBed.inject(NewsFetcherService);
  });

  it('should return list of news', () => {
    service.getNews().subscribe((news) => {
      expect(news).toBeTruthy();
    });
  });
});
