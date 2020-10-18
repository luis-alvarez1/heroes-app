import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonajesService } from '../../shared/personajes.service';
import { GiphyService } from '../../shared/giphy.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
})
export class PersonajesComponent implements OnInit {
  personajes: Array<any>;

  constructor(
    private personajesService: PersonajesService,
    private router: Router,
    private giphyService: GiphyService
  ) {}

  ngOnInit(): void {
    this.personajesService.getData().subscribe((data) => {
      this.personajes = data.results;
      console.log(this.personajes);
      for (const pjs of this.personajes) {
        this.giphyService
          .get(pjs.name)
          .subscribe((url) => (pjs.giphyUrl = url));
      }
    });
  }

  verMas(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }
}
