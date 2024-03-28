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
  selectedRange: number = 0;
  selectedPrice: number = 0;
  selectedSpeed: number = 0;

  constructor(private readonly storageService: StorageService, private readonly service: CarOptionsService){}

  ngOnInit(): void {
    this.service.getCarOptions(this.storageService.getData('model')).subscribe(
      (carOptions: CarOptions) => {
          this.carOptions = carOptions.configs;
          this.showHitch =  carOptions.towHitch;
          this.showSteering = carOptions.yoke;
          if(this.storageService.getData('config')){ 
            console.log("I JOINED IN" );
            this.selectedCarConfig = +this.storageService.getData('config');
            console.log("Select:",this.selectedCarConfig );
            const currentCarConfig = this.carOptions.find(cfg => cfg.id === +this.selectedCarConfig);
            if(currentCarConfig){
              this.selectedRange = +this.storageService.getData('range');
              this.selectedPrice = +this.storageService.getData('configprice');
              this.selectedSpeed = +this.storageService.getData('speed');
            }       
          }
          else{
            this.selectedCarConfig = 0;
          } 
      }
    );
    
   }

   onCarConfigChange(config: number): void{
    const currentCarConfig = this.carOptions.find(cfg => cfg.id === +config);
    if(currentCarConfig){
      this.selectedRange = currentCarConfig.range;
      this.selectedPrice = currentCarConfig.price;
      this.selectedSpeed = currentCarConfig.speed;
      this.storageService.saveData('config',currentCarConfig.id);
      this.storageService.saveData('configdesc',currentCarConfig.description);
      this.storageService.saveData('configprice',currentCarConfig.price);
      this.storageService.saveData('range',currentCarConfig.range);
      this.storageService.saveData('speed',currentCarConfig.speed);
    }
  }

}
