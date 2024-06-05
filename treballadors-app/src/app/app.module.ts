import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TreballadorFillComponent } from './treballador-fill/treballador-fill.component';
import { AtributsExtraTreballadorComponent } from './atributs-extra-treballador/atributs-extra-treballador.component';
import { ServeiTreballadorsService } from './servei-treballadors.service';

@NgModule({
  declarations: [
    AppComponent,
    TreballadorFillComponent,
    AtributsExtraTreballadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ServeiTreballadorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
