import {Component} from '@angular/core';
import {AsyncPipe, CommonModule, JsonPipe, NgFor, NgIf} from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/appservice.component';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AsyncPipe, JsonPipe, RouterOutlet, HttpClientModule, NgFor, NgIf, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ApiService],
})
export class AppComponent {
  private subscription: Subscription;
  imageURL: string | null = null;
  selectedStep: number = 1;
  isCarConfigAvailable: boolean = true;
  isCarSummaryAvailable: boolean = true;
  selectedModel: string = 'default';
 

  constructor(private dataService: ApiService){
    this.subscription = this.dataService.value$.subscribe(value => {
      this.imageURL = value;
      this.isCarConfigAvailable = false;
      console.log('Value received in AppComponent:', value);
    });
  }

  ngOnDestroy() {
    // Unsubscribe from the subscription to avoid memory leaks
    this.subscription.unsubscribe();
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
