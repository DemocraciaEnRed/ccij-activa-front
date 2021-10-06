import { Component, Input, OnInit } from '@angular/core';
import { Campaign } from '../../model/campaign';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'project-link',
    templateUrl: 'project-link.component.html'
})
export class ProjectLinkComponent implements OnInit {

    @Input() project: Campaign;
    public bkg: string;

    public constructor(public sanitizer: DomSanitizer) {
    }

    public sanitize(style): any {
        return this.sanitizer.bypassSecurityTrustStyle(style);
    }

    public ngOnInit(): void {
        const bkgAux = 'linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(' +
            environment.imgBase + this.project['image_cover'].id  + ') no-repeat';
        this.bkg = this.sanitize(bkgAux);
    }

}
