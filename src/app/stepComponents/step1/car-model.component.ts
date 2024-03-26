import {Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-car-model',
  templateUrl: './car-model.component.html',
  styleUrls: ['./car-model.component.scss'],
})
export class CarModelComponent implements OnInit{
  models: any[] = [1,2,3,4];
  colors: any[] = [];

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.retrieveModels();
   }


  retrieveModels(): void{
    this.http.get<any[]>('/models').subscribe(
      Response => {
        this.models = Response.map(model => ({
          code: model.code,
          description: model.description
        }));
        this.colors = Response.flatMap(model => model.colors);
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
