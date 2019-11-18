import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InscricoesComponent } from './inscricoes/inscricoes.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { FaleconoscoComponent } from './faleconosco/faleconosco.component';
import { BannersComponent } from './banners/banners.component';

import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InscricoesComponent,
    CalendarioComponent,
    FaleconoscoComponent,
    BannersComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
