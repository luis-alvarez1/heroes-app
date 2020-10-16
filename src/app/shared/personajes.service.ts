import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  public API = 'https://swapi.dev/api/';
  public PJS_API = this.API + 'people/';

  constructor(private http: HttpClient) {
    console.log('servicio listo');
  }

  getData(): Observable<any> {
    return this.http.get(this.PJS_API);
  }

  get(id: string) {
    return this.http.get(this.PJS_API + id + '/');
  }

}


