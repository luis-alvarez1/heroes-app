import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  public API = 'https://swapi.dev/api/';
  public FILMS_API = this.API + 'films/';

  constructor(private http: HttpClient) {
    console.log('PELICULAS: servicio listo');
  }

  getAllFilms(): Observable<any> {
    return this.http.get(this.FILMS_API);
  }

  getFilm(id: string) {
    return this.http.get(this.FILMS_API + id + '/');
  }
}
