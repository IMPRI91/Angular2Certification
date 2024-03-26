import {Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'car-config',
  templateUrl: './car-config.component.html',
  styleUrls: ['./car-config.component.scss'],
})
export class CarConfigComponent {
  @Output() carConfigFlag = new EventEmitter<boolean>();
  eventEmitted: boolean = false;

  onCarSelected(car: string): void{
    console.log('Selected car:', car);
    if(!this.eventEmitted){
      this.carConfigFlag.emit(true);
      this.eventEmitted = true;
    }
  }

  onOptionSelected(optionId: string, isChecked: boolean): void{
    console.log('Option selected: ${isChecked}');
    if(!this.eventEmitted){
      this.carConfigFlag.emit(true);
      this.eventEmitted = true;
    }
  }

}
