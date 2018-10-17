import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Planet } from '../planet';
import { PlanetService } from '../services/planet.service';
import { PlanetInfo } from '../planet-info';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  animations: [
    trigger('flipState', [
      state('active', style({
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

 
  


  // imageState:boolean = false;
  // turnImage(){
  //   this.imageState = !this.imageState;
  // }
  private service:PlanetService;
  public list:PlanetInfo[];
  
  public tabResponse:string[] = ["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"];
  public tabInput:string[] = ["","","","","","","","","",""];
  public planetReponse:string;
  constructor(param_service:PlanetService){
    this.service = param_service;
    this.list = [];

  }

  public ngOnInit():void {
    //this.list = this.service.getTravels();
    this.service.getPlanets()
      .subscribe(resTravelData => this.list = resTravelData);
      console.log(this.list);
  }
  onSubmit(planetName:any,userResponse:any,data:any){ //Data = propriété de List
    
    
    console.log(planetName);// Vrai non en DUR
    if(userResponse == planetName){ // compare Reponse utilisateur
      this.toggleFlip(data)
      console.log("YESS");
      console.log(data.flip + " Prop envoyer en arg");
    }else{
      console.log("NOOO");
    }

    
     
  }
  flip: string = 'inactive';

  toggleFlip(item:any) {
    item.flip = (item.flip == 'inactive') ? 'active' : 'inactive';
  }


}
