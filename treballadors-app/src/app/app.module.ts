import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TreballadorFillComponent } from './treballador-fill/treballador-fill.component';
import { AtributsExtraTreballadorComponent } from './atributs-extra-treballador/atributs-extra-treballador.component';
import { ServeiTreballadorsService } from './serveis/servei-treballadors.service';
import { DadesTreballadors } from './serveis/dades.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TreballadorFillComponent,
    AtributsExtraTreballadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ServeiTreballadorsService,
    DadesTreballadors
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
