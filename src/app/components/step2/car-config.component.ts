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
  selectedTow: boolean = false;
  selectedYoke: boolean = false;
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
          if(this.storageService.getData('hitch')){
            this.selectedTow = JSON.parse(this.storageService.getData('hitch'));
          }
          if(this.storageService.getData('steering')){
            this.selectedYoke = JSON.parse(this.storageService.getData('steering'));
          }
          if(this.storageService.getData('config')){ 
            this.selectedCarConfig = JSON.parse(this.storageService.getData('config'));
            console.log("Select:",this.selectedCarConfig );
            const currentCarConfig = this.carOptions.find(cfg => cfg.id === +this.selectedCarConfig);
            if(currentCarConfig){
              this.selectedRange = JSON.parse(this.storageService.getData('range'));
              this.selectedPrice = JSON.parse(this.storageService.getData('configprice'));
              this.selectedSpeed = JSON.parse(this.storageService.getData('speed'));
            }    
          }
          else{
            this.selectedCarConfig = 0;
          } 
      }
    );
    
   }

   onCarConfigChange(config: number): void{
    if(config != 0){
      const currentCarConfig = this.carOptions.find(cfg => cfg.id === +config);
      if(currentCarConfig){
        this.selectedRange = currentCarConfig.range;
        this.selectedPrice = currentCarConfig.price;
        this.selectedSpeed = currentCarConfig.speed;
        this.storageService.saveData('configdesc',currentCarConfig.description);
        this.storageService.saveData('configprice',currentCarConfig.price);
        this.storageService.saveData('range',currentCarConfig.range);
        this.storageService.saveData('speed',currentCarConfig.speed);
      }
    }
    else{
      this.selectedCarConfig = 0;
      this.storageService.remove('configdesc');
      this.storageService.remove('configprice');
      this.storageService.remove('range');
      this.storageService.remove('speed');
    }
    this.storageService.saveData('config',config);
  }

  onCarIncludeTowChange(includeTow: boolean): void{
      this.storageService.saveData('hitch',''+includeTow);
  }

  onCarIncludeYokeChange(includeYoke: boolean): void{
      this.storageService.saveData('steering',''+includeYoke);
  }

}
