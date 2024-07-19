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
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProjectesComponentComponent } from './projectes-component/projectes-component.component';
import { QuiSocComponentComponent } from './qui-soc-component/qui-soc-component.component';
import { ContacteComponentComponent } from './contacte-component/contacte-component.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualitzaComponentComponent } from './actualitza-component/actualitza-component.component';
import { ErrorPersonalitzatComponent } from './error-personalitzat/error-personalitzat.component';
import { LoginComponent } from './login/login.component';

const appRoutes:Routes=[
  { path:'', component:HomeComponentComponent},
  { path:'projectes', component:ProjectesComponentComponent},
  { path:'quisoc', component:QuiSocComponentComponent},
  { path:'contacte', component:ContacteComponentComponent},
  //{ path:'actualitzar', component:ActualitzaComponentComponent},
  { path: 'updatar/:id/:nom/:cognom/:carrec/:sou', component: ActualitzaComponentComponent },
  { path: 'login', component:LoginComponent },
  { path:'**',component:ErrorPersonalitzatComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TreballadorFillComponent,
    AtributsExtraTreballadorComponent,
    HomeComponentComponent,
    ProjectesComponentComponent,
    QuiSocComponentComponent,
    ContacteComponentComponent,
    ActualitzaComponentComponent,
    ErrorPersonalitzatComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ServeiTreballadorsService,
    DadesTreballadors
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
