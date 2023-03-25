import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsFetcherService } from '@shared/services';

@Component({
  selector: 'mobile-news-details',
  templateUrl: './news-details.page.html',
  styleUrls: ['./news-details.page.scss'],
})
export class NewsDetailsPage {
  public newsId = '';
  public image = '';
  public description = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private newsFetcherService: NewsFetcherService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.newsId = params['id'];
      this.newsFetcherService.getNewsById(this.newsId).subscribe((news) => {
        this.image = news.jetpack_featured_media_url;
        this.description = news.content.rendered;
      });
    });
  }
}
