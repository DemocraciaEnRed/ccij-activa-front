import { Component,Input } from "@angular/core";
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'header-hero',
    templateUrl: './header-hero.component.html',
    styleUrls: ['./header-hero.component.scss']
})

export class HeaderHeroComponent {
    @Input() title: string = 'HEADER.HERO.DEFAULT.TITLE';
    @Input() heroImg : string = '../../../assets/images/logo-oscuro.png';
    @Input() secondaryImg : string = '../../../assets/images/ccij-logo2.jpg';
    @Input() link: string = "http://ccijustice.org/";
    @Input() linkText : string = 'HEADER.HERO.DEFAULT.BUTTON'
    @Input() callBack : boolean = false;
    @Input() CBclick = null;

    public width  = screen.width < 1024;

    CBC(){

        this.CBclick(this.link);
        
    }
}