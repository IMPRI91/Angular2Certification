import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarModelComponent } from './car-model.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CarModelComponent],
  imports:[
    CommonModule, HttpClientModule,
  ],
  exports: [CarModelComponent],
})

export class CarModelModule{}