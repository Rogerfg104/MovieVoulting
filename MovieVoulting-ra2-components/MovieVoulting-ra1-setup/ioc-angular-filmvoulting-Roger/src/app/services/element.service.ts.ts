import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.ts';
import { ElementCataleg } from '../models/element.mode';
import { adaptarElementsApi } from '../adaptadors/element.adaptador';

@Injectable({
    providedIn: 'root'
})
export class ElementService {

    private _elements = signal<ElementCataleg[]>([]);
    private _carregant = signal(false);
    private _error = signal<string | null>(null);

    elements = this._elements.asReadonly();
    carregant = this._carregant.asReadonly();
    error = this._error.asReadonly();

    constructor(private http: HttpClient) { }

    obtenirPopulars() {
        this._carregant.set(true);
        this._error.set(null);

        this.http.get<any[]>(`${environment.apiUrl}/elements?popular=true`)
            .subscribe({
                next: (res) => {
                    this._elements.set(adaptarElementsApi(res));
                    this._carregant.set(false);
                },
                error: () => {
                    this._error.set('Error carregant elements');
                    this._carregant.set(false);
                }
            });
    }

    cercar(terme: string) {
        this._carregant.set(true);
        this._error.set(null);

        this.http.get<any[]>(`${environment.apiUrl}/elements?nom_like=${terme}`)
            .subscribe({
                next: (res) => {
                    this._elements.set(adaptarElementsApi(res));
                    this._carregant.set(false);
                },
                error: () => {
                    this._error.set('Error en la cerca');
                    this._carregant.set(false);
                }
            });
    }
}