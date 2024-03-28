import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarSummaryComponent } from './car-summary.component';

@NgModule({
  declarations: [CarSummaryComponent],
  imports:[
    CommonModule
  ],
  exports: [CarSummaryComponent],
})

export class CarSummaryModule{}