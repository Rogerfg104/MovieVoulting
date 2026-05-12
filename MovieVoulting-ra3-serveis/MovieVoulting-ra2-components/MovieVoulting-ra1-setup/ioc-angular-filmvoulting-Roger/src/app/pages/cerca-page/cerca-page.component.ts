import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraCercaComponent } from '../../components/barra-cerca/barra-cerca';
import { LlistaElementsComponent } from '../../components/llista-elements/llista-elements';

@Component({
  selector: 'app-cerca',
  standalone: true,
  imports: [CommonModule, BarraCercaComponent, LlistaElementsComponent],
  template: `
    <div class="cerca-page">
      <h1>Cercar Pel·lícules</h1>
      <app-barra-cerca></app-barra-cerca>
      <app-llista-elements></app-llista-elements>
    </div>
  `,
  styles: [`
    .cerca-page {
      padding: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }
    h1 {
      margin-bottom: 24px;
      color: #333;
    }
  `]
})
export class CercaPage {}
