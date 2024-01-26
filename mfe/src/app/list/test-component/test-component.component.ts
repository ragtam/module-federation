import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import packageJson from "../../../../package.json";

@Component({
  selector: 'app-test-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss']
})
export class TestComponentComponent {
  public packages = Object.keys(packageJson.dependencies).map( (key) => ({ name: key, version: (packageJson.dependencies as any)[key] }) );
}
