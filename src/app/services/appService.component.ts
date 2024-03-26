import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ApiService {
    private apiUrl = 'https://interstate21.com/tesla-app/images/';

    constructor(private client: HttpClient){}

    getModels(): Observable<any> {
        return this.client.get<any>(this.apiUrl + 'models');
    }

    getColors(): Observable<any> {
        return this.client.get<any>(this.apiUrl + 'colors');
    }
}