import { Component, OnInit } from '@angular/core';
import { News } from '@shared/types';
import { NewsFetcherService } from '@shared/services';

@Component({
  selector: 'mobile-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
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
