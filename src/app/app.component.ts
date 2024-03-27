import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarConfigService } from './services/carconfig.service';
import { CarConfigStorageService } from './services/carconfig-storage.service';
import { CarModel } from './models/carmodel';
import { FormsModule } from '@angular/forms';
import { CarModelModule } from './stepComponents/step1/car-model.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, HttpClientModule, RouterModule, CarModelModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CarConfigService, CarConfigStorageService],
})
export class AppComponent implements OnInit {
  imageURL: string | null = null;
  selectedStep: number = 1;
  isCarConfigAvailable: boolean = true;
  isCarSummaryAvailable: boolean = true;
  selectedModel: string = 'default';
  carModels?: Observable<CarModel[]>;
 

  constructor(private readonly storageService: CarConfigStorageService, private readonly service: CarConfigService){}

  public ngOnInit(): void {
    this.storageService.clear();
  }

  
  onModelSelected(model: string){
    this.selectedModel = model;
    this.isCarConfigAvailable = false;
  }


  onCarConfigChanged(isCarConfigAvailable: boolean){
    this.isCarConfigAvailable = isCarConfigAvailable;
  }

  onCarSummaryChanged(isCarSummaryAvailable: boolean){
    this.isCarSummaryAvailable = isCarSummaryAvailable;
  }
}
