import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { NewsBoardComponent } from './news-board/news-board.component';

@Component({
  standalone: true,
  imports: [RouterModule, NewsBoardComponent],
  selector: 'web-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'web';
}
