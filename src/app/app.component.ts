import { Component, ElementRef, ViewChild } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public submitted = false;
  public currentLanguages = ''
  constructor(private translate: TranslateService) {
    // const browserLanguage = translate.getBrowserLang();
    // se pidio forzar le ingles
    const browserLanguage = 'en';
    translate.setDefaultLang('en');
    translate.use(browserLanguage);
    this.currentLanguages = browserLanguage;
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

}
