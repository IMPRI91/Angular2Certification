/**********************************************************************
Name: car-summary.module.ts
Copyright © 2024 

Purpose:


History
VERSION     AUTHOR    		  DATE 		      DETAIL					
1.0    	Ricardo Imperial 29/03/2024   Step3 Module.		
***********************************************************************/
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CarSummaryComponent } from "./car-summary.component";

@NgModule({
  declarations: [CarSummaryComponent],
  imports: [CommonModule],
  exports: [CarSummaryComponent],
})
export class CarSummaryModule {}
