import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private valueSubject = new Subject<string>();
    value$ = this.valueSubject.asObservable();
  
    emitValue(value: string) {
      this.valueSubject.next(value);
    }
}