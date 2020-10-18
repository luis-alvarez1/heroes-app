import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  text: string = 'YES';
  open: boolean = true;

  toggleSideBar() {
    this.text = this.open ? 'NO' : 'YES';
    this.open = !this.open;
  }
}
