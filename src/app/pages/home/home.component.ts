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
      'font-family': 'Arial, Helvetica, sans-serif',
    };
    return styles;
  }
  constructor() { }

  ngOnInit() {
   

    setTimeout(() => {
      this.name="https://apod.nasa.gov/apod/image/1801/Arp243_Hubble_3978.jpg";
      this.setMyStyles();
    }, 10000);
    setTimeout(() => {
      this.name="https://apod.nasa.gov/apod/image/1810/PIA22549_fig1.jpg";
      this.setMyStyles();
    }, 20000);
    

    setTimeout(() => {
      this.name="../../../assets/apod3.jpg";
      this.setMyStyles();
    }, 30000);

   
  }

}
