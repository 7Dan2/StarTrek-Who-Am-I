
import { Planet } from './../../planet';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  appName:string = "SPACE";

  
  planet:Planet = {

     
  
    data: {
 
     name: ["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"],
     image: [
             "https://solarsystem.nasa.gov/system/feature_items/images/18_mercury_new.png",
             "https://solarsystem.nasa.gov/system/feature_items/images/27_venus_jg.png",
             "https://solarsystem.nasa.gov/system/feature_items/images/17_earth.png",
             "https://solarsystem.nasa.gov/system/feature_items/images/19_mars.png",
             "https://solarsystem.nasa.gov/system/feature_items/images/16_jupiter_new.png",
             "https://solarsystem.nasa.gov/system/feature_items/images/28_saturn.png",
             "https://solarsystem.nasa.gov/system/feature_items/images/29_uranus.png",
             "https://solarsystem.nasa.gov/system/feature_items/images/30_neptune.png"
     ],
     satellite : [0,0,1,2,79,61,27,14],
     enigme: {
 
             "Jupiter": [
               ["Je suis deux fois plus massive que toutes les planetes"],
               ["Je suis une géante gazeuse"],
               ["J'ai un gros point rouge à ma surface"]              
              ],
             "Mercury":  [
               ["Mon année dure 88 jours terrestre "],
               ["Je suis la plus petite planètre du système solaire"],
               ["Je suis la vedette des auteurs de science fiction"]              
              ],
             "Venus": [
               ["Je fais la même taille que la Terre"],
               ["Ma journée dure une année terrestre"],
               ["J'ai un gros point rouge à ma surface"]              
              ],
             "Saturn": [
               ["Je suis deux fois plus massive que toutes les planetes"],
               ["Je suis une géante gazeuse"],
               ["Je n'ai ni lune ni anneau"]              
              ],
             "Earth": [
               ["On m'appelle la planète bleue."],
               ["J'ai une atmosphère composée d'oxygène"],
               ["Je possède de l'eau sous forme liquide"]              
              ],
             "Mars": [
               ["Je possède deux lunes"],
               ["Je suis la 4ème planète du système solaire"],
               ["On m'appelle la planète rouge"]              
              ],
             "Uranus": [
               ["Je possède 27 lunes et 13 anneaux"],
               ["Je suis la seule planete a tourner sur mon coté"],
               ["Il n'est pas possible de vivre à ma surface"]              
              ],
             "Neptune": [
               ["Voyager 2 est le seul appareil à m'avoir vu de près"],
               ["J'ai une atmosphère composée de méthane, d'hydrogene et d'helium"],
               ["Je suis la plus éloignée des planètes"]              
              ],


             
     }
 
     },
 
   }
   
 
   planetName:string;
   planetImage:string;
   planetEnigme:string;
   planetSatellite:number;
   
     
   constructor() {
     this.planetName = this.planet.data.name;
     this.planetImage = this.planet.data.image;
     this.planetEnigme = this.planet.data.enigme;
     this.planetSatellite = this.planet.data.satellite;
 
     // console.log(this.planetName);
     // console.log(this.planetImage);
     // console.log(this.planetEnigme["Jupiter"]);
    }


  ngOnInit() {
  }

}
