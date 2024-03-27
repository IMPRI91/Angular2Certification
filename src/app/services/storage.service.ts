import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class StorageService {
    constructor(){}

    private dataSubject = new Subject<string>();
    data$ = this.dataSubject.asObservable();

    public updateData(newData: string) {
        this.dataSubject.next(newData);
    }
/*
    public saveData(key: string, data: string){
        localStorage.setItem(this.key, JSON.stringify(data));
    }

    public getData(key: string): string {
        let model = localStorage.getItem(this.key);
        return model ? JSON.parse(model) : null;
    }

    public remove(){
        localStorage.removeItem(this.key);
    }
*/
    public clear(){
        localStorage.clear();
    }
}