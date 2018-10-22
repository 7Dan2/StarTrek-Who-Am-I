import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../services/planet.service';
import { PlanetInfo } from '../planet-info';
import { Planet } from './../planet';

@Component({
  selector: 'app-modalsnd',
  templateUrl: './modalsnd.component.html',
  styleUrls: ['./modalsnd.component.css']
})
export class ModalsndComponent implements OnInit {

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
  }
}
