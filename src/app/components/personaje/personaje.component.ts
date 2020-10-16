import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PersonajesService } from '../../shared/personajes.service';
import { ActivatedRoute } from '@angular/router';
import { GiphyService } from '../../shared/giphy.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {

  personaje: any = {};
  sub: Subscription;

  constructor(private route: ActivatedRoute,  private personajesService: PersonajesService, private giphyService: GiphyService) { }

  ngOnInit(): void {
  this.sub = this.route.params.subscribe((params) => {
    const idnum = parseInt(params.id , 10) + 1;
    const id = idnum.toString();
    console.log(params);
    console.log(id);
    this.personajesService.get(id).subscribe((personaje:any) => {
      this.personaje = personaje;

      this.giphyService
          .get(personaje.name)
          .subscribe((url) => (personaje.giphyUrl = url));

    });

  });
  }

}
