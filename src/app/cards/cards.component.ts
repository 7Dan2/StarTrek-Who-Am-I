import { Component, OnInit } from '@angular/core';
import { Planet } from '../planet';
import { PlanetService } from '../services/planet.service';
import { PlanetInfo } from '../planet-info';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

 
  


  imageState:boolean = false;
  turnImage(){
    this.imageState = !this.imageState;
  }
  private service:PlanetService;
  public list:PlanetInfo[];
  
  constructor(param_service:PlanetService){
    this.service = param_service;
    this.list = [];

  }

  public ngOnInit():void {
    //this.list = this.service.getTravels();
    this.service.getPlanets()
      .subscribe(resTravelData => this.list = resTravelData);
      console.log(this.list);
  }

}
