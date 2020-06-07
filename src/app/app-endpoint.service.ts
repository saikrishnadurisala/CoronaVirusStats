import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { from } from 'rxjs';

@Injectable({providedIn: 'root'})
export class StatasticsService{
constructor(private httpClient:HttpClient){}

getStats() : Observable<Object>{
    return this.httpClient.get('https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats')
}
}