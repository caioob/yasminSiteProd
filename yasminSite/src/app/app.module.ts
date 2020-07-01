import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FotosComponent } from './fotos/fotos.component';
import { FotosComCaixaComponent } from './fotos-com-caixa/fotos-com-caixa.component';
import { DesignComponent } from './design/design.component';
import { HomeComponent } from './home/home.component';
import { FotografiaComponent } from './fotografia/fotografia.component';
import { TituloComponent } from './titulo/titulo.component';
import { Fotos2Component } from './fotos2/fotos2.component';
import { FotoComponent } from './foto/foto.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FloresComponent } from './flores/flores.component';

@NgModule({
  declarations: [
    AppComponent,
    FotosComponent,
    FotosComCaixaComponent,
    DesignComponent,
    HomeComponent,
    FotografiaComponent,
    TituloComponent,
    Fotos2Component,
    FotoComponent,
    NavbarComponent,
    FloresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
