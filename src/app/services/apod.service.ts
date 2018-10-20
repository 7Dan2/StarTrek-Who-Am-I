import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { ApodData } from './../apod-data';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class ApodService {
  private httpService:Http;
  constructor(param_service:Http) {
    this.httpService = param_service;
   }
   public getApodData(url:string):Observable<ApodData>{
     return this.httpService.get(url).pipe(
       map((my_reponse:Response) => {
         return my_reponse.json() as ApodData;
       })
     )
   }
}
