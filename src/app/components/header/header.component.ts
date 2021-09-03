import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    
    public defaultLang : string  = 'en';
    public currentLang : string;
    public supportedLangs : Array<string> = ['en', 'es'];
    public width  = screen.width < 1024;

    constructor(public translate : TranslateService){
        translate.addLangs(this.supportedLangs);
        translate.setDefaultLang(this.defaultLang);
        // const browserLang = translate.getBrowserLang();
        // se pidio forzar le ingles
        const browserLang = this.defaultLang;

        this.currentLang = browserLang.match(/en|es/) ? browserLang : 'en'
        translate.use(this.currentLang);
        console.log('resolucion: ', this.width);
    }
    public changeLang(lang: string){
        this.translate.use(lang);
        this.currentLang = lang
        
    }
    
}