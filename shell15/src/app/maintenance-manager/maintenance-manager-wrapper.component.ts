import {ModuleFederationToolsModule, WebComponentWrapperOptions} from "@angular-architects/module-federation-tools";
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <mft-wc-wrapper
      [options]="options"
      [props]="props"
    ></mft-wc-wrapper>`,
  imports: [
    ModuleFederationToolsModule
  ],
  standalone: true
})
export class MaintenanceManagerWrapperComponent {
  public options: WebComponentWrapperOptions = {
    remoteEntry: 'http://localhost:4202/remoteEntry.js',
    exposedModule: './web-components',
    type: 'module',
    elementName: 'maintenance-manager-equipment-details'
  }

  public props = {
    config: {
      asset: {
        id: 'asset-id-626113',
        serial: 'asset-id-626113',
      },
      locale: 'en-US',
      theme: 'Light',
      token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ijk3M2E0NzE1LWU4MGEtNGQ2MC05NDA3LTMxNjhjNjYxM2Y5ZCJ9.eyJqdGkiOiI4MTQ2Zjg1Zi05YmU0LTQwNWQtOTRhMi0wNjMxNDUyODUwY2UiLCJqa3UiOiJodHRwczovL2NjLnN0YWdlLmhlaWRlbGJlcmcuY2xvdWQva2V5cy9vcmdfbWVtX2p3dF9wdWJsaWNfa2V5cyIsInBlcnNvbklkIjoiMzJlYmEwNzItMzJiMS00M2QyLTljNjAtOWFjNjIyMmZmOTEzIiwielBlcnNvbklkIjoiMzJlYmEwNzItMzJiMS00M2QyLTljNjAtOWFjNjIyMmZmOTEzIiwicHJlZmVycmVkX3VzZXJuYW1lIjoibWF0ZXVzei5nYXJiYWNpYWtAbmljZXByb2plY3QuZXUiLCJuYW1lIjoiTWF0ZXVzeiBHYXJiYWNpYWsiLCJhdWQiOlsibWFpbnRlbmFuY2VfbWFuYWdlciJdLCJuYmYiOjE3MDY3NjcyNzYsInNjb3BlIjpbImRpcmVjdG9yeS5wZXJzb24uciJdLCJvcmdhbml6YXRpb25JZCI6ImU5N2FkNGQ1LTBhMjQtNDliOS1iZjJmLTliNDZmOGNlZTQxOSIsInpPcmdhbml6YXRpb25JZCI6ImU5N2FkNGQ1LTBhMjQtNDliOS1iZjJmLTliNDZmOGNlZTQxOSIsImhkbUN1c3RvbWVyTnVtYmVycyI6IjAwMTQzODExODYiLCJzc3VzIjoiUzE5MCIsInpSb2xlcyI6Im1lbWJlcixhZG1pbiIsImNjUm9sZXMiOiJhZG0sbWVtIiwiaWF0IjoxNzA2NzY3MjgzLCJleHAiOjE3MDY3NzA4ODMsImlzcyI6Imh0dHBzOi8vY2Muc3RhZ2UuaGVpZGVsYmVyZy5jbG91ZCIsInN1YiI6IlBlcnNvbi8zMmViYTA3Mi0zMmIxLTQzZDItOWM2MC05YWM2MjIyZmY5MTMifQ.qTqx5n754SVG3HOGkrIVY2nFv8U9tq5PVVU_01cdwgbUbBH8-3OLwosOsQUis-lbSy1pQIguromQtHzHjRM4DQCRu94VX0f7tshhGcYO6XkObdc0DIak5iCct0PggflBsh3xYmEwmddJlkNJII7Wx8-rJ7UK8xtoMPKirRLoXGuYt6Z0CivTUHQMUry7MHt-gVJVVFIjvYm3mTmH5tFi539P5oM-jPWWEvb0arwHBAyhCYUJ4M9s4-OFPeQgy6TGkSck4eFbdsTpOA-O5WA-jeonG4k3uvFtt9Aa8q1cyJW-Q63kRNMARYeebNBkZ7pB0VxIAdLu7IFhykTDnxrmwA',
      rootPath: 'maintenance-manager'
    },
  };
}
