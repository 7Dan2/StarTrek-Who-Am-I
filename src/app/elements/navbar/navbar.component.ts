
import { Planet } from './../../planet';
import { Component, OnInit } from '@angular/core';
import { PlanetService } from 'src/app/services/planet.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  appName:string = "SPACE";

  
  
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
