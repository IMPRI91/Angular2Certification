import {Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'car-model',
})
export class CarModelComponent {
  @Output() carModelFlag = new EventEmitter<boolean>();
  eventEmitted: boolean = false;

  onCarSelected(car: string): void{
    console.log('Selected car:', car);
    if(!this.eventEmitted){
      this.carModelFlag.emit(true);
      this.eventEmitted = true;
    }
    
  }

  onColorSelected(color: string): void{
    console.log('Selected color:', color);
    if(!this.eventEmitted){
      this.carModelFlag.emit(true);
      this.eventEmitted = true;
    }
  }

}
