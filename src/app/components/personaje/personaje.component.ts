import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { PersonajesService } from '../../shared/personajes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GiphyService } from '../../shared/giphy.service';
import { PeliculasService } from 'src/app/shared/peliculas.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css'],
})
export class PersonajeComponent implements OnInit {
  public personaje: any = {};
  sub: Subscription;
  films = [];
  vehicules = [];
  starships = [];
  @Input() index: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private personajesService: PersonajesService,
    private giphyService: GiphyService,
    private peliculasService: PeliculasService
  ) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      const idnum = parseInt(params.id, 10) + 1;
      const id = idnum.toString();
      this.personajesService.get(id).subscribe((personaje: any) => {
        this.personaje = personaje;

        this.fetchFilms(this.personaje);
        this.fetchVehicules(this.personaje);
        this.fetchStarships(this.personaje);

        this.giphyService
          .get(personaje.name)
          .subscribe((url) => (personaje.giphyUrl = url));
      });
    });
  }

  fetchVehicules(character: any) {
    character.vehicles.forEach((vehiculeUrl: string) => {
      const vehiculeId = vehiculeUrl.split('/')[
        vehiculeUrl.split('/').length - 2
      ];

      this.personajesService
        .getVehicules(vehiculeId)
        .subscribe((vehicule: any) => {
          this.giphyService.get(vehicule.name).subscribe((url) => {
            if (vehicule.name == 'Imperial Speeder Bike') {
              vehicule.giphyUrl = '../../../assets/img/Speeder_Bike_DICE.png';
            }
            if (vehicule.name == 'Tribubble bongo') {
              vehicule.giphyUrl = '../../../assets/img/GunganBongo-SWESOV.png';
            } else {
              vehicule.giphyUrl = url;
            }
          });

          this.vehicules.push(vehicule);
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
        .subscribe((starship: any) => {
          this.giphyService.get(starship.name).subscribe((url) => {
            if (starship.name == 'Trade Federation cruiser') {
              starship.giphyUrl =
                '../../../assets/img/InvisibleHandStarboard-FF.png';
            } else if (starship.name == 'Naboo star skiff') {
              starship.giphyUrl = '../../../assets/img/Naboo_star_skiff_1.png';
            } else {
              starship.giphyUrl = url;
            }
          });

          this.starships.push(starship);
        });
    });
  }

  fetchFilms(character: any) {
    character.films.forEach((filmUrl: string) => {
      const filmId = filmUrl.split('/')[filmUrl.split('/').length - 2];
      this.peliculasService.getFilm(filmId).subscribe((film: any) => {
        this.films.push(film);
      });
    });
  }

  fetchFilm(url: any) {
    const filmId = url.split('/')[
      url.split('/').length - 2
    ];
    this.router.navigate( ['/pelicula', filmId - 1] );
}
}
