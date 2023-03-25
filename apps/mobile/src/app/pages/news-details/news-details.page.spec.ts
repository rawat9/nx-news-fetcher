import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDetailsPage } from './news-details.page';

describe('NewsDetailsComponent', () => {
  let component: NewsDetailsPage;
  let fixture: ComponentFixture<NewsDetailsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsDetailsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(NewsDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
