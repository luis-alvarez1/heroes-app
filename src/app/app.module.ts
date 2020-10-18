import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { PersonajesTarjetaComponent } from './components/personajes-tarjeta/personajes-tarjeta.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PeliculasTarjetaComponent } from './components/peliculas-tarjeta/peliculas-tarjeta.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonajesTarjetaComponent,
    PersonajesComponent,
    PersonajeComponent,
    PeliculasComponent,
    PeliculasTarjetaComponent,
    PeliculaComponent,
    ScrollToTopComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
