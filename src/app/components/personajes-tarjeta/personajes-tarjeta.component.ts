import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personajes-tarjeta',
  templateUrl: './personajes-tarjeta.component.html',
  styleUrls: ['./personajes-tarjeta.component.css']
})
export class PersonajesTarjetaComponent implements OnInit {

  @Input() personaje: any = {};
  @Input() index: number;

  @Output() personajeSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.personajeSeleccionado = new EventEmitter();
   }

  ngOnInit(): void {
  }

  openDetails(): void{
    this.router.navigate( ['/personaje', this.index] );
  }

}
