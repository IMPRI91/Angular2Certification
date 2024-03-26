import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes[] = [
    { 
        path: '',
        pathMatch: 'full', 
        component: AppComponent,
    },
    { 
        path: 'summary',
        loadComponent: () =>
            import('./components/step3/carSummary.component').then(
                (c) => c.CarSummaryComponent
            ),
    },
    { 
        path: '**',
        redirectTo: '', 
    },
];
