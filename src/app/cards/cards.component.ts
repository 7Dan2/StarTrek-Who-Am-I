import { Component, OnInit } from '@angular/core';
import { Planet } from '../planet';
import { PlanetService } from '../services/planet.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

 
  

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
