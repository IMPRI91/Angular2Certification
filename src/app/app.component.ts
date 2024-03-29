/**********************************************************************
Name: app.component.ts
Copyright © 2024 

Purpose:
This is the main component where we gonna render and control all the steps
and conditions that the app have.

History
VERSION     AUTHOR    		  DATE 		      DETAIL					
1.0    	Ricardo Imperial 29/03/2024     Main Component.		
***********************************************************************/
import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterModule, RouterOutlet } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { Observable, Subscription } from "rxjs";
import { CarConfigService } from "./services/carconfig.service";
import { CarModel } from "./models/carmodel";
import { FormsModule } from "@angular/forms";
import { CarModelModule } from "./components/step1/car-model.module";
import { StorageService } from "./services/storage.service";
import { CarConfigModule } from "./components/step2/car-config.module";
import { CarOptionsService } from "./services/caroptions.service";
import { CarSummaryModule } from "./components/step3/car-summary.module";
import { StorageEnum } from "./models/storage-values";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    HttpClientModule,
    RouterModule,
    CarModelModule,
    CarConfigModule,
    CarSummaryModule,
  ],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [CarConfigService, CarOptionsService, StorageService],
})
export class AppComponent {
  imageURL: string | null = null;
  imagesSource: string = "https://interstate21.com/tesla-app/images/";

  isCarConfigAvailable: boolean = true;
  isCarSummaryAvailable: boolean = true;
  selectedModel: string = StorageEnum.DEFAULT;
  carModels?: Observable<CarModel[]>;

  receivedData: string = StorageEnum.DEFAULT;
  private dataSubscription: Subscription;

  constructor(
    private router: Router,
    private readonly storageService: StorageService,
    private readonly service: CarConfigService
  ) {
    this.router.navigate(["/model"]);
    this.storageService.clear();
    this.dataSubscription = this.storageService
      .subscribeToKeyUpdates()
      .subscribe((updatedKey) => {
        switch (updatedKey) {
          case StorageEnum.MODEL:
            this.receivedData = this.storageService.getData(StorageEnum.MODEL);
            this.carModelSelected(
              this.receivedData,
              this.storageService.getData(StorageEnum.COLOR)
            );
            break;
          case StorageEnum.COLOR:
            this.carColorSelected(
              this.receivedData,
              this.storageService.getData(StorageEnum.COLOR)
            );
            break;
          case StorageEnum.CONFIG:
            if (
              this.storageService.getData(StorageEnum.CONFIG) &&
              JSON.parse(this.storageService.getData(StorageEnum.CONFIG)) != 0
            ) {
              this.isCarSummaryAvailable = false;
            } else {
              this.isCarSummaryAvailable = true;
            }
            break;
        }
      });
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

  carModelSelected(model: string, color: string) {
    if (model != StorageEnum.DEFAULT) {
      this.imageURL = this.imagesSource + "" + model + "/" + color + ".jpg";
      this.isCarConfigAvailable = false;
      this.isCarSummaryAvailable = true;
    } else {
      this.imageURL = "";
      this.isCarConfigAvailable = true;
      this.isCarSummaryAvailable = true;
    }
    this.selectedModel = model;
  }


  carColorSelected(model: string, color: string) {
    if (model != StorageEnum.DEFAULT) {
      this.imageURL = this.imagesSource + "" + model + "/" + color + ".jpg";
      this.isCarConfigAvailable = false;
    } 
  }

}
