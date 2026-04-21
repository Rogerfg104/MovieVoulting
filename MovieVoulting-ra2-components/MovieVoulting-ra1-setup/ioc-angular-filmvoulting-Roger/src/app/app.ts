import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Movie Voulting';

  constructor() {
    console.log('Movie Voulting inicialitzat correctament! Benvingut, Roger Font.');
  }
}