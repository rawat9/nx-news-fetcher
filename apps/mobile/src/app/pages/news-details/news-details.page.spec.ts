import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { of } from 'rxjs';
import { NewsDetailsPage } from './news-details.page';

describe('NewsDetailsComponent tests', () => {
  let component: NewsDetailsPage;
  let fixture: ComponentFixture<NewsDetailsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsDetailsPage],
      imports: [IonicModule.forRoot(), HttpClientModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { params: of({ id: 1 }) },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NewsDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
