import {NgForOf} from "@angular/common";
import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  imports: [
    NgForOf,
    RouterOutlet,
    RouterLink
  ],
  standalone: true
})
export class ListComponent {
}
