import {Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
//import { ApiService } from '../../services/appservice.component';

@Component({
  selector: 'app-car-model',
  templateUrl: './car-model.component.html',
  styleUrls: ['./car-model.component.scss'],
})
export class CarModelComponent implements OnInit{
  models: any[] = [1,2,3,4];
  colors: any[] = [];
  imageURL: string = 'https://interstate21.com/tesla-app/images/';
  selectedModel: string = 'C';
  selectedColor: string = 'black';
  selectedCarImage: string = '';


  private valueSubject = new Subject<string>();
  value$ = this.valueSubject.asObservable();

  constructor(private http: HttpClient/*, private dataService: ApiService*/){}

  ngOnInit(): void {
    
    this.retrieveModels();
    
   }

/*   emitValue() {
    this.dataService.emitValue(this.selectedCarImage);
    }
*/
    changeImage(){
      this.selectedCarImage = this.imageURL+''+this.selectedModel+'/'+ this.selectedColor+'.jpg';
      console.log('NEW IMAGE:'+ this.selectedCarImage);
      //this.emitValue();
    }

  retrieveModels(): void{
    this.http.get<any[]>('/models').subscribe(
      modelsResponse => {
        this.models = modelsResponse.map(model => ({
          code: model.code,
          description: model.description
        }));
        this.colors = modelsResponse.flatMap(model => model.colors);
        console.log('MODELOS:'+ this.models);
        console.log('CORES:'+ this.colors);
      },
      error => {
        console.error('Error obtaining colors', error);
      }
    )
  }

  selectModel(selectedModel: string){
    if(selectedModel){
      console.log("MODEL SELECTED");
    }
    
  }

}
