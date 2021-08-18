import { Component,Input } from "@angular/core";

@Component({
    selector: 'header-hero',
    templateUrl: './header-hero.component.html',
    styleUrls: ['./header-hero.component.scss']
})
export class HeaderHeroComponent {
    @Input() title: string = 'HEADER.HERO.DEFAULT.TITLE';
    @Input() heroImg : string = '../../../assets/images/logo-oscuro.png';
    @Input() secondaryImg : string = '../../../assets/images/ccij-logo.png';
    @Input() link: string = "#";
    @Input() linkText : string = 'HEADER.HERO.DEFAULT.BUTTON'
}