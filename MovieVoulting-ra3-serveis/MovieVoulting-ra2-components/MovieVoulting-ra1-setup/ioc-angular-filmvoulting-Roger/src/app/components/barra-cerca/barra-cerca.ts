import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-barra-cerca',
  standalone: true,
  imports:[FormsModule, CommonModule],
  templateUrl: './barra-cerca.html',
  styleUrl: './barra-cerca.scss'
})
export class BarraCercaComponent {

  text:string="";

  @Output() cerca = new EventEmitter<string>();

  buscar(){
    this.cerca.emit(this.text);
  }

}
