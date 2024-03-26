import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private apiUrl = 'https://interstate21.com/tesla-app/images/';

    constructor(private readonly client: HttpClient){}
    //constructor(){}
    getModels(){
        console.log("Joined the service");
        return this.client.get<any>(this.apiUrl);
        //return this.client.get<any>(this.apiUrl + 'models');
    }

    // getColors(): Observable<any> {
    //     return this.client.get<any>(this.apiUrl + 'colors');
    // }
}