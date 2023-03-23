import { NgModule } from '@angular/core';
import { HtmlToPlainTextPipe } from './htmlToPlainText.pipe';

@NgModule({
  imports: [],
  declarations: [HtmlToPlainTextPipe],
  exports: [HtmlToPlainTextPipe],
})
export class PipeModule {
  static forRoot() {
    return {
      ngModule: PipeModule,
    };
  }
}
