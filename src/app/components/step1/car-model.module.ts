/**********************************************************************
Name: car-model.module.ts
Copyright © 2024 

Purpose:


History
VERSION     AUTHOR    		  DATE 		      DETAIL					
1.0    	Ricardo Imperial 29/03/2024   Step3 Module.		
***********************************************************************/
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CarModelComponent } from "./car-model.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [CarModelComponent],
  imports: [CommonModule, HttpClientModule, FormsModule],
  exports: [CarModelComponent],
})
export class CarModelModule {}
