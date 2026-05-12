import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { TargetaElementComponent } from '../../components/targeta-element/targeta-element';
import { ElementCataleg } from '../../models/element.mode';

@Component({
  selector: 'app-cataleg',
  standalone: true,
  imports: [CommonModule, ScrollingModule, TargetaElementComponent],
  template: `
    <div class="cataleg-container">
      <h1>Catàleg de Pel·lícules</h1>
      <p class="subtitle">Explora la nostra col·lecció completa ({{ elements.length }} elements)</p>
      
      <div class="virtual-scroll-wrapper">
        <cdk-virtual-scroll-viewport itemSize="120" class="viewport">
          <div *cdkVirtualFor="let item of elements" class="list-item">
            <app-targeta-element [element]="item" (seleccionat)="onSeleccionat($event)"></app-targeta-element>
          </div>
        </cdk-virtual-scroll-viewport>
      </div>
    </div>
  `,
  styles: [`
    .cataleg-container {
      padding: 40px 20px;
      max-width: 1200px;
      margin: 0 auto;
    }
    h1 { color: #333; margin-bottom: 8px; }
    .subtitle { color: #666; margin-bottom: 30px; }
    .virtual-scroll-wrapper {
      background: white;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.05);
      overflow: hidden;
      border: 1px solid #eee;
    }
    .viewport { height: 600px; width: 100%; }
    .list-item { padding: 10px 20px; border-bottom: 1px solid #f0f0f0; }
    .list-item:hover { background-color: #fcfcfc; }
  `]
})
export class CatalegPage implements OnInit {
  elements: ElementCataleg[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.elements = Array.from({ length: 60 }).map((_, i) => ({
      id: (i + 1).toString(),
      titol: `Pel·lícula de Prova ${i + 1}`,
      descripcio: `Descripció per a la pel·lícula ${i + 1}.`,
      imatgeUrl: `https://picsum.photos/id/${(i % 50) + 10}/200/300`,
      categoria: 'Acció',
      esPopular: i % 5 === 0,
      preu: 9.99,
      unitats: 10
    }));
  }

  onSeleccionat(id: string) {
    this.router.navigate(['/detall', id]);
  }
}
