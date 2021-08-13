import { Routes } from '@angular/router';
import { MainComponent } from '../pages/main/main.component';
import { ProjectViewComponent } from '../pages/project-view/project-view.component';
import { FullListComponent } from '../pages/full-list/full-list.component';
import { PoliticianSliderComponent } from '../components/politician-slider/politician-slider.component';

export const AppRoutes = [
    { path: '', pathMatch: 'full', component: MainComponent },
    { path: "proyecto/:id", component: ProjectViewComponent },
    { path: "proyecto/:id", component: PoliticianSliderComponent },
    { path: "lista/:id", component: FullListComponent },
    { path: '**', redirectTo: '' }
];