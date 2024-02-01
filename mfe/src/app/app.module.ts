import {Injector, NgModule, DoBootstrap, inject} from '@angular/core';
import {createCustomElement} from "@angular/elements";
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet} from "@angular/router";
import {WcRouterLinkDirective} from "../wc-router-link";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    WcRouterLinkDirective
  ],
  providers: [],
  bootstrap: []
})
export class AppModule implements DoBootstrap {
  #injector = inject(Injector);

  ngDoBootstrap() {
    const ce = createCustomElement(AppComponent, {injector: this.#injector});
    customElements.define('ng-element', ce);
  }

}
