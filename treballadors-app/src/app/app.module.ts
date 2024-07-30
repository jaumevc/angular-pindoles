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
import { AddWorkerComponent } from './addworker-component/addworker.component';
import { QuiSocComponentComponent } from './qui-soc-component/qui-soc-component.component';
import { ContacteComponentComponent } from './contacte-component/contacte-component.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualitzaComponentComponent } from './actualitza-component/actualitza-component.component';
import { ErrorPersonalitzatComponent } from './error-personalitzat/error-personalitzat.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './serveis/login.service';
import { AuthGuard } from './serveis/auth.guard';
import { RegistrarComponent } from './registrar/registrar.component';

const appRoutes:Routes=[
  { path: 'login', component:LoginComponent },
  { path:'', component:HomeComponentComponent, canActivate: [AuthGuard]},
  { path:'addwoker', component:AddWorkerComponent, canActivate: [AuthGuard]},
  { path:'quisoc', component:QuiSocComponentComponent},
  { path:'contacte', component:ContacteComponentComponent},
  //{ path:'actualitzar', component:ActualitzaComponentComponent},
  { path: 'updatar/:id/:nom/:cognom/:carrec/:sou', component: ActualitzaComponentComponent, canActivate: [AuthGuard] },
  // { path: 'login', component:LoginComponent },
  { path:'registrar', component:RegistrarComponent },
  { path:'**', component:ErrorPersonalitzatComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TreballadorFillComponent,
    AtributsExtraTreballadorComponent,
    HomeComponentComponent,
    AddWorkerComponent,
    QuiSocComponentComponent,
    ContacteComponentComponent,
    ActualitzaComponentComponent,
    ErrorPersonalitzatComponent,
    LoginComponent,
    RegistrarComponent
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
    DadesTreballadors,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
