import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Element } from '../../models/element.mode';

@Component({
  selector: 'app-targeta-element',
  standalone: true,
  templateUrl: './targeta-element.component.html',
  styleUrl: './targeta-element.component.scss'
})
export class TargetaElementComponent {

  @Input() element!: Element;

  @Output() seleccionat = new EventEmitter<number>();

  seleccionar() {
    this.seleccionat.emit(this.element.id);
  }

}