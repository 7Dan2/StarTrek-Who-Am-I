import { Planet } from './../planet';
import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../services/planet.service';
import { PlanetInfo } from '../planet-info';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {


  
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
