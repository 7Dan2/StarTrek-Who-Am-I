import { JumbotronComponent } from './elements/jumbotron/jumbotron.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './../../../project/src/app/pages/home/home.component';
import { NavbarComponent } from './elements/navbar/navbar.component';
import { ModalComponent } from './modal/modal.component';
import { CardsComponent } from './cards/cards.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    JumbotronComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }