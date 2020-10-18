import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { GiphyService } from 'src/app/shared/giphy.service';
import { PeliculasService } from 'src/app/shared/peliculas.service';
import { PlanetasService } from 'src/app/shared/planets.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css'],
})
export class PeliculaComponent implements OnInit {
  film: any = {};
  sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private peliculasService: PeliculasService,
    private giphyService: GiphyService,
    private planetasService: PlanetasService
  ) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      const idnum = parseInt(params.id, 10) + 1;
      const id = idnum.toString();
      this.peliculasService.getFilm(id).subscribe((film: any) => {
        console.log(film);
        this.film = film;
        this.giphyService
          .get(film.title)
          .subscribe((url) => (film.giphyUrl = url));
      });
    });
  }

  getPlanetName(planetUrl: string) {
    const planetId = planetUrl.split('/')[planetUrl.split('/').length - 2];

    let planetName: string;
    this.planetasService.getPlanet(planetId).subscribe((planet: any) => {
      planetName = planet.name;
    });
    console.log(planetName);
  }
}
