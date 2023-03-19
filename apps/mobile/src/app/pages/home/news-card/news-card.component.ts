import { Component, Input } from '@angular/core';
import { News } from '@shared/types';

@Component({
  selector: 'mobile-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent {
  @Input() public newsData!: News;

  constructor() {}
}
