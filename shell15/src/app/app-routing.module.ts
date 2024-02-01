import {startsWith, WebComponentWrapper, WebComponentWrapperOptions} from "@angular-architects/module-federation-tools";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MaintenanceManagerWrapperComponent} from "./maintenance-manager/maintenance-manager-wrapper.component";

const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then(c => c.HomeComponent)
  },
  {
    matcher: startsWith('mfe'),
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './web-components',
      type: 'module',
      elementName: 'ng-element'
    } as WebComponentWrapperOptions
  },
  {
    matcher: startsWith('maintenance-manager'),
    component: MaintenanceManagerWrapperComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
