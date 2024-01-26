import {Injector, NgModule, DoBootstrap} from '@angular/core';
import {createCustomElement} from "@angular/elements";
import { BrowserModule } from '@angular/platform-browser';
import {RouterLink, RouterOutlet} from "@angular/router";

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
    RouterLink
  ],
  providers: [],
  bootstrap: []
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const ce = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define('ng-element', ce);
  }

}
