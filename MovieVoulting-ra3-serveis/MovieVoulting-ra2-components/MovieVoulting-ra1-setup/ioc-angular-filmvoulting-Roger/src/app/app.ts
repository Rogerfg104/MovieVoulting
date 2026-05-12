import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent],
  template: `
    <app-nav></app-nav>
    <main class="content">
      <router-outlet></router-outlet>
    </main>
    <footer class="footer">
      <p>&copy; 2026 FilmVoulting - EAC4 Roger Font</p>
    </footer>
  `,
  styles: [`
    .content {
      min-height: calc(100vh - 160px);
      background-color: #f8f9fa;
    }
    .footer {
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #333;
      color: #999;
      font-size: 14px;
    }
  `]
})
export class AppComponent {
  title = 'Movie Voulting';

  constructor() {
    console.log('Movie Voulting inicialitzat correctament! Benvingut, Roger Font.');
  }
}
