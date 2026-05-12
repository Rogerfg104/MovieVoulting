import { Routes } from '@angular/router';
import { CatalegPage } from './pages/cataleg-page/cataleg-page.component';
import { CercaPage } from './pages/cerca-page/cerca-page.component';
import { DetallPage } from './pages/detall-page/detall-page.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'cataleg',
    component: CatalegPage
  },
  {
    path: 'cerca',
    component: CercaPage
  },
  {
    path: 'detall/:id',
    component: DetallPage
  },
  {
    path: 'preferits',
    loadComponent: () => import('./pages/preferits-page/preferits-page.component').then(m => m.PreferitsPage),
    canActivate: [authGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'cataleg',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'cataleg'
  }
];
