import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preferits',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="preferits-container">
      <h1>Els meus preferits</h1>
      <p class="subtitle">Aquí trobaràs la teva selecció personal</p>
      
      <div class="empty-state">
        <div class="icon">⭐</div>
        <h3>Encara no tens preferits</h3>
        <p>Explora el catàleg i afegeix les teves pel·lícules preferides.</p>
        <button class="btn-browse" routerLink="/cataleg">Anar al catàleg</button>
      </div>
    </div>
  `,
  styles: [`
    .preferits-container {
      padding: 40px 20px;
      max-width: 1200px;
      margin: 0 auto;
    }
    h1 {
      color: #333;
      margin-bottom: 8px;
    }
    .subtitle {
      color: #666;
      margin-bottom: 40px;
    }
    .empty-state {
      background: #f9fafb;
      border: 2px dashed #e5e7eb;
      border-radius: 16px;
      padding: 60px;
      text-align: center;
    }
    .icon {
      font-size: 48px;
      margin-bottom: 16px;
    }
    h3 {
      font-size: 20px;
      color: #374151;
      margin-bottom: 8px;
    }
    p {
      color: #6b7280;
      margin-bottom: 24px;
    }
    .btn-browse {
      background: #007bff;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
    }
  `]
})
export class PreferitsPage {}
