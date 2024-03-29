/**********************************************************************
Name: app.routes.ts
Copyright © 2024 

Purpose:


History
VERSION     AUTHOR    		  DATE 		      DETAIL					
1.0    	Ricardo Imperial        29/03/2024          Router Class.		
***********************************************************************/
import { Routes } from "@angular/router";
import { CarModelComponent } from "./components/step1/car-model.component";
import { CarSummaryComponent } from "./components/step3/car-summary.component";
import { CarConfigComponent } from "./components/step2/car-config.component";

export const routes: Routes = [
  { path: "model", component: CarModelComponent },
  { path: "configuration", component: CarConfigComponent },
  { path: "summary", component: CarSummaryComponent },
  { path: "**", redirectTo: "/model", pathMatch: "full" },
];
