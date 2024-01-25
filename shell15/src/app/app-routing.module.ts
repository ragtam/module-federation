import {startsWith, WebComponentWrapper, WebComponentWrapperOptions} from "@angular-architects/module-federation-tools";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    matcher: startsWith('mfe'),
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './web-components',
      type: 'module',
      elementName: 'ng-element'
    } as WebComponentWrapperOptions
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
