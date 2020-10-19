import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonajesService {
  public API = 'https://swapi.dev/api/';
  public PJS_API = this.API + 'people';
  public VEHICULES_API = this.API + 'vehicles';

  constructor(private http: HttpClient) {
    console.log('PERSONAJES: servicio listo');
  }

  getData(): Observable<any> {
    return this.http.get(this.PJS_API + '/');
  }

  getVehicules(id: string) {
    return this.http.get(this.VEHICULES_API + '/' + id + '/');
  }
  get(id: string) {
    return this.http.get(this.PJS_API + '/' + id + '/');
  }
}
