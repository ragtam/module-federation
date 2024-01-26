import { NgModule } from '@angular/core';
import {Route, RouterModule, Routes} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";

const routes: Route[] = [
  { path: 'list', outlet: 'mfe-outlet', loadChildren: () => import('./list/list.routes').then(m => m.listRoutes) },
  { path: 'details', loadComponent: () => import('./details/details.component').then(m => m.DetailsComponent), outlet: 'mfe-outlet' }
];

@NgModule({
  imports: [RouterTestingModule.withRoutes(routes),],
  exports: [RouterTestingModule]
})
export class AppRoutingModule { }
