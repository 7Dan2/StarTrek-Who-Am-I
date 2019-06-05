import { JumbotronComponent } from './elements/jumbotron/jumbotron.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './elements/navbar/navbar.component';
import { ModalComponent } from './modal/modal.component';
import { CardsComponent } from './cards/cards.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PlanetService } from './services/planet.service';
import { HttpModule } from '@angular/http';

const appRoutes: Routes = [
  { path: '',component: HomeComponent },
  { path: 'game',component: CardsComponent },

];




@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    HomeComponent,
    NavbarComponent,
    JumbotronComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes
    ),
  ],
  providers: [PlanetService],
  bootstrap: [AppComponent]
})
export class AppModule { }