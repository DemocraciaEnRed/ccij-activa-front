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

    constructor(public translate : TranslateService){
        translate.addLangs(this.supportedLangs);
        translate.setDefaultLang(this.defaultLang);
  
        const browserLang = translate.getBrowserLang();
        this.currentLang = browserLang.match(/en|es/) ? browserLang : 'en'
        translate.use(this.currentLang);
    }
    public changeLang(lang: string){
        this.translate.use(lang);
        this.currentLang = lang
    }
    
}