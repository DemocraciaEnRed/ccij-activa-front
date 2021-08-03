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
  public formGroup: FormGroup;
  public newsletterMessage: string;
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
      
      this.formGroup = fb.group({
          email: ['', Validators.compose([Validators.email, Validators.required])],
          project: ['']
      });
      this.projectService
          .getAll()
          .then(response => {
              let rProjectList = []
              let excludeProjects = ['debate-presidencial', 'derechos-en-juego', 'acuerdo-social-anticorrupcion'];
              response.forEach(function(project) {
                if (excludeProjects.indexOf(project.slug) == -1)
                  rProjectList.push(project)
              });
              this.projectList = rProjectList;
          });
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
    console.log(lang);
    this.translate.use(lang);
  }

  public submitNewsletter() {
      this.newsletterMessage = '';
      if(this.formGroup.valid) {
        console.log(this.formGroup);
        window.open('https://gmail.us10.list-manage.com/subscribe/post?u=34c72ae7cd29d3ec62b506511&amp;id=3e5cb2fca9&MERGE0='+this.formGroup.value.email);
        this.newsletterMessage = '¡Perfecto! Siga las instrucciones de la página de subscripción';
        this.submitted = true;
        /*
        this.httpService
          .post('api/v1/subscribe', JSON.stringify(this.formGroup.value))
          .then(response => {
            this.newsletterMessage = response;
            this.submitted = true;
          });*/
      } else {
        this.newsletterMessage = 'Ingrese un email válido';
      }
  }

}
