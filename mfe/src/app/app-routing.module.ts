import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: 'list', loadComponent: () => import('./list/list.component').then(m => m.ListComponent) },
  { path: 'details', loadComponent: () => import('./details/details.component').then(m => m.DetailsComponent) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
