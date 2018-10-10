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

    name: ['Mercury','Venus','Earth','Mars','Jupiter','Saturn','Uranus','Neptune'],
    img: ['']
    
  }
  constructor() { }

  ngOnInit() {
  }

}
