import {Routes} from "@angular/router";

export const listRoutes: Routes = [
  { path: '', loadComponent: () => import('./list.component').then(m => m.ListComponent) },
  { path: 'test', loadComponent: () => import('./test-component/test-component.component').then(m => m.TestComponentComponent) }
];
