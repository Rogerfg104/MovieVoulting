import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../serveis/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="login-container">
      <div class="login-card">
        <h1>Iniciar Sessió</h1>
        <p class="subtitle">Accedeix a la teva col·lecció de pel·lícules</p>
        
        <form (ngSubmit)="onSubmit()" #loginForm="ngForm">
          <div class="form-group">
            <label for="email">Correu electrònic</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              [(ngModel)]="email" 
              required 
              placeholder="Ex: admin@test.com"
              class="form-control"
            >
          </div>
          
          <div class="form-group">
            <label for="password">Contrasenya</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              [(ngModel)]="password" 
              required 
              placeholder="••••••••"
              class="form-control"
            >
          </div>
          
          <div *ngIf="errorMessage" class="error-message">
            {{ errorMessage }}
          </div>
          
          <button type="submit" class="btn-login" [disabled]="!loginForm.form.valid">
            Entrar
          </button>
        </form>
        
        <div class="test-creds">
          <p>Credencials de prova:</p>
          <code>admin@test.com / 1234</code>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .login-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 80vh;
      padding: 20px;
    }
    .login-card {
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.1);
      width: 100%;
      max-width: 400px;
      text-align: center;
    }
    h1 {
      margin-bottom: 8px;
      color: #333;
      font-size: 24px;
    }
    .subtitle {
      color: #666;
      margin-bottom: 32px;
      font-size: 14px;
    }
    .form-group {
      text-align: left;
      margin-bottom: 20px;
    }
    label {
      display: block;
      margin-bottom: 8px;
      font-weight: 600;
      color: #444;
      font-size: 14px;
    }
    .form-control {
      width: 100%;
      padding: 12px 16px;
      border: 1px solid #ddd;
      border-radius: 8px;
      font-size: 16px;
      transition: border-color 0.2s;
      box-sizing: border-box;
    }
    .form-control:focus {
      outline: none;
      border-color: #007bff;
    }
    .btn-login {
      width: 100%;
      padding: 14px;
      background: #007bff;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s;
      margin-top: 10px;
    }
    .btn-login:hover {
      background: #0056b3;
    }
    .btn-login:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
    .error-message {
      background: #fee2e2;
      color: #dc2626;
      padding: 12px;
      border-radius: 8px;
      margin-bottom: 20px;
      font-size: 14px;
      border: 1px solid #fecaca;
    }
    .test-creds {
      margin-top: 32px;
      padding-top: 20px;
      border-top: 1px solid #eee;
      font-size: 12px;
      color: #888;
    }
    code {
      background: #f4f4f4;
      padding: 2px 6px;
      border-radius: 4px;
      color: #555;
    }
  `]
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (this.authService.login(this.email, this.password)) {
      this.errorMessage = '';
      this.router.navigate(['/preferits']);
    } else {
      this.errorMessage = 'Credencials incorrectes. Torna-ho a intentar.';
    }
  }
}
