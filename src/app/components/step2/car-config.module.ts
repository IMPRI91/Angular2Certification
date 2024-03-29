/**********************************************************************
Name: car-config.module.ts
Copyright © 2024 

Purpose:


History
VERSION     AUTHOR    		  DATE 		      DETAIL					
1.0    	Ricardo Imperial 29/03/2024   Step2 Module.		
***********************************************************************/
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { CarConfigComponent } from "./car-config.component";

@NgModule({
  declarations: [CarConfigComponent],
  imports: [CommonModule, HttpClientModule, FormsModule],
  exports: [CarConfigComponent],
})
export class CarConfigModule {}
