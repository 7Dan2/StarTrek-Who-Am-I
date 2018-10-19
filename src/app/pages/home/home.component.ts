import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public name:string ="../../../assets/apod.jpg";
  setMyStyles() {
    let styles = {
      'background': 'url(' + this.name + ') no-repeat center center fixed',
      'background-size': 'cover',
      'height': '100%',
      'overflow': 'hidden',
      'font-family': 'Kodchasan , sans-serif', 
    };
    return styles;
  }
  constructor() { }

  ngOnInit() {
   

    
    
   
   
    setTimeout(() => {
      this.name="https://apod.nasa.gov/apod/image/1809/NGC6727-drudis.jpg"; //
      this.setMyStyles();
    }, 10000);

    setTimeout(() => {
      this.name="https://apod.nasa.gov/apod/image/1808/OrionTrapezium_HubbleGendler_4000.jpg"; //
      this.setMyStyles();
    }, 20000);

    setTimeout(() => {
      this.name="https://apod.nasa.gov/apod/image/1808/heic1404b1920.jpg"; //
      this.setMyStyles();
    }, 30000);



    setTimeout(() => {
      this.name="https://apod.nasa.gov/apod/image/1810/M16_Klinger_3595.jpg"; 
      this.setMyStyles();
    }, 40000);
     
    setTimeout(() => {
      this.name="https://apod.nasa.gov/apod/image/1810/NGC1672_Hubble_3600.jpg"; 
      this.setMyStyles();
    }, 50000);
    

    setTimeout(() => {
      this.name="../../../assets/apod3.jpg";
      this.setMyStyles();
    }, 60000 );

   
  }

}
