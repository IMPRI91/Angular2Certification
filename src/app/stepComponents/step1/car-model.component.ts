import {Component, OnInit } from '@angular/core';
import { CarModel, ColorModel } from '../../models/carmodel';
import { CarConfigService } from '../../services/carconfig.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-car-model',
  templateUrl: './car-model.component.html',
  styleUrls: ['./car-model.component.scss'],
})
export class CarModelComponent implements OnInit{
  showColors: boolean = false;
  selectedModel: string = 'default';
  selectedColor: string = 'black';
  carModels: CarModel[] = [];
  carColors: ColorModel[] = [];

  constructor(private readonly storageService: StorageService, private readonly service: CarConfigService){}

  ngOnInit(): void {
    this.service.getCarsModels().subscribe(
      (carModels: CarModel[]) => {
          this.carModels = carModels;
          if(this.storageService.getData('model')){ 
            const tempColor = this.selectedColor;
            this.selectedModel = this.storageService.getData('model');
            const currentCarColors = this.carModels.find(model => model.code === this.selectedModel);
            if(currentCarColors){
            this.carColors = currentCarColors.colors;
            this.selectedColor = this.storageService.getData('color');
            this.showColors = true;
            }       
          }
          else{
            this.selectedModel = 'default';
          }      
      }
    );
    
   }

    onCarModelChange(selectedCarModel: string){
    if(selectedCarModel !== 'default'){
      const currentCarColors = this.carModels.find(model => model.code === selectedCarModel);
      if(currentCarColors){
        this.selectedColor = currentCarColors.colors[0].code;
        this.carColors = currentCarColors.colors;
        this.storageService.saveData('color',this.selectedColor); 
      }
      if(!this.showColors){
        this.showColors = true;        
      }      
      
    }
    else{
      this.showColors = false;
    }
    this.storageService.saveData('model',selectedCarModel);
    
    
  }

  onCarColorChange(selectedCarColor: string){
    this.storageService.saveData('color',selectedCarColor); 
  }

}
