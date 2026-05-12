import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TargetaElementComponent } from '../targeta-element/targeta-element';
import { DADES_MOCK } from '../../mocks/dades-mocks';
import { ElementCataleg } from '../../models/element.mode';

@Component({
  selector: 'app-llista-elements',
  standalone: true,
  imports: [CommonModule, TargetaElementComponent],
  templateUrl: './llista-elements.html',
  styleUrl: './llista-elements.scss'
})
export class LlistaElementsComponent {

  elements: ElementCataleg[] = DADES_MOCK;
  elementsFiltrats: ElementCataleg[] = this.elements;

  trackById(index:number, item:ElementCataleg){
    return item.id;
  }

  rebreSeleccio(id:string){
    console.log("Element seleccionat:", id);
  }

}
