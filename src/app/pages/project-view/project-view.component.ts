import { Component, OnInit ,  AfterViewInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../environments/environment';
import { STRING_TYPE } from '@angular/compiler/src/output/output_ast';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { Campaign } from '../../model/campaign';
import { Action } from '../../model/action';
import { CampaignsService } from '../../services/campaigns.service';

@Component({
    selector: 'project-view',
    templateUrl: './project-view.component.html',
    styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent implements OnInit {

    public currentProject: Campaign = new Campaign();
    public projectDescription: SafeHtml;
    // public politiciansList = new Array<Politician>();
    public actionsListSlider = new Array<Action>();
    public projectImage = ''; 
    public backgroundAux = '';
    public link = 'descripcion';
    public textLink= '' ;
    public sanitizeStyle(style): any {
        return this.sanitizer.bypassSecurityTrustStyle(style);
    }
    public sanitizeHtml(html: string): any {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }

    

    constructor(private route: ActivatedRoute,
        private campaignsService: CampaignsService,
        public sanitizer: DomSanitizer,
        private translate: TranslateService) {
    }
    
    public ngOnInit(): void {
        this.route.paramMap.subscribe(params => {

            this.campaignsService
                .getById(params['params']['id'])
                .then(p => {
                    this.currentProject = p;
                    this.textLink = this.translate.instant('PROJECT.STATIC.DEF_TEXT_LINK');
                    // $('#newsletter_project').val(p.name).trigger('input').trigger('change');
                    // this.link = `/proyectos/${this.currentProject.slug}#descripcion`;
                    // contruimos la url de la imagen, si se quiere usar directo la imagne en un <img> usar backgroundAux
                    this.backgroundAux =  environment.imgBase + this.currentProject['image_cover']['id'];
                    // const backgroundAux = 'url(' +
                    //     environment.imgBase + this.currentProject.dir.replace(/\\/g, '/') + '/' + this.currentProject.image + ')';
                    this.projectImage = this.sanitizeHtml(this.backgroundAux);
                    this.projectImage = this.backgroundAux;

                    this.projectDescription = this.currentProject['translations'][0]['description'];
                    // this.projectDescription = this.sanitizeHtml(this.currentProject['translations'][0]['description'].replace(/(http.*)[ .]/, '<a href="$1" target="_blank" rel="noopener noreferrer">LINK</a> '));

                    for (let action in this.currentProject['actions']){
                        this.actionsListSlider.push(this.currentProject['actions'][action])
                    }
                    // this.politicianService
                    //     .getAllByProject(p.slug, true)
                    //     .then(response => {
                    //         /*this.politiciansList = response;
                    //         var rPoliticiansListSlider = [];
                    //         response.forEach(function(politician) {
                    //             if (politician.position.name == 'Presidente')
                    //               rPoliticiansListSlider.push(politician)
                    //         });
                    //         this.politiciansListSlider = rPoliticiansListSlider;*/
                    //         this.politiciansListSlider = response.slice(0, 30).sort(function() {return .5 - Math.random(); });
                    //     });
                    const element = document.querySelector('#activa');
                    element.scrollIntoView();
                });
        });
        this.checkURL();

    }

    clickScroll 
        (fragment) {
            window.location.hash = '#' + fragment;
            console.log(fragment);
          }
    
    checkURL(){
        // solucion tmeporal al scrolling con hash en angular
       let url = document.URL;
       
       if (url.includes('#')){
            let fragment = url.substr(url.indexOf('#')+1);
            this.clickScroll(fragment);
       }
         
    }

    // AfterViewInit()   {
    //     console.log('AFTER');
    //     this.checkURL();
    // } 

    
}
