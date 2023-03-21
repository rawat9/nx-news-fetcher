import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { NewsFetcherService } from '@shared/services';
import { News } from '@shared/types';
import { of } from 'rxjs';
import { NewsCardComponent } from './news-card.component';
import { PipeModule } from './pipes/pipes.module';

const fakeNewsData: News[] = [
  {
    id: 1,
    date: '2021-01-01',
    link: 'Test Link',
    title: {
      rendered: 'Test Title',
    },
    excerpt: {
      rendered: 'Test Excerpt',
    },
    jetpack_featured_media_url: 'Test Image',
    creator: 'Test Creator',
  },
];

describe('News Card Component tests', () => {
  let component: NewsCardComponent;
  let fixture: ComponentFixture<NewsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsCardComponent],
      imports: [IonicModule.forRoot(), PipeModule.forRoot()],
      providers: [
        {
          provide: NewsFetcherService,
          useValue: {
            getNews: () => of(fakeNewsData),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NewsCardComponent);
    component = fixture.componentInstance;
    component.newsData = fakeNewsData[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
