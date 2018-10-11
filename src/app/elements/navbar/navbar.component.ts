import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  appName:string = "SPACE";
  planetList:string[] = ['Mercure','Vénus','Terre','Mars','Jupiter','Saturne','Uranus','Neptune'];
  satellitesList:string[] = ['Adrastea','Aitne','Amalthea','Ananke','Aoede','Arche','Autonoe','Callirrhoe','Callisto','Carme','Carpo','Chaldene','Cyllene','Dia','Elara','Erinome','Eukelade','Euanthe','Euporie','Europa','Eurydome','Ganymede','Harpalyke','Hegemone','Helike','Hermippe','Herse','Himalia','Io','Iocaste','Isonoe','JupiterLI','JupiterLII','Kale','Kallichore','Kalyke','Kore','Leda','Lysithea','Megaclite','Metis','Mneme','Orthosie','Pasiphae','Pasithee','Praxidike','Sinope','Sponde','Thebe','Themisto','Taygete','Thelxinoe','Thyone'];
  constructor() { }

  ngOnInit() {
  }

}
