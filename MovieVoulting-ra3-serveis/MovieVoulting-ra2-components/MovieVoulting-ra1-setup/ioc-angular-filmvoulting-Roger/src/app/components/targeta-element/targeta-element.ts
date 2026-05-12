import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementCataleg } from '../../models/element.mode';

@Component({
  selector: 'app-targeta-element',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="card" (click)="seleccionar()">
      <div class="card-image">
        <img [src]="element.imatgeUrl" [alt]="element.titol">
        <span *ngIf="element.esPopular" class="badge">Popular</span>
      </div>
      <div class="card-body">
        <h3>{{ element.titol | uppercase }}</h3>
        <p class="category">{{ element.categoria }}</p>
        <div class="card-footer">
          <span class="price">{{ element.preu | currency:'EUR' }}</span>
          <button class="btn-detail">Veure detall</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card {
      display: flex;
      background: white;
      border-radius: 12px;
      overflow: hidden;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
      border: 1px solid #eee;
    }
    .card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 16px rgba(0,0,0,0.1);
    }
    .card-image {
      position: relative;
      width: 120px;
      height: 120px;
      flex-shrink: 0;
    }
    .card-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .badge {
      position: absolute;
      top: 8px;
      left: 8px;
      background: #ffc107;
      color: #000;
      font-size: 10px;
      font-weight: bold;
      padding: 2px 6px;
      border-radius: 4px;
      text-transform: uppercase;
    }
    .card-body {
      padding: 16px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-grow: 1;
    }
    h3 {
      margin: 0;
      font-size: 18px;
      color: #333;
    }
    .category {
      margin: 4px 0;
      font-size: 14px;
      color: #666;
    }
    .card-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 8px;
    }
    .price {
      font-weight: 700;
      color: #007bff;
      font-size: 16px;
    }
    .btn-detail {
      background: transparent;
      border: 1px solid #007bff;
      color: #007bff;
      padding: 4px 12px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 600;
    }
    .card:hover .btn-detail {
      background: #007bff;
      color: white;
    }
  `]
})
export class TargetaElementComponent {
  @Input() element!: ElementCataleg;
  @Output() seleccionat = new EventEmitter<string>();

  seleccionar() {
    this.seleccionat.emit(this.element.id);
  }
}
