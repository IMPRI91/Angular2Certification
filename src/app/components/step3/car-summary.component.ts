/**********************************************************************
Name: car-summary.component.ts
Copyright © 2024 

Purpose:
This component will be responsable to render the step3 where we can check
all the selected information on the step1 and step2. We can go back to the
other steps if we wish to change any configuration.

History
VERSION     AUTHOR    		  DATE 		      DETAIL					
1.0    	Ricardo Imperial 29/03/2024   Step3 Component.		
***********************************************************************/
import { Component } from "@angular/core";
import { StorageService } from "../../services/storage.service";
import { StorageEnum } from "../../models/storage-values";

@Component({
  selector: "car-summary",
  templateUrl: "./car-summary.component.html",
  styleUrls: ["./car-summary.component.scss"],
})
export class CarSummaryComponent {
  carDescription: string = "";
  carConfiguration: string = "";
  carColor: string = "";
  carRange: string = "";
  carSpeed: string = "";
  carTotalCost: number = 0;
  hasHitch: boolean = false;
  hasSteering: boolean = false;
  packagesCost: number = 1000;
  configCost: number = 0;
  colorCost: number = 0;

  constructor(private readonly storageService: StorageService) {}

  ngOnInit(): void {
    this.carDescription = this.storageService.getData(StorageEnum.MODELDESCRIPTION);
    this.carConfiguration = this.storageService.getData(StorageEnum.CONFIGDESCRIPTION);
    this.carColor = this.storageService.getData(StorageEnum.COLORDESCRIPTION);
    this.carRange = this.storageService.getData(StorageEnum.RANGE);
    this.carSpeed = this.storageService.getData(StorageEnum.SPEED);
    this.configCost = JSON.parse(this.storageService.getData(StorageEnum.CONFIGCOST));
    this.colorCost = JSON.parse(this.storageService.getData(StorageEnum.COLORCOST));
    this.hasHitch = JSON.parse(this.storageService.getData(StorageEnum.HITCH));
    this.hasSteering = JSON.parse(this.storageService.getData(StorageEnum.STEERING));

    this.carTotalCost = this.colorCost + this.configCost;

    if (this.hasHitch) {
      this.carTotalCost += this.packagesCost;
    }
    if (this.hasSteering) {
      this.carTotalCost += this.packagesCost;
    }
  }
}
