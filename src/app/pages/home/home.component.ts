import { ApodData } from './../../apod-data';
import { Component, OnInit } from '@angular/core';
import { ApodService } from 'src/app/services/apod.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public name:string ="../../../assets/apod.jpg"; // propriété qui contient  l'url d'une image

  setMyStyles() { //methode qui applique un style
    let styles = { //propriété qui contient une liste de propriété css
      'background': 'url(' + this.name + ') no-repeat center center fixed',
      'background-size': 'cover',
      'height': '100%',
      'overflow': 'hidden',
      'font-family': 'Kodchasan , sans-serif', 
    };
    return styles; // retourne nos styles
  }

 
  private service:ApodService; // propriété  par laquel on utilisera notre service pour recuperernos APODS
  public apod:ApodData[]; // Propriété qui stoquera nos données recupérées par le service.
  constructor(param_service:ApodService) { //Injection de notre service
    this.service = param_service;  //on affecte notre parametre à la propriété service
}
  
ngOnInit() {
   
  this.service.getAll() //souscription à notre service dans notre interface ngOninit
    .subscribe( 
      (apodDatas:ApodData[]) =>  {   
        this.apod = apodDatas;// affectation des données retournées par le service dans notre propriété apod
      }
    );
            //Utilisation de setTimeout pour créer notre diaporama
setTimeout(() => {
  this.name = this.apod[0].hdurl;  
  this.setMyStyles();
}, 10000);

setTimeout(() => {
  this.name = this.apod[1].hdurl;  
  this.setMyStyles();
}, 20000);

setTimeout(() => {
  this.name = this.apod[2].hdurl;        // Une image sera afficher  tout les 10 secondes 
  this.setMyStyles();
}, 30000);

setTimeout(() => {
  this.name = this.apod[3].hdurl;  
  this.setMyStyles();
}, 40000);

setTimeout(() => {
  this.name = "../../../assets/apod3.jpg";
  this.setMyStyles();
}, 50000);

}}
