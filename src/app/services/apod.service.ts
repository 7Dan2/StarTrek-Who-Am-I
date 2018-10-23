import { Observable, forkJoin } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ApodData } from './../apod-data';
import { map, combineAll, combineLatest } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class ApodService {
  private httpService: Http;


  public apiUrls = [
    "https://api.nasa.gov/planetary/apod?api_key=YtMgO7UcllSeI94v0IXpgwjBKhVHQem0dnu2xd2w&hd=True&date=2018-09-20",
    "https://api.nasa.gov/planetary/apod?api_key=YtMgO7UcllSeI94v0IXpgwjBKhVHQem0dnu2xd2w&hd=True&date=2018-08-05",
    "https://api.nasa.gov/planetary/apod?api_key=YtMgO7UcllSeI94v0IXpgwjBKhVHQem0dnu2xd2w&hd=True&date=2018-08-25",
    "https://api.nasa.gov/planetary/apod?api_key=YtMgO7UcllSeI94v0IXpgwjBKhVHQem0dnu2xd2w&hd=True&date=2018-10-15",
    "https://api.nasa.gov/planetary/apod?api_key=YtMgO7UcllSeI94v0IXpgwjBKhVHQem0dnu2xd2w&hd=True&date=2018-10-09"
    
  ];

  constructor(param_service: Http) {
    this.httpService = param_service;
  }
  public getApodData(url: string): Observable<ApodData> {
    return this.httpService.get(url).pipe(
      map((my_reponse: Response) => {
        return my_reponse.json() as ApodData;
      })
    )
  }

  public getAll(): Observable<ApodData[]> {

    const tabObs: Observable<Response>[] = [];
    let i: number = 0;

    for (i = 0; i < this.apiUrls.length; i++) {
      tabObs.push(this.httpService.get(this.apiUrls[i]));
    }

    const obs: Observable<Response[]> = forkJoin(tabObs);

    return obs.pipe(
      map(
        (data: Response[]) => {


          let results: ApodData[] = [];
          let i: number = 0;
          for (i = 0; i < data.length; i++) {
            results.push(data[i].json() as ApodData);
          }

          return results;
        }
      )
    );

  }

}
