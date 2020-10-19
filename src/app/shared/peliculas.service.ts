import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  public API = 'https://swapi.dev/api/';
  public FILMS_API = this.API + 'films';
  public PLANETS_API = this.API + 'planets';
  public STARSHIPS_API = this.API + 'starships';
  public SPECIES_API = this.API + 'species';

  constructor(private http: HttpClient) {
    console.log('PELICULAS: servicio listo');
  }

  getAllFilms(): Observable<any> {
    return this.http.get(this.FILMS_API);
  }

  getFilm(id: string) {
    return this.http.get(this.FILMS_API + '/' + id + '/');
  }

  getPlanet(id: string) {
    return this.http.get(this.PLANETS_API + '/' + id + '/');
  }
  getStarship(id: string) {
    return this.http.get(this.STARSHIPS_API + '/' + id + '/');
  }
  getSpecies(id: string) {
    return this.http.get(this.SPECIES_API + '/' + id + '/');
  }
}
