import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public name:string ="apod.jpg";
  setMyStyles() {
    let styles = {
      'background': 'url( ../../../assets/' + this.name + ') no-repeat center center fixed',
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
      this.name="apod2.jpg";
    }, 10000);
    setTimeout(() => {
      this.name="apod3.jpg";
    }, 20000);
    setTimeout(() => {
      this.name="apod3.jpg";
    }, 30000);
    
  }

}
