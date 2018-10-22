import { ApodData } from './../../apod-data';
import { Component, OnInit } from '@angular/core';
import { ApodService } from 'src/app/services/apod.service';
import { ApodData } from 'src/app/apod-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public name:string ="../../../assets/apod.jpg";
   

  public apiUrls = [ 
    "https://api.nasa.gov/planetary/apod?api_key=YtMgO7UcllSeI94v0IXpgwjBKhVHQem0dnu2xd2w&hd=True&date=2018-08-10",
    "https://api.nasa.gov/planetary/apod?api_key=YtMgO7UcllSeI94v0IXpgwjBKhVHQem0dnu2xd2w&hd=True&date=2018-08-11",
    "https://api.nasa.gov/planetary/apod?api_key=YtMgO7UcllSeI94v0IXpgwjBKhVHQem0dnu2xd2w&hd=True&date=2018-08-12",
    "https://api.nasa.gov/planetary/apod?api_key=YtMgO7UcllSeI94v0IXpgwjBKhVHQem0dnu2xd2w&hd=True&date=2018-08-13",
    "https://api.nasa.gov/planetary/apod?api_key=YtMgO7UcllSeI94v0IXpgwjBKhVHQem0dnu2xd2w&hd=True&date=2018-08-14",
    "https://api.nasa.gov/planetary/apod?api_key=YtMgO7UcllSeI94v0IXpgwjBKhVHQem0dnu2xd2w&hd=True&date=2018-08-15",
    "https://api.nasa.gov/planetary/apod?api_key=YtMgO7UcllSeI94v0IXpgwjBKhVHQem0dnu2xd2w&hd=True&date=2018-08-16",
    "https://api.nasa.gov/planetary/apod?api_key=YtMgO7UcllSeI94v0IXpgwjBKhVHQem0dnu2xd2w&hd=True&date=2018-08-17",
    "https://api.nasa.gov/planetary/apod?api_key=YtMgO7UcllSeI94v0IXpgwjBKhVHQem0dnu2xd2w&hd=True&date=2018-08-18",
    "https://api.nasa.gov/planetary/apod?api_key=YtMgO7UcllSeI94v0IXpgwjBKhVHQem0dnu2xd2w&hd=True&date=2018-08-19"
  ];
  private service:ApodService;
  public apod:ApodData[];
 

 
  constructor(param_service:ApodService) {
    this.service = param_service;  
   
   }
  
   
  
  ngOnInit() {
   
     
    this.service.getAll()
    .subscribe(
      (apodDatas:ApodData[]) =>  {
        this.apod = apodDatas;
      }
    );
   
    
}

 
}
