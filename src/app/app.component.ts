import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { CarConfigService } from './services/carconfig.service';
import { CarModel } from './models/carmodel';
import { FormsModule } from '@angular/forms';
import { CarModelModule } from './stepComponents/step1/car-model.module';
import { StorageService } from './services/storage.service';
import { CarConfigModule } from './stepComponents/step2/car-config.module';
import { CarOptionsService } from './services/caroptions.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, HttpClientModule, RouterModule, CarModelModule, CarConfigModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CarConfigService, CarOptionsService, StorageService],
})
export class AppComponent implements OnInit {
  imageURL: string | null = null;

  isCarConfigAvailable: boolean = true;
  isCarSummaryAvailable: boolean = true;
  selectedModel: string = 'default';
  carModels?: Observable<CarModel[]>;
 
  receivedData: string = 'default';
  private dataSubscription: Subscription;

  constructor(private readonly storageService: StorageService, private readonly service: CarConfigService){ 
    this.storageService.clear();
    this.dataSubscription = this.storageService.subscribeToKeyUpdates().subscribe(updatedKey => {       
        switch (updatedKey){
          case 'model':
            this.receivedData = this.storageService.getData('model');
            this.carModelSelected(this.receivedData, this.storageService.getData('color'));
            break;
            case 'color':
              this.carModelSelected(this.receivedData, this.storageService.getData('color'));
              break;            
        }
      
    });
  }

  public ngOnInit(): void {

  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

  
  carModelSelected(model: string, color: string){
    console.log("MODELOO:",model);
    if(model != 'default'){
      this.imageURL = "https://interstate21.com/tesla-app/images/" + model +"/"+color+".jpg";
      this.isCarConfigAvailable = false;
    }
    else{
      this.imageURL = '';
      this.isCarConfigAvailable = true;
    }
    this.selectedModel = model;

  }


  onCarConfigChanged(isCarConfigAvailable: boolean){
    this.isCarConfigAvailable = isCarConfigAvailable;
  }

  onCarSummaryChanged(isCarSummaryAvailable: boolean){
    this.isCarSummaryAvailable = isCarSummaryAvailable;
  }
}
