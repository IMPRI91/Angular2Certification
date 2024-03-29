/**********************************************************************
Name: car-model.component.ts
Copyright © 2024 

Purpose:
This component will be responsable to render the step1 and select the
model and the car we pretend to select. This selection will be saved
in a service storage.

History
VERSION     AUTHOR    		  DATE 		      DETAIL					
1.0    	Ricardo Imperial 29/03/2024   Step2 Component.		
***********************************************************************/
import { Component, OnInit } from "@angular/core";
import { CarModel, ColorModel } from "../../models/carmodel";
import { CarConfigService } from "../../services/carconfig.service";
import { StorageService } from "../../services/storage.service";
import { StorageEnum } from "../../models/storage-values";

@Component({
  selector: "app-car-model",
  templateUrl: "./car-model.component.html",
  styleUrls: ["./car-model.component.scss"],
})
export class CarModelComponent implements OnInit {
  showColors: boolean = false;
  selectedModel: string = StorageEnum.DEFAULT;
  selectedColor: string = "black";
  carModels: CarModel[] = [];
  carColors: ColorModel[] = [];

  constructor(
    private readonly storageService: StorageService,
    private readonly service: CarConfigService
  ) {}

  ngOnInit(): void {
    this.service.getCarsModels().subscribe((carModels: CarModel[]) => {
      this.carModels = carModels;
      if (this.storageService.getData(StorageEnum.MODEL)) {
        const tempColor = this.selectedColor;
        this.selectedModel = this.storageService.getData(StorageEnum.MODEL);
        const currentCarColors = this.carModels.find(
          (model) => model.code === this.selectedModel
        );
        if (currentCarColors) {
          this.carColors = currentCarColors.colors;
          this.selectedColor = this.storageService.getData(StorageEnum.COLOR);
          this.showColors = true;
        }
      } else {
        this.selectedModel = StorageEnum.DEFAULT;
      }
    });
  }

  onCarModelChange(selectedCarModel: string) {
    if (selectedCarModel !== StorageEnum.DEFAULT) {
      const currentCarModel = this.carModels.find(
        (model) => model.code === selectedCarModel
      );
      if (currentCarModel) {
        this.selectedColor = currentCarModel.colors[0].code;
        this.carColors = currentCarModel.colors;
        this.storageService.saveData(StorageEnum.COLOR, this.selectedColor);
        this.storageService.saveData(StorageEnum.COLORCOST,currentCarModel.colors[0].price);
        this.storageService.saveData(StorageEnum.COLORDESCRIPTION,currentCarModel.colors[0].description);
        this.storageService.saveData(StorageEnum.MODELDESCRIPTION, currentCarModel.description);
      }
      if (!this.showColors) {
        this.showColors = true;
      }
    } else {
      this.showColors = false;
      this.storageService.saveData(StorageEnum.MODELDESCRIPTION, "");
    }
    this.storageService.saveData(StorageEnum.MODEL, selectedCarModel);
    this.storageService.remove(StorageEnum.HITCH);
    this.storageService.remove(StorageEnum.STEERING);
    this.storageService.remove(StorageEnum.CONFIG);
  }

  onCarColorChange(selectedCarColor: string) {
    this.storageService.saveData(StorageEnum.COLOR, selectedCarColor);
    const currentColor = this.carColors.find(
      (color) => color.code === selectedCarColor
    );
    if (currentColor) {
      this.storageService.saveData(StorageEnum.COLORCOST, currentColor.price);
      this.storageService.saveData(StorageEnum.COLORDESCRIPTION, currentColor.description);
    }
  }
}
