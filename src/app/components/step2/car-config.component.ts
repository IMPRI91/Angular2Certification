/**********************************************************************
Name: car-config.component.ts
Copyright © 2024 

Purpose:
This component will be responsable to render the step2 and select the
configuration and packages we want in our car. This selection will be saved
in a service storage like in the step1. After we select this we can see
step3.

History
VERSION     AUTHOR    		  DATE 		      DETAIL					
1.0    	Ricardo Imperial 29/03/2024   Step2 Component.		
***********************************************************************/
import { Component } from "@angular/core";
import { CarOptionsService } from "../../services/caroptions.service";
import { StorageService } from "../../services/storage.service";
import { CarOptions, Options } from "../../models/caroptions";
import { StorageEnum } from "../../models/storage-values";

@Component({
  selector: "car-config",
  templateUrl: "./car-config.component.html",
  styleUrls: ["./car-config.component.scss"],
})
export class CarConfigComponent {
  selectedCarConfig: number = 0;
  selectedTow: boolean = false;
  selectedYoke: boolean = false;
  carOptions: Options[] = [];
  showHitch: boolean = false;
  showSteering: boolean = false;
  selectedRange: number = 0;
  selectedPrice: number = 0;
  selectedSpeed: number = 0;

  constructor(
    private readonly storageService: StorageService,
    private readonly service: CarOptionsService
  ) {}

  ngOnInit(): void {
    this.service
      .getCarOptions(this.storageService.getData(StorageEnum.MODEL))
      .subscribe((carOptions: CarOptions) => {
        this.carOptions = carOptions.configs;
        this.showHitch = carOptions.towHitch;
        this.showSteering = carOptions.yoke;
        if (this.storageService.getData(StorageEnum.HITCH)) {
          this.selectedTow = JSON.parse(this.storageService.getData(StorageEnum.HITCH));
        }
        if (this.storageService.getData(StorageEnum.STEERING)) {
          this.selectedYoke = JSON.parse(
            this.storageService.getData(StorageEnum.STEERING)
          );
        }
        if (this.storageService.getData(StorageEnum.CONFIG)) {
          this.selectedCarConfig = JSON.parse(
            this.storageService.getData(StorageEnum.CONFIG)
          );
          console.log("Select:", this.selectedCarConfig);
          const currentCarConfig = this.carOptions.find(
            (cfg) => cfg.id === +this.selectedCarConfig
          );
          if (currentCarConfig) {
            this.selectedRange = JSON.parse(
              this.storageService.getData(StorageEnum.RANGE)
            );
            this.selectedPrice = JSON.parse(
              this.storageService.getData(StorageEnum.CONFIGCOST)
            );
            this.selectedSpeed = JSON.parse(
              this.storageService.getData(StorageEnum.SPEED)
            );
          }
        } else {
          this.selectedCarConfig = 0;
        }
      });
  }

  onCarConfigChange(config: number): void {
    if (config != 0) {
      const currentCarConfig = this.carOptions.find(
        (cfg) => cfg.id === +config
      );
      if (currentCarConfig) {
        this.selectedRange = currentCarConfig.range;
        this.selectedPrice = currentCarConfig.price;
        this.selectedSpeed = currentCarConfig.speed;
        this.storageService.saveData(StorageEnum.CONFIGDESCRIPTION,currentCarConfig.description);
        this.storageService.saveData(StorageEnum.CONFIGCOST, currentCarConfig.price);
        this.storageService.saveData(StorageEnum.RANGE, currentCarConfig.range);
        this.storageService.saveData(StorageEnum.SPEED, currentCarConfig.speed);
      }
    } else {
      this.selectedCarConfig = 0;
      this.storageService.remove(StorageEnum.CONFIGDESCRIPTION);
      this.storageService.remove(StorageEnum.CONFIGCOST);
      this.storageService.remove(StorageEnum.RANGE);
      this.storageService.remove(StorageEnum.SPEED);
    }
    this.storageService.saveData(StorageEnum.CONFIG, config);
  }

  onCarIncludeTowChange(includeTow: boolean): void {
    this.storageService.saveData(StorageEnum.HITCH, "" + includeTow);
  }

  onCarIncludeYokeChange(includeYoke: boolean): void {
    this.storageService.saveData(StorageEnum.STEERING, "" + includeYoke);
  }
}
