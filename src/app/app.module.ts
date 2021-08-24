import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { HttpService } from './services/http.service';
import { PartyService } from './services/party.service';
import { ConfigService } from './services/config.service';
import { ProjectService } from './services/project.service';
import { DistrictService } from './services/district.service';
import { PoliticianService } from './services/politician.service';
import { PathLocationStrategy, LocationStrategy } from '@angular/common';
import { ProjectLinkComponent } from './components/project-link/project-link.component';


import { HttpModule } from '@angular/http';
import { HttpClient} from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { HeaderHeroComponent } from './components/header-hero/header-hero.component';
import { FooterComponent } from './components/footer/footer.component';
import { ComponentsModule } from './components/components.module';
import { FullListModule } from './pages/full-list/full-list.module';
import { AppRoutes } from './helpers/routes.helper';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { ProjectViewComponent } from './pages/project-view/project-view.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { MainComponent } from './pages/main/main.component';
import { VideoSliderComponent } from './components/video-slider/video-slider.component';
import { PropuestaSliderComponent } from './components/propuesta-slider/propuesta-slider.component';
import { ArticleComponent } from './components/article/article.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
//import 'angular-carousel';
import * as angularCarousel from "angular-carousel";


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    ProjectLinkComponent,
    HeaderComponent,
    HeaderHeroComponent,
    FooterComponent,
    ProjectViewComponent,
    VideoSliderComponent,
    PropuestaSliderComponent,
    ArticleComponent,
    MainComponent,
    ProjectCardComponent,
    FaqsComponent
  ],
  imports: [
    ComponentsModule,
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes, { enableTracing: false }),
    HttpClientModule,
    ReactiveFormsModule,
    Ng2GoogleChartsModule,
    //MainModule,
    FormsModule,
    HttpModule,
    FullListModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    HttpService,
    PartyService,
    ConfigService,
    ProjectService,
    DistrictService,
    PoliticianService,
    {provide: LocationStrategy, useClass: PathLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
