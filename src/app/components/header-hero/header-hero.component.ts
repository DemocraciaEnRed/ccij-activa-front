import { Component,Input } from "@angular/core";

@Component({
    selector: 'header-hero',
    templateUrl: './header-hero.component.html',
    styleUrls: ['./header-hero.component.scss']
})
export class HeaderHeroComponent {
    @Input() title: string = 'Campañas de liberación accessibles a la comunidad';
    @Input() heroImg : string = '../../../assets/images/logo-oscuro.png';
    @Input() secondaryImg : string = '../../../assets/images/ccij-logo.png';
    @Input() link: string = "#";
    @Input() linkText : string = "Ver sitio"
}