import {Component} from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'car-summary',
  templateUrl: './car-summary.component.html',
  styleUrls: ['./car-summary.component.scss'],
})
export class CarSummaryComponent {
  carDescription: string = '';
  carConfiguration: string = '';
  carColor: string = '';
  carRange: string = '';
  carSpeed: string = '';
  carTotalCost: number = 0;
  hasHitch: boolean = false;
  hasSteering: boolean = false;

  constructor(private readonly storageService: StorageService){}

  ngOnInit(): void {
    //this.storageService.getData('model')
    this.carDescription = this.storageService.getData('modeldesc');
    this.carConfiguration = this.storageService.getData('configdesc');
    this.carColor = this.storageService.getData('colordesc');
    this.carRange = this.storageService.getData('range');
    this.carSpeed = this.storageService.getData('speed');
    //this.carDescription = this.storageService.getData('colorprice');    
    //this.hasHitch = this.storageService.getData('hitch');
    //this.hasSteering = this.storageService.getData('steering');

    //Adding Total
    this.carTotalCost = (+this.storageService.getData('colorprice')) + (+this.storageService.getData('configprice'));
    //Adding hitching and steering default costs$1,000
    if(this.hasHitch){      
      this.carTotalCost += 1000;
    }
    if(this.hasSteering){
      this.carTotalCost += 1000;
    }
   }

}
