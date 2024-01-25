import { Component } from '@angular/core';
import packageJson from '../../../package.json'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  standalone: true
})
export class DetailsComponent {
  public name = packageJson.name
}
