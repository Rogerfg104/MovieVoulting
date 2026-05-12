import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../serveis/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.estaAutenticat()) {
    return true;
  }

  // Redirigeix a /login i guarda la URL a la que s'intentava accedir
  return router.createUrlTree(['/login'], {
    queryParams: { returnUrl: state.url }
  });
};
