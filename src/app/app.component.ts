import { HttpService } from './services/http.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProjectService } from './services/project.service';
import { Project } from './model/project';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('navbarToggler') navbarToggler:ElementRef;

  public projectList: Array<Project>;
  public submitted = false;
  public supportedLangs: Array<string>;
  public defaultLang : string  = 'en';
  public currentLang : string;
  constructor(
    private httpService: HttpService,
    private projectService: ProjectService,
    public translate: TranslateService,
    public fb: FormBuilder) {

      this.supportedLangs = ['en', 'es'];

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
