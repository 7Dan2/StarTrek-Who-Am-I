import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { PlanetService } from '../services/planet.service';
import { PlanetInfo } from '../planet-info';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  animations: [    // Animation de la carte
    trigger('flipState', [ 
      state('active', style({    // Void,  Default( * ), Custom 
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class CardsComponent implements OnInit {

  public answer:boolean = false; // propriété qui permet de savoir quoi afficher lors ce que la carte se retourne.
  private service:PlanetService; // propriété  par laquel on utilisera notre service pour recuperer les informations sur les planetes.
  public list:PlanetInfo[]; // Propriété qui stoquera nos donnés recuperer par le service.
  public response:string[] = ["","","","","","","","","",""];
  
  // propriété qui contiendra chaque reponse de l'utilisateur via ngModel(par defaut vide pour ne rien afficher de base)
  
  constructor(public param_service:PlanetService){ //Injection de notre service
    
    this.service = param_service;  //on affecte notre parametre a notre propriété service
    this.list = []; //initialisation de notre propriété list
    

  }

  public ngOnInit():void {
     
    this.service.getPlanets() //souscription a notre service dans notre interface ngOninit
      .subscribe(resTravelData => this.list = resTravelData); // affectation des donnes retourner par le service a list
      
  }
  public onSubmit(planetName:any,userResponse:any,data:any){ // fonction qui est appeller lors ce qu'on valide une carte
    
   // planetName: le nom de la planete sur la carte valeur stoquer en dur
   // userResponse: La réponse saisie par l'utilisateur sur le formulaire
   // La carte en cours pour pouvoir la retourner avec notre animation
    
    if(userResponse.toLowerCase() == planetName.toLowerCase()){ 
      //si reponse utilisateur est la meme que la donéne en dur  le tout en lowercase
       
      this.toggleFlip(data) //Retourer la carte
      this.answer = true; // answer passe de false(par defaut) a true
      setTimeout(() => {

        this.toggleFlip(data);

       }, 4000);
      
       
    }else if(userResponse.toLowerCase() != ''){ 
      // Si l'utilisateur  ne saisie rien 
      this.answer = false; // answer deviens false
      this.toggleFlip(data) // retrouner la carte

      setTimeout(() => {

        this.toggleFlip(data);

       }, 4000);
      
    }
    
     
  }
  public flip: string = 'inactive'; // propriété qui contient l'etat de la carte (par defaut innactive)

  public toggleFlip(item:any) { //fonction qui change le flip de innactive a active et vice versa
    item.flip = (item.flip == 'inactive') ? 'active' : 'inactive'; // ternaire pour switcher d'un etat a un autre
  }


}
