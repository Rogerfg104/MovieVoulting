import { Injectable, signal, computed } from '@angular/core';
import { ElementCataleg } from '../models/element.mode';

@Injectable({
  providedIn: 'root'
})
export class PreferitsService {

  private KEY = 'preferits-cataleg';

  private _preferits = signal<ElementCataleg[]>([]);

  // 👇 signals públicos
  preferits = this._preferits.asReadonly();
  totalPreferits = computed(() => this._preferits().length);

  constructor() {
    this.carregarPreferits();
  }

  // 🔄 Cargar del localStorage
  private carregarPreferits() {
    try {
      const dades = localStorage.getItem(this.KEY);
      if (dades) {
        this._preferits.set(JSON.parse(dades));
      }
    } catch (error) {
      console.error('Error carregant preferits', error);
    }
  }

  // 💾 Guardar
  private guardarPreferits() {
    try {
      localStorage.setItem(this.KEY, JSON.stringify(this._preferits()));
    } catch (error) {
      console.error('Error guardant preferits', error);
    }
  }

  // ⭐ Añadir
  afegirPreferit(element: ElementCataleg) {
    this._preferits.set([...this._preferits(), element]);
    this.guardarPreferits();
  }

  // ❌ Eliminar
  eliminarPreferit(id: string) {
    this._preferits.set(
      this._preferits().filter(el => el.id !== id)
    );
    this.guardarPreferits();
  }

  // 🔍 Comprobar
  esPreferit(id: string): boolean {
    return this._preferits().some(el => el.id === id);
  }
}