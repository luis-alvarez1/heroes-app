import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  texto: string =  "SI";
  open: boolean = true;

  cambiaEstado() {
    this.texto = (this.open) ?  "NO" : "SI";
    this.open = !this.open;
  }
}
