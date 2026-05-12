# FilmVoulting - Projecte Angular (EAC4)

**Alumne:** Roger Font  
**Assignatura:** Programació Avançada (Angular)  
**Unitat:** Unitat 4 – Navegació i optimització (RA4)

## Descripció del Projecte
FilmVoulting és una aplicació web dissenyada per gestionar un catàleg de pel·lícules. Permet als usuaris navegar per una col·lecció de films, cercar títols específics, veure detalls detallats de cada pel·lícula i gestionar una llista personal de preferits mitjançant un sistema d'autenticació.

## Mapa de Rutes
L'aplicació utilitza el sistema de rutes d'Angular per a una navegació fluida (SPA):

| Path | Component | Accés |
|------|-----------|-------|
| `/cataleg` | `CatalegPage` | Públic |
| `/cerca` | `CercaPage` | Públic |
| `/detall/:id` | `DetallPage` | Públic |
| `/preferits` | `PreferitsPage` | Privat (Lazy Loaded) |
| `/login` | `LoginPage` | Públic |

## Instruccions d'execució en local

1.  **Clonar el repositori:**
    ```bash
    git clone <url-del-repositori>
    ```
2.  **Instal·lar dependències:**
    ```bash
    npm install
    ```
3.  **Executar en mode desenvolupament:**
    ```bash
    ng serve
    ```
4.  **Obrir al navegador:**
    Navegar a `http://localhost:4200/`

## Principals Funcionalitats Implementades
- **Navegació Avançada**: Rutes amb paràmetres, redireccions i gestió de rutes no trobades (wildcard).
- **Control d'Accés**: Protecció de rutes privades mitjançant `AuthGuard`.
- **Lazy Loading**: Càrrega diferida del mòdul de preferits per optimitzar el bundle inicial.
- **Optimització de Rendiment**: Estratègia `OnPush` en components presentacionals i Virtual Scroll per a llistes extenses usant l'Angular CDK.
- **Build de Producció**: Generació de bundle optimitzat per a desplegament.
