import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CarSummaryComponent } from './car-summary.component';

@NgModule({
  declarations: [CarSummaryComponent],
  imports:[
    CommonModule, HttpClientModule, FormsModule
  ],
  exports: [CarSummaryComponent],
})

export class CarSummaryModule{}