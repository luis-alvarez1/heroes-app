import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'personajes',
    component: PersonajesComponent,
  },
  {
    path: 'personaje/:id',
    component: PersonajeComponent,
  },
  {
    path: 'pelicula/:id',
    component: PeliculaComponent,
  },
  {
    path: 'peliculas',
    component: PeliculasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
