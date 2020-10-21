import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../../shared/personajes.service';
import { GiphyService } from '../../shared/giphy.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
})
export class PersonajesComponent implements OnInit {
  personajes: Array<any>;
  page = 1;

  constructor(
    private personajesService: PersonajesService,
    private giphyService: GiphyService
  ) { }

  ngOnInit(): void {
    this.personajesService.getData().subscribe((data) => {
      this.personajes = data.results;
      for (const pjs of this.personajes) {
        this.giphyService
          .get(pjs.name)
          .subscribe((url) => (pjs.giphyUrl = url));

        if (pjs.name == "Ki-Adi-Mundi") {
          pjs.giphyUrl = '../../assets/img/KiAdiMundi.jpg'
          console.log(pjs.giphyUrl)
        }
      }
    });
  }

  getMoreCharacters() {
    this.page += 1;
    this.personajesService.fetchMore(this.page).subscribe((data: any) => {
      this.personajes = [...this.personajes, ...data.results]
      for (const pjs of this.personajes) {
        this.giphyService
          .get(pjs.name)
          .subscribe((url) => (pjs.giphyUrl = url));

        if (pjs.name == "Ki-Adi-Mundi") {
          pjs.giphyUrl = '../../assets/img/KiAdiMundi.jpg'
          console.log(pjs.giphyUrl)
        }
      }
    });
  }
}
