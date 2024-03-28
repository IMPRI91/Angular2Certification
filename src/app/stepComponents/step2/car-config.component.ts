import {Component} from '@angular/core';
import { CarOptionsService } from '../../services/caroptions.service';
import { StorageService } from '../../services/storage.service';
import { CarOptions, Options } from '../../models/caroptions';

@Component({
  selector: 'car-config',
  templateUrl: './car-config.component.html',
  styleUrls: ['./car-config.component.scss'],
})
export class CarConfigComponent {

  selectedCarConfig: number = 0;
  carOptions: Options[] = [];
  showHitch: boolean = false;
  showSteering: boolean = false;

  constructor(private readonly storageService: StorageService, private readonly service: CarOptionsService){}

  ngOnInit(): void {
    this.service.getCarOptions(this.storageService.getData('model')).subscribe(
      (carOptions: CarOptions) => {
        console.log("OPTIONS: ", carOptions);
          this.carOptions = carOptions.options;
          this.showHitch =  carOptions.towHitch;
          this.showSteering = carOptions.yoke;
      }
    );
    
   }

   onCarConfigChange(option: number): void{
    console.log('Selected car:', option);
    const currentCarColors = this.carOptions.find(cfg => cfg.id === option);
   // if(currentCarColors){
   // this.storageService.saveData('config',''+option);
  }

}
