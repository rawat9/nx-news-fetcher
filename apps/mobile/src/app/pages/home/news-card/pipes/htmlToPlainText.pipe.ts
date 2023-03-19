import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'htmlToPlainText' })
export class HtmlToPlainTextPipe implements PipeTransform {
  /**
   * Transform
   *
   * @param {string} value
   * @returns {string}
   */
  transform(value: string): string {
    return value
      ? String(value)
          .replace(/<[^>]+>/gm, '')
          .replace('[&hellip;]', '...')
      : '';
  }
}
