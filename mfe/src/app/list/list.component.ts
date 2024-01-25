import {NgForOf} from "@angular/common";
import { Component } from '@angular/core';
import packageJson from '../../../package.json'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  imports: [
    NgForOf
  ],
  standalone: true
})
export class ListComponent {
  public packages = Object.keys(packageJson.dependencies).map( (key) => ({ name: key, version: (packageJson.dependencies as any)[key] }) );
}
