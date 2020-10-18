import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../shared/peliculas.service';
import { GiphyService } from '../../shared/giphy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
})
export class PeliculasComponent implements OnInit {
  films: Array<any>;

  constructor(
    private peliculasService: PeliculasService,
    private router: Router,
    private giphyService: GiphyService
  ) {}

  ngOnInit(): void {
    this.peliculasService.getAllFilms().subscribe((data) => {
      this.films = data.results;
      console.log(this.films);

      for (const film of this.films) {
        this.giphyService
          .get(film.title)
          .subscribe((url) => (film.giphyUrl = url));
      }
    });
  }

  showDetail(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }
}
