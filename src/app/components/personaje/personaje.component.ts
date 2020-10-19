import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PersonajesService } from '../../shared/personajes.service';
import { ActivatedRoute } from '@angular/router';
import { GiphyService } from '../../shared/giphy.service';
import { PeliculasService } from 'src/app/shared/peliculas.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css'],
})
export class PersonajeComponent implements OnInit {
  personaje: any = {};
  peliculas: Array<any>;
  sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private personajesService: PersonajesService,
    private giphyService: GiphyService,
    private peliculasService: PeliculasService
  ) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      const idnum = parseInt(params.id, 10) + 1;
      const id = idnum.toString();
      this.personajesService.get(id).subscribe((personaje: any) => {
        console.log(personaje.url);
        this.personaje = personaje;
        this.peliculas = personaje.films;
        console.log(this.personaje);
        this.giphyService
          .get(personaje.name)
          .subscribe((url) => (personaje.giphyUrl = url));
      });
    });
  }
}
