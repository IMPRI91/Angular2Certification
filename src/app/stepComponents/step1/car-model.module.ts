import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarModelComponent } from './car-model.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CarModelComponent],
  imports:[
    CommonModule, HttpClientModule, FormsModule
  ],
  exports: [CarModelComponent],
})

export class CarModelModule{}