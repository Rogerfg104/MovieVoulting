import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ElementService } from '../../services/element.service';

@Component({
  selector: 'app-detall',
  standalone: true,
  imports: [CommonModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush, // Ex 4 requirement
  template: `
    <div class="detall-container" *ngIf="id">
      <div class="back-link">
        <a routerLink="/cataleg">← Tornar al catàleg</a>
      </div>
      
      <div class="detall-card">
        <div class="detall-info">
          <h1>Detall de l'element #{{ id }}</h1>
          <p class="description">
            Aquesta és la vista de detall per a l'element amb identificador {{ id }}.
            En una aplicació real, aquí es mostrarien totes les dades recuperades del servei.
          </p>
          
          <div class="meta-info">
            <div class="meta-item">
              <strong>ID:</strong> {{ id }}
            </div>
            <div class="meta-item">
              <strong>Categoria:</strong> Pel·lícula
            </div>
            <div class="meta-item">
              <strong>Estat:</strong> Disponible
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .detall-container {
      padding: 40px 20px;
      max-width: 800px;
      margin: 0 auto;
    }
    .back-link {
      margin-bottom: 20px;
    }
    .back-link a {
      color: #007bff;
      text-decoration: none;
      font-weight: 500;
    }
    .detall-card {
      background: white;
      border-radius: 16px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      padding: 40px;
      display: flex;
      gap: 30px;
    }
    h1 {
      margin-top: 0;
      color: #333;
      font-size: 32px;
    }
    .description {
      color: #666;
      line-height: 1.6;
      font-size: 18px;
      margin-bottom: 30px;
    }
    .meta-info {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 20px;
      padding-top: 20px;
      border-top: 1px solid #eee;
    }
    .meta-item {
      font-size: 16px;
    }
    .meta-item strong {
      color: #444;
    }
  `]
})
export class DetallPage implements OnInit {
  id: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Ex 1 requirement: llegir el paràmetre id
    this.id = this.route.snapshot.paramMap.get('id');
  }
}
