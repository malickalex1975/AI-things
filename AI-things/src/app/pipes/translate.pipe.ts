import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { Observable, catchError, interval, map, of, switchMap, tap } from 'rxjs';
import { HttpService } from '../services/http.service';
import { LANG_URL } from '../constants';

@Pipe({
  name: 'translate',
})
export class TranslatePipe implements PipeTransform {
  language$ = this.languageService.getLanguage();

  constructor(
    private languageService: LanguageService,
    private httpService: HttpService
  ) {}
  transform(value: string): any {
     return this.language$.pipe(
      tap(lang=>console.log(lang)),
      switchMap((lang: string) =>
        this.httpService.getData(LANG_URL + `${lang}.json`)
      ),
      tap(lang=>console.log(lang)),
      map((dict) => {
        if (dict[value] !== undefined) {
          return dict[value];
        } else {
          return value;
        }
      }),
      tap(lang=>console.log(lang)),
      catchError((err)=>{console.log(err);return of(value)}),
    )
  }
}
