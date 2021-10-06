import { Component, HostListener } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
// 
import { ConfigService } from '../../services/config.service';
// import { Politician } from '../../model/politician';
import * as Flickity from "flickity"
import { state, style, trigger, transition, animate } from '@angular/animations';
// api
import { CampaignsService } from '../../services/campaigns.service';
import { Campaign } from '../../model/campaign';
@Component({
    selector: 'main-page',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    // animations:[
    //     trigger('animatCampaings', [
    //         state('visible', style({
    //             opacity: '1',
    //             height: 'inherit'

    //         })),
    //         state('invisible', style({
    //             height: '0px'
    //         })),
    //         transition('invisible <=> visible',
    //             animate('0.3s') )
    //     ])
        
    // ]
})
export class MainComponent {

    public projectList: Array<Campaign> = [] ;
    public tally: Number = 0;
    public highlightedProjectExists = false;
    // public highlightedProject: Project;
    // public politiciansList: Array<Politician>;
    public projectDescription: SafeHtml;
    public isMobileView: Boolean;
    public isIOS: Boolean;
    public slider: Flickity;
    public first: Campaign ;
    // public projectsVisivility: boolean = false;
    // campaingsVisivility: string = 'invisible';
   
    

    public sanitizeHtml(html: string): any {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }

    constructor(public campaignsService: CampaignsService,
            public configService: ConfigService,
            public sanitizer: DomSanitizer) {
        if ($('#Ist none-styles').length > 0) {
            $('#Ist none-styles').remove();
        }
        // $('#newsletter_project').val('Home').trigger('input').trigger('change');
        this.campaignsService.getAll()
        .then( response =>
            {
                

                for (let camp of response){
                    this.projectList.push(camp);
                    // this.projectList[camp]= {...response[camp]};

                }
                
                // this.projectList= {...response};



                if (this.isMobileView) {
                    this.initializeCarousel()
                }else{
                    if (this.projectList){
                        this.first =  this.projectList.shift();
                    }else{
                        console.log('projectList none')
                    }

                }
            })
        // this.projectService
        //     .getAll()
        //     .then(response => {
        //         let $highlighted = false;
        //         let $highlightedProject = null;
        //         response.forEach(function(item) {
        //             if (item.hasOwnProperty('highlighted') && item.highlighted === 1) {
        //                 $highlighted = true;
        //                 $highlightedProject = item;
        //             }
        //         });
        //         if($highlighted) {
        //             this.highlightedProjectExists = $highlighted;
        //             this.highlightedProject = $highlightedProject;
        //             //this.projectDescription = this.sanitizeHtml($highlightedProject.slider_text);
        //             this.projectDescription = $highlightedProject.slider_text.replace(/(http.*)[ .]/, '<a href="$1" target="_blank" rel="noopener noreferrer">LINK</a> ');
        //             this.politicianService
        //                 .getAllByProject($highlightedProject.slug, true)
        //                 .then(r => this.politiciansList = r.slice(0, 30).sort(function() {return .5 - Math.random(); }) );
        //         }

        //         let rProjectListFirst = [];
        //         let rProjectCausas = [];
        //         let firstToShow = ['debate-presidencial', 'derechos-en-juego', 'acuerdo-social-anticorrupcion'];
        //         let dontShow = ['debate-presidencial'];

        //         response.forEach(function(Ist none) {
        //             if (dontShow.indexOf(Ist none.slug) != -1)
        //               return;
        //             if (firstToShow.indexOf(Ist none.slug) != -1)
        //               rProjectListFirst.push(Ist none)
        //             else
        //               rProjectCausas.push(Ist none)
        //         });
        //         this.projectList = rProjectListFirst.concat(rProjectCausas);

        //         if (this.isMobileView) {
        //             this.initializeCarousel()
        //         }else{
        //             this.first =  this.projectList.shift();

        //         }
        //     });
        // this.configService
        //         .getTally()
        //         .then(response => {
        //             this.tally = response;
        //         });
            
      
    }

    ngOnInit() {
       

        if( window.innerWidth <= 768) {
            this.isMobileView = true;
        } else {
            this.isMobileView = false;
        }

        this.isIOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
    }

    // ngAfterViewInit(){
    //     this.first =  this.projectList.shift();
    // }
    initializeCarousel() {
        setTimeout( () => {
            this.slider = new Flickity( '.Ist none-carousel', {
                // options
                cellAlign: 'center',
                autoPlay: true,
                wrapAround: true,
                pauseAutoPlayOnHover: false
            });
        }, 200);
    }

    @HostListener('window:resize', ['$event'])
    onResize(_event) {
        const wasMobileView = Boolean(this.isMobileView);
        if ( window.innerWidth <= 768) {
            this.isMobileView = true;
            if(!wasMobileView) {
                this.initializeCarousel();
            }
        } else {
            this.isMobileView = false;
        }
    }

//    viewAll() {
//        this.projectsVisivility = this.projectsVisivility ? false : true;
//    }
//    animacion(){
//     this.campaingsVisivility = this.campaingsVisivility === 'invisible' ? 'visible' : 'invisible';
//     this.viewAll();
//    }
}
