import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  image = 'http://www.mnartists.org/sites/default/files/article/images/klingon.jpg';

  constructor() { }

  ngOnInit() {
  }

}
