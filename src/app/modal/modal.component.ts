
import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../services/planet.service';
import { PlanetInfo } from '../planet-info';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {


   
  private service:PlanetService;// propriété  par laquel on utilisera notre service pour recuperer les informations sur les planetes.
  public list:PlanetInfo[]; // Propriété qui stoquera nos donnés recuperer par le service.
  
  constructor(param_service:PlanetService){ //Injection de notre service
    this.service = param_service; //on affecte notre parametre a notre propriété service
    this.list = []; //initialisation de notre propriété list

  }

  public ngOnInit():void {
    this.service.getPlanets() //souscription a notre service dans notre interface ngOninit
      .subscribe(resTravelData => this.list = resTravelData); // affectation des donnes retourner par le service a list
  }

}
