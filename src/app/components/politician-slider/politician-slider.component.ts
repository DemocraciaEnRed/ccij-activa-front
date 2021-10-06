import { Component, Input, AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { Action } from '../../model/action';
import { Campaign } from '../../model/campaign';
import * as $ from 'jquery';

@Component({
    selector: 'politician-slider',
    templateUrl: './politician-slider.component.html',
    styleUrls: ['./politician-slider.component.scss']
})
export class PoliticianSliderComponent implements OnInit {

    @Input() project: Campaign;
    @Input() politiciansList: Action[];

    public constructor() {
    }

    public ngOnInit(): void {
    }

}
