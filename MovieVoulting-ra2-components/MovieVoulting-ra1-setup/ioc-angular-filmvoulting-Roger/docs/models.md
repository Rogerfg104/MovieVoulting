# Modelos del sistema

## Mapeo de campos: Element

Este documento describe la transformación entre el modelo recibido desde la API (`ElementApiResponse`) y el modelo interno utilizado en la aplicación (`ElementCataleg`).

| Campo API            | Campo interno   | Tipo TypeScript |
|---------------------|----------------|-----------------|
| id                  | id             | string          |
| nom                 | titol          | string          |
| descripcio         | descripcio     | string          |
| categoria          | categoria      | string          |
| preu               | preu           | number          |
| imatge             | imatgeUrl      | string          |
| popular            | esPopular      | boolean         |
| stock              | unitats        | number          |

---

## Notas

- El backend expone `nom`, pero internamente se usa `titol` para mayor claridad en UI.
- `stock` se transforma en `unitats` para coherencia con la interfaz de catálogo.
- `imagen` se normaliza como `imatgeUrl` para uso directo en templates Angular.