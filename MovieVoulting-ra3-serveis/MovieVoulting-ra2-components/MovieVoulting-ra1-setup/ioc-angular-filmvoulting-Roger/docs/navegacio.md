# Mapa de Navegació de FilmVoulting

En aquest document es detalla el sistema de rutes implementat a l'aplicació Angular.

## Mapa de Rutes

| Path | Component | Accés | Descripció |
|------|-----------|-------|-------------|
| `/` | — | Públic | Redirigeix automàticament a `/cataleg` |
| `/cataleg` | `CatalegPage` | Públic | Pàgina principal amb el llistat d'elements (virtualitzat) |
| `/cerca` | `CercaPage` | Públic | Vista de cerca de pel·lícules |
| `/detall/:id` | `DetallPage` | Públic | Vista de detall d'un element llegint el paràmetre `id` |
| `/preferits` | `PreferitsPage` | **Privat** | Secció de preferits (protegida amb `authGuard` i Lazy Loading) |
| `/login` | `LoginPage` | Públic | Formulari d'autenticació |
| `**` | — | Públic | Wildcard: Redirigeix a `/cataleg` per a rutes no reconegudes |

## Configuració del Router

### provideRouter
S'ha configurat el sistema de rutes a `src/app/app.config.ts` usant la funció `provideRouter(routes)`, on `routes` és la constant exportada des de `src/app/app.routes.ts`.

### RouterOutlet
S'ha afegit l'etiqueta `<router-outlet></router-outlet>` al template principal d' `AppComponent` per indicar on s'han de renderitzar els components de cada ruta.

### RouterLink i RouterLinkActive
- S'han utilitzat directives `routerLink` al component de navegació (`NavComponent`) per permetre la navegació entre vistes sense recarregar la pàgina.
- S'ha aplicat `routerLinkActive="active"` per destacar visualment la ruta que es troba activa en cada moment.
- S'ha utilitzat `ActivatedRoute` al `DetallPage` per capturar el paràmetre `:id` de la URL mitjançant `this.route.snapshot.paramMap.get('id')`.
