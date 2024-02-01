import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {NavigationBehaviorOptions, Router, RouterLink, UrlTree} from "@angular/router";
import {connectWebComponentRouting} from "../routes-utils";
import {routes} from "./app-routing.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'mfe';
  #router = inject(Router);
  #destroyRef = inject(DestroyRef);

  constructor() {

  }

  public ngOnInit() {
    const handler = connectWebComponentRouting(this.#router, 'mfe');
    this.#destroyRef.onDestroy(() => {
      console.log('DestroyRef');
      handler();
    });
  }
}
