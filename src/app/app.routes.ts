import { Routes } from '@angular/router';
import { CarModelComponent } from './stepComponents/step1/car-model.component';
import { CarSummaryComponent } from './stepComponents/step3/car-summary.component';
import { CarConfigComponent } from './stepComponents/step2/car-config.component';

export const routes: Routes = [
        {path: 'model', component: CarModelComponent},
        {path: 'configuration', component: CarConfigComponent},
        {path: 'summary', component: CarSummaryComponent},
        {path: '**', redirectTo: '/model', pathMatch:'full'}
];
