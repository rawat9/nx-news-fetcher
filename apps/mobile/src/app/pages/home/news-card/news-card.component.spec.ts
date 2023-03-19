import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { NewsFetcherService } from '@shared/services';
import { News } from '@shared/types';
import { Observable, of } from 'rxjs';
import { NewsCardComponent } from './news-card.component';
import { PipeModule } from './pipes/pipes.module';

class MockNewsFetcherService {
  getNews(): Observable<News[]> {
    return of([
      {
        id: 1,
        date: '2021-01-01',
        link: 'Test Link',
        title: {
          rendered: 'Test Title',
        },
        content: {
          rendered: 'Test Content',
        },
        excerpt: {
          rendered: 'Test Excerpt',
        },
        jetpack_featured_media_url: 'Test Image',
        creator: 'Test Creator',
      },
    ]);
  }
}

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
          useValue: new MockNewsFetcherService(),
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NewsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
