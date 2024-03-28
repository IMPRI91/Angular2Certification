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
  packagesCost: number = 1000;
  configCost: number = 0;
  colorCost: number = 0;

  constructor(private readonly storageService: StorageService){}

  ngOnInit(): void {
    //this.storageService.getData('model')
    this.carDescription = this.storageService.getData('modeldesc');
    this.carConfiguration = this.storageService.getData('configdesc');
    this.carColor = this.storageService.getData('colordesc');
    this.carRange = this.storageService.getData('range');
    this.carSpeed = this.storageService.getData('speed');
    this.configCost = JSON.parse(this.storageService.getData('configprice'));
    this.colorCost = JSON.parse(this.storageService.getData('colorprice'));    
    this.hasHitch = JSON.parse(this.storageService.getData('hitch'));
    this.hasSteering = JSON.parse(this.storageService.getData('steering'));

    //Adding Total
    this.carTotalCost = this.colorCost + this.configCost;
    //Adding hitching and steering default costs$1,000
    if(this.hasHitch){      
      this.carTotalCost += this.packagesCost;
    }
    if(this.hasSteering){
      this.carTotalCost += this.packagesCost;
    }
   }

}
