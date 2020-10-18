import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peliculas-tarjeta',
  templateUrl: './peliculas-tarjeta.component.html',
  styleUrls: ['./peliculas-tarjeta.component.css'],
})
export class PeliculasTarjetaComponent implements OnInit {
  @Input() film: any = {};
  @Input() index: number;

  @Output() filmSelected: EventEmitter<number>;

  constructor(private router: Router) {
    this.filmSelected = new EventEmitter();
  }

  ngOnInit(): void {}

  openDetails() {
    this.router.navigate(['/pelicula', this.index]);
  }
}
