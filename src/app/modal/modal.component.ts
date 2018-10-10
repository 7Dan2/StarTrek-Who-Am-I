import { Planet } from './../planet';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  planet:Planet = {

    name: ['Mercury','Venus','Earth','Mars','Jupiter','Saturn','Uranus','Neptune']
  }
  constructor() { }

  ngOnInit() {
  }

}
