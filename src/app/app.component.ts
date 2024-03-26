import {Component} from '@angular/core';
import {AsyncPipe, JsonPipe, NgFor, NgIf} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, RouterOutlet, HttpClientModule, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  selectedStep: number = 1;
  isCarConfigAvailable: boolean = true;
  isCarSummaryAvailable: boolean = true;
  selectedModel: string = 'default';

  constructor(){}

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
