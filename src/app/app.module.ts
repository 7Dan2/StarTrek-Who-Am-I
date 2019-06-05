import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

//######### Components #########

import { JumbotronComponent } from './elements/jumbotron/jumbotron.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './elements/navbar/navbar.component';
import { ModalComponent } from './modal/modal.component';
import { CardsComponent } from './cards/cards.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//######### Services #########

import { PlanetService } from './services/planet.service';

const appRoutes: Routes = [
  { path: '', redirectTo: 'homePage', pathMatch: 'full'},
  { path: 'homePage', component: HomeComponent},
  { path: 'game', component: CardsComponent },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    HomeComponent,
    NavbarComponent,
    JumbotronComponent,
    ModalComponent,
    PageNotFoundComponent
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