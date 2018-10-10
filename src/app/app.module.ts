import { JumbotronComponent } from './elements/jumbotron/jumbotron.component';
import { AboutComponent } from './pages/about/about.component';
import { NavbarComponent } from './elements/navbar/navbar.component';
import { ModalComponent } from './modal/modal.component';
import { CardsComponent } from './cards/cards.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: 'about',component: AboutComponent },
  { path: 'game',component: CardsComponent },

];




@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    AboutComponent,
    NavbarComponent,
    JumbotronComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }