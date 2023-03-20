import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { NewsCardComponent } from '../components/news-card/news-card.component';
import { CommonModule } from '@angular/common';
import { NewsFetcherService } from '@shared/services';
import { News } from '@shared/types';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'web-news-board',
  standalone: true,
  imports: [
    CommonModule,
    MatGridListModule,
    NewsCardComponent,
    HttpClientModule,
  ],
  templateUrl: './news-board.component.html',
  styleUrls: ['./news-board.component.css'],
  providers: [NewsFetcherService],
})
export class NewsBoardComponent implements OnInit {
  public newsData: News[] = [];
  public isLoading = false;

  constructor(private readonly newsFetcherService: NewsFetcherService) {}

  ngOnInit() {
    this.isLoading = true;
    this.newsFetcherService.getNews().subscribe((data) => {
      this.newsData = data;
      this.isLoading = false;
    });
  }
}
