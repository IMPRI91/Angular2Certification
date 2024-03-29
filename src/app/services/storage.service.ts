/**********************************************************************
Name: storage.service.ts
Copyright © 2024 

Purpose:
This service will be used as a storage where we save all the information
and retrieve depending what we need. We use it like a map where we give a
key and a value for it.

History
VERSION     AUTHOR    		  DATE 		      DETAIL					
1.0    	Ricardo Imperial 29/03/2024      Service Class.		
***********************************************************************/
import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class StorageService {
  private keyUpdatesSubject = new BehaviorSubject<string | null>(null);

  constructor() {}

  private dataSubject = new Subject<Map<string, string>>();
  carInformation = this.dataSubject.asObservable();

  public saveData(key: string, data: string | number) {
    localStorage.setItem(key, JSON.stringify(data));
    this.triggerStorageEvent(key);
  }

  public updateData(key: string) {
    this.triggerStorageEvent(key);
  }

  public getData(key: string): string {
    let carInformation = localStorage.getItem(key);
    return carInformation ? JSON.parse(carInformation) : null;
  }

  public remove(key: string) {
    localStorage.removeItem(key);
    this.triggerStorageEvent(key);
  }

  public clear() {
    localStorage.clear();
  }

  subscribeToKeyUpdates(): BehaviorSubject<string | null> {
    return this.keyUpdatesSubject;
  }

  private triggerStorageEvent(key: string): void {
    const storageEvent = new StorageEvent("storage", {
      key: key,
      newValue: localStorage.getItem(key),
      storageArea: localStorage,
      url: window.location.href,
    });
    this.keyUpdatesSubject.next(key);
  }
}
