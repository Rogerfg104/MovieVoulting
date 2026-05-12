# Optimització i Rendiment

En aquest document es descriuen les tècniques d'optimització aplicades al projecte FilmVoulting.

## ChangeDetectionStrategy.OnPush

S'ha implementat l'estratègia de detecció de canvis `OnPush` en els següents components:

1.  **TargetaElementComponent**: S'ha triat aquest component perquè és un component presentacional que rep dades via `@Input()`. Amb `OnPush`, Angular només el comprovarà si la referència de l'objecte element canvia, millorant el rendiment en llistes grans.
2.  **DetallPage**: Com que és una vista que mostra dades estàtiques un cop carregada, l'estratègia `OnPush` evita comprovacions innecessàries del cicle de vida d'Angular.

## Virtualització de Llistes (Angular CDK)

S'ha implementat la virtualització al component `CatalegPage` per gestionar de forma eficient el llistat de pel·lícules.

-   **Llibreria usada**: `@angular/cdk/scrolling`
-   **Configuració**:
    -   `itemSize`: 120 (alçada aproximada de cada fila del catàleg).
    -   **Nombre d'elements**: S'ha configurat una llista de **60 elements** per demostrar el funcionament del scroll virtual i complir amb el mínim de 50 demanat.
-   **Funcionament**: El component `cdk-virtual-scroll-viewport` només renderitza al DOM els elements que són visibles actualment a la pantalla, reduint dràsticament l'ús de memòria i millorant la fluïdesa de l'scroll.

## Lazy Loading

S'ha configurat el carregament diferit (Lazy Loading) per a la secció de preferits a `app.routes.ts`:

```typescript
{ 
  path: 'preferits', 
  loadComponent: () => import('./pages/preferits-page/preferits-page.component').then(m => m.PreferitsPage),
  canActivate: [authGuard] 
}
```

Això permet reduir la mida del bundle inicial de l'aplicació, ja que el codi de `PreferitsPage` només es descarrega quan l'usuari intenta accedir-hi.
