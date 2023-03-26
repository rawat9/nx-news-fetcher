import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { NewsFetcherService } from '@shared/services';
import { fakeNewsData } from '@shared/mock-data';
import { of } from 'rxjs';
import { NewsCardComponent } from './news-card.component';
import { PipeModule } from '../../pipes/pipes.module';

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

  it('should show the news title', () => {
    const title = fixture.nativeElement.querySelector('ion-card-title');
    fixture.detectChanges();
    expect(title.textContent).toContain(fakeNewsData[0].title.rendered);
  });

  it('should show the news excerpt', () => {
    const excerpt = fixture.nativeElement.querySelector('ion-card-content');
    fixture.detectChanges();
    expect(excerpt.textContent).toContain(fakeNewsData[0].excerpt.rendered);
  });
});
