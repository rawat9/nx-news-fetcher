import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { News } from '@shared/types';

@Component({
  selector: 'mobile-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent {
  @Input() public newsData!: News;

  constructor() {}

  public navigateToNewsDetails() {
    const router = inject(Router);
    router.navigate(['details', this.newsData.id]);
  }
}
