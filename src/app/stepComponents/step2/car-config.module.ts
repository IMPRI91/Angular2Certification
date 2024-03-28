import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CarConfigComponent } from './car-config.component';

@NgModule({
  declarations: [CarConfigComponent],
  imports:[
    CommonModule, HttpClientModule, FormsModule
  ],
  exports: [CarConfigComponent],
})

export class CarConfigModule{}