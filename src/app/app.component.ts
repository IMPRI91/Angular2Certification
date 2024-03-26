import {Component} from '@angular/core';
import {AsyncPipe, JsonPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './app.component.html',
})
export class AppComponent {
  selectedStep: number = 0;
  isCarConfigAvailable: boolean = false;
  isCarSummaryAvailable: boolean = false;

  onCarConfigChanged(isCarConfigAvailable: boolean){
    this.isCarConfigAvailable = isCarConfigAvailable;
  }

  onCarSummaryChanged(isCarSummaryAvailable: boolean){
    this.isCarSummaryAvailable = isCarSummaryAvailable;
  }
}
