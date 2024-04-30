import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleatsComponent } from './empleats/empleats.component';
import { EmpleatComponent } from './empleat/empleat.component';
import { CurrantComponent } from './currant/currant.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleatsComponent,
    EmpleatComponent,
    CurrantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
