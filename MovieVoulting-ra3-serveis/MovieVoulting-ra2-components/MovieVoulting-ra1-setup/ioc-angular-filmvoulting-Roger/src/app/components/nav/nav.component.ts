import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../serveis/auth.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="navbar">
      <div class="nav-brand" routerLink="/cataleg">
        <span class="logo">🎬</span>
        <span class="brand-name">FilmVoulting</span>
      </div>
      
      <ul class="nav-links">
        <li>
          <a routerLink="/cataleg" routerLinkActive="active">Catàleg</a>
        </li>
        <li>
          <a routerLink="/cerca" routerLinkActive="active">Cerca</a>
        </li>
        <li>
          <a routerLink="/preferits" routerLinkActive="active">Preferits</a>
        </li>
      </ul>
      
      <div class="nav-auth">
        <ng-container *ngIf="authService.obtenirUsuari() | async as usuari; else loginBtn">
          <span class="user-greeting">Hola, <strong>{{ usuari.nom }}</strong></span>
          <button class="btn-logout" (click)="logout()">Tancar sessió</button>
        </ng-container>
        
        <ng-template #loginBtn>
          <a routerLink="/login" class="btn-login" routerLinkActive="active">Iniciar sessió</a>
        </ng-template>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 40px;
      height: 80px;
      background: white;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      position: sticky;
      top: 0;
      z-index: 1000;
    }
    .nav-brand {
      display: flex;
      align-items: center;
      gap: 12px;
      cursor: pointer;
    }
    .logo {
      font-size: 32px;
    }
    .brand-name {
      font-size: 24px;
      font-weight: 800;
      background: linear-gradient(45deg, #007bff, #00d2ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .nav-links {
      display: flex;
      list-style: none;
      gap: 32px;
      margin: 0;
      padding: 0;
    }
    .nav-links a {
      text-decoration: none;
      color: #666;
      font-weight: 600;
      font-size: 16px;
      transition: color 0.2s;
      padding: 8px 0;
      border-bottom: 2px solid transparent;
    }
    .nav-links a:hover {
      color: #007bff;
    }
    .nav-links a.active {
      color: #007bff;
      border-bottom-color: #007bff;
    }
    .nav-auth {
      display: flex;
      align-items: center;
      gap: 20px;
    }
    .user-greeting {
      font-size: 14px;
      color: #444;
    }
    .btn-login {
      text-decoration: none;
      background: #007bff;
      color: white !important;
      padding: 10px 24px;
      border-radius: 50px;
      font-weight: 600;
      transition: transform 0.2s, background 0.2s;
    }
    .btn-login:hover {
      background: #0056b3;
      transform: translateY(-2px);
    }
    .btn-logout {
      background: #f4f4f4;
      border: none;
      padding: 10px 20px;
      border-radius: 50px;
      color: #666;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s;
    }
    .btn-logout:hover {
      background: #e9e9e9;
      color: #333;
    }
  `]
})
export class NavComponent {
  constructor(public authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/cataleg']);
  }
}
