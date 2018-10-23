
import { Planet } from './../../planet';
import { Component, OnInit } from '@angular/core';
import { PlanetService } from 'src/app/services/planet.service';
import { PlanetInfo } from 'src/app/planet-info';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  appName:string = "SPACE";

  
  
 
  
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
