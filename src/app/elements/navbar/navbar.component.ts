import { Planet } from './../../planet';
import { SatellitesComponent } from './../../../../../project/src/app/pages/satellites/satellites.component';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  appName:string = "SPACE";
  satellitesList:string[] = ['Adrastea','Aitne','Amalthea','Ananke','Aoede','Arche','Autonoe','Callirrhoe','Callisto','Carme','Carpo','Chaldene','Cyllene','Dia','Elara','Erinome','Eukelade','Euanthe','Euporie','Europa','Eurydome','Ganymede','Harpalyke','Hegemone','Helike','Hermippe','Herse','Himalia','Io','Iocaste','Isonoe','JupiterLI','JupiterLII','Kale','Kallichore','Kalyke','Kore','Leda','Lysithea','Megaclite','Metis','Mneme','Orthosie','Pasiphae','Pasithee','Praxidike','Sinope','Sponde','Thebe','Themisto','Taygete','Thelxinoe','Thyone'];
  
  planet:Planet = {
     
    info:
     { 
      "Mercury":"https://solarsystem.nasa.gov/system/feature_items/images/18_mercury_new.png" ,
      "Venus":"https://solarsystem.nasa.gov/system/feature_items/images/27_venus_jg.png",
      "Earth":"https://solarsystem.nasa.gov/system/feature_items/images/17_earth.png",
      "Mars":"https://solarsystem.nasa.gov/system/feature_items/images/16_jupiter_new.png",
      "Jupiter":"https://solarsystem.nasa.gov/system/feature_items/images/16_jupiter_new.png",
      "Saturn":"https://solarsystem.nasa.gov/system/feature_items/images/28_saturn.png",
      "Uranus":"https://solarsystem.nasa.gov/system/feature_items/images/29_uranus.png",
      "Neptune":"https://solarsystem.nasa.gov/system/feature_items/images/30_neptune.png"
     }
}
  constructor() { 
    console.log(this.planet.info);
  }

  ngOnInit() {
  }

}
