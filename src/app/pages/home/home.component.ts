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
    return styles; // retourne nos style
  }

 
  private service:ApodService; // propriété  par laquel on utilisera notre service pour recuperernos APODS
  public apod:ApodData[]; // Propriété qui stoquera nos donnés recuperer par le service.
  constructor(param_service:ApodService) { //Injection de notre service
    this.service = param_service;  //on affecte notre parametre a notre propriété service

   }
  
   
  
  ngOnInit() {
   
     

    this.service.getAll() //souscription a notre service dans notre interface ngOninit
    .subscribe( 
      (apodDatas:ApodData[]) =>  {   
        this.apod = apodDatas;// affectation des donnes retourner par le service a notre propriété apod
      }
    );
            //Utilisation de setTimeout pour creer notre Diaporama
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

   
   
}

 
}
