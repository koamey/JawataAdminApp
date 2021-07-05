import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateConfigService {
  title: string;
  constructor(private translate: TranslateService) { }

  getDefaultLanguage() {
    let language = this.translate.getBrowserLang();
    this.translate.setDefaultLang(language);
    return language;
  }

  setLanguage(setLang) {
    this.translate.use(setLang);
  }

  get(title) {
    this.translate.get(title).subscribe((res: string) => {
      this.title = res;
      // alert('res is:-' + res);
    });
    return this.title;
  }

}
