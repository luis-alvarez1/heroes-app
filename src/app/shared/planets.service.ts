import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlanetasService {
  public API = 'https://swapi.dev/api/';
  public PLANETS_API = this.API + 'planets/';

  constructor(private http: HttpClient) {
    console.log('PLANETAS: servicio listo');
  }

  getAllPlanets(): Observable<any> {
    return this.http.get(this.PLANETS_API);
  }

  getPlanet(id: string) {
    return this.http.get(this.PLANETS_API + id + '/');
  }
}
