import { HttpService } from './services/http.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProjectService } from './services/project.service';
import { Project } from './model/project';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('navbarToggler') navbarToggler:ElementRef;
  public submitted = false;
  public defaultLang : string  = 'en';
  public currentLang : string;
  public supportedLangs : Array<string> = ['en', 'es'];

  constructor(
    public translate: TranslateService,
    public projectService: ProjectService
    ) {
      translate.addLangs(this.supportedLangs);
      translate.setDefaultLang(this.defaultLang);

      const browserLang = translate.getBrowserLang();
      this.currentLang = browserLang.match(/en|es/) ? browserLang : 'en'
      translate.use(this.currentLang);
      
    }

  navBarTogglerIsVisible() {
    return this.navbarToggler.nativeElement.offsetParent !== null;
  }

  collapseNav() {
    if (this.navBarTogglerIsVisible()) {
      this.navbarToggler.nativeElement.click();
    }
  }
  public changeLang(lang: string){
    this.translate.use(lang);
  }

}
