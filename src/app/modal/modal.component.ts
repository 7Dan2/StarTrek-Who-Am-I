import { Planet } from './../planet';
import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../services/planet.service';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {


  planetName:string;
  planetImage:string;
  planetEnigme:string;
  planetSatellite:number;
  
  planetData = {}
  constructor(private planetService: PlanetService) {
    


    // console.log(this.planetName);
    // console.log(this.planetImage);
    // console.log(this.planetEnigme["Jupiter"]);
   }


  ngOnInit() {
    this.planetData = this.planetService.getPlanetData();
    

    this.planetName = this.planetData.name;
    this.planetImage = this.planetData.image;
    this.planetEnigme = this.planetData.enigme;
    this.planetSatellite = this.planetData.satellite;

  }

}
