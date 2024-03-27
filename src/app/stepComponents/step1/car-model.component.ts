import {Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CarModel } from '../../models/carmodel';
import { CarConfigService } from '../../services/carconfig.service';

@Component({
  selector: 'app-car-model',
  templateUrl: './car-model.component.html',
  styleUrls: ['./car-model.component.scss'],
})
export class CarModelComponent implements OnInit{
  models: any[] = [1,2,3,4];
  colors: any[] = [];
  imageURL: string = 'https://interstate21.com/tesla-app/images/';
  selectedModel: string = 'default';
  selectedColor: string = 'black';
  selectedCarImage: string = '';
  carModels?: Observable<CarModel[]>;


  private valueSubject = new Subject<string>();
  value$ = this.valueSubject.asObservable();

  constructor(private readonly service: CarConfigService){}

  ngOnInit(): void {
    console.log("ON INIT------------" );
    /*this.service.getCarsModels().subscribe(
      (carModels: CarModel[]) => {
          this.carModels = carModels;
          console.log("CARMODEL" + this.carModels.length);        
      }
    );*/


    this.carModels = this.service.getCarsModels(); 
    
   }

    changeImage(){
      this.selectedCarImage = this.imageURL+''+this.selectedModel+'/'+ this.selectedColor+'.jpg';
      console.log('NEW IMAGE:'+ this.selectedCarImage);
      //this.emitValue();
    }



  selectModel(selectedModel: string){
    if(selectedModel){
      console.log("MODEL SELECTED");
    }
    
  }

}
