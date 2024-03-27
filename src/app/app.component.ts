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


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, HttpClientModule, RouterModule, CarModelModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CarConfigService, StorageService],
})
export class AppComponent implements OnInit {
  imageURL: string | null = null;

  isCarConfigAvailable: boolean = true;
  isCarSummaryAvailable: boolean = true;
  selectedModel: string = 'default';
  carModels?: Observable<CarModel[]>;
 
  data: string = 'default';
  private dataSubscription: Subscription;

  constructor(private readonly storageService: StorageService, private readonly service: CarConfigService){
    this.dataSubscription = this.storageService.data$.subscribe(newData => {
      this.data = newData;
      if(this.data != 'default'){
        this.imageURL = "https://interstate21.com/tesla-app/images/" + this.data +"/black.jpg";
      }
      else{
        this.imageURL = '';
      }

    });
  }

  public ngOnInit(): void {
    this.storageService.clear();
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
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
