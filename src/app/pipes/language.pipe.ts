import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'language'
})
export class LanguagePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): string {
    if (value !== null && value !== 'undefined') {
      let dato: string[] = Object.values(value);
      return dato[0];
    }
    return "";
  }

}
