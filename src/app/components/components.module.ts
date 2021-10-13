import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PoliticianCardComponent } from './politician-card/politician-card.component';
import { TallyComponent } from './tally/tally.component';
import { PoliticianSliderComponent } from './politician-slider/politician-slider.component';
import { SliderComponent } from './slider/slider.component';
import { AppRoutes } from '../helpers/routes.helper';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient} from '@angular/common/http';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [
        TallyComponent,
        PoliticianCardComponent,
        PoliticianSliderComponent,
        SliderComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forRoot(AppRoutes, { enableTracing: false }),
        TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
      }
    })
    ],
    exports: [
        TallyComponent,
        PoliticianCardComponent,
        PoliticianSliderComponent,
        SliderComponent
    ]
})
export class ComponentsModule {
}
