import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { GiphyService } from 'src/app/shared/giphy.service';
import { PeliculasService } from 'src/app/shared/peliculas.service';
import { PersonajesService } from 'src/app/shared/personajes.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css'],
})
export class PeliculaComponent implements OnInit {
  film: any = {};
  sub: Subscription;
  planets = [];
  characters = [];
  starships = [];
  species = [];

  constructor(
    private route: ActivatedRoute,
    private peliculasService: PeliculasService,
    private giphyService: GiphyService,
    private personajesService: PersonajesService
  ) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      const idnum = parseInt(params.id, 10) + 1;
      const id = idnum.toString();
      this.peliculasService.getFilm(id).subscribe((film: any) => {
        console.log(film);
        this.film = film;

        this.fetchPlanets(this.film);
        this.fetchCharacters(this.film);
        this.fetchStarships(this.film);
        this.fetchSpecies(this.film);
        console.log(this.species);

        this.giphyService
          .get(film.title)
          .subscribe((url) => (film.giphyUrl = url));
      });
    });
  }

  fetchPlanets(film: any) {
    film.planets.forEach((planetUrl: string) => {
      const planetId = planetUrl.split('/')[planetUrl.split('/').length - 2];

      this.peliculasService.getPlanet(planetId).subscribe((planet: any) => {
        this.planets.push(planet);
      });
    });
  }

  fetchCharacters(film: any) {
    film.characters.forEach((characterUrl: any) => {
      const characterId = characterUrl.split('/')[
        characterUrl.split('/').length - 2
      ];

      this.personajesService.get(characterId).subscribe((character) => {
        this.characters.push(character);
      });
    });
  }
  fetchStarships(film: any) {
    film.starships.forEach((starshipUrl: any) => {
      const starshipsId = starshipUrl.split('/')[
        starshipUrl.split('/').length - 2
      ];

      this.peliculasService
        .getStarship(starshipsId)
        .subscribe((starships: any) => {
          this.starships.push(starships);
        });
    });
  }
  fetchSpecies(film: any) {
    film.species.forEach((speciesUrl: any) => {
      const speciesId = speciesUrl.split('/')[speciesUrl.split('/').length - 2];

      this.peliculasService
        .getSpecie(speciesId)
        .subscribe((currrentsSpecies: any) => {
          this.species.push(currrentsSpecies);
        });
    });
  }
}
