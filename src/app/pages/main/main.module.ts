import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { ProjectService } from '../../services/project.service';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { ConfigService } from '../../services/config.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutes } from '../../helpers/routes.helper';
import { ComponentsModule } from '../../components/components.module';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient} from '@angular/common/http';

//import 'angular-carousel';
import * as angularCarousel from "angular-carousel";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
    declarations: [
        MainComponent,
        ProjectCardComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(AppRoutes, { enableTracing: false }),
        ComponentsModule,
        ReactiveFormsModule,
  
        TranslateModule.forRoot({
            loader: {
              provide: TranslateLoader,
              useFactory: HttpLoaderFactory,
              deps: [HttpClient]
            }
          })
        ],
    providers: [
        ProjectService,
        ConfigService
    ]
})
export class MainModule {
}
