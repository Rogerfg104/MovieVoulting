import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TargetaElementComponent } from '../targeta-element/targeta-element';
import { DADES_MOCK } from '../../mocks/dades-mocks';
import { Element } from '../../models/element.mode';

@Component({
  selector: 'app-llista-elements',
  standalone: true,
  imports: [CommonModule, TargetaElementComponent],
  templateUrl: './llista-elements.component.html',
  styleUrl: './llista-elements.component.scss'
})
export class LlistaElementsComponent {

  elements: Element[] = DADES_MOCK;
  elementsFiltrats: Element[] = this.elements;

  trackById(index:number, item:Element){
    return item.id;
  }

  rebreSeleccio(id:number){
    console.log("Element seleccionat:", id);
  }

}