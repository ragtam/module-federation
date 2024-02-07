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
    remoteEntry: 'https://web-component-dev-garbaciak.maintenancemanager.dev.heidelberg.cloud/remoteEntry.js',
    // remoteEntry: 'http://localhost:4202/remoteEntry.js',
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
      token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ijk3M2E0NzE1LWU4MGEtNGQ2MC05NDA3LTMxNjhjNjYxM2Y5ZCJ9.eyJqdGkiOiIyMzEzMzk0OC03YWFkLTQ3OGItYWU2YS05OWQ1MmUzMDk3NWUiLCJqa3UiOiJodHRwczovL2NjLnN0YWdlLmhlaWRlbGJlcmcuY2xvdWQva2V5cy9vcmdfbWVtX2p3dF9wdWJsaWNfa2V5cyIsInBlcnNvbklkIjoiZmMwZDdiNWUtYzAzOC00NTkyLTgxOTItMDE3NDAzYTc0YzQwIiwielBlcnNvbklkIjoiZmMwZDdiNWUtYzAzOC00NTkyLTgxOTItMDE3NDAzYTc0YzQwIiwicHJlZmVycmVkX3VzZXJuYW1lIjoibWF0ZXVzei5nYXJiYWNpYWsuZXh0QGhlaWRlbGJlcmcuY29tIiwibmFtZSI6Ik1hdGV1c3ogRXh0IEdhcmJhY2lhayIsImF1ZCI6WyJtYWludGVuYW5jZV9tYW5hZ2VyIl0sIm5iZiI6MTcwNzI4MzkxNywic2NvcGUiOlsiZGlyZWN0b3J5LnBlcnNvbi5yIl0sIm9yZ2FuaXphdGlvbklkIjoiZTk3YWQ0ZDUtMGEyNC00OWI5LWJmMmYtOWI0NmY4Y2VlNDE5Iiwiek9yZ2FuaXphdGlvbklkIjoiZTk3YWQ0ZDUtMGEyNC00OWI5LWJmMmYtOWI0NmY4Y2VlNDE5IiwiaGRtQ3VzdG9tZXJOdW1iZXJzIjoiMDAxNDM4MTE4NiIsInNzdXMiOiJTMTkwIiwielJvbGVzIjoibWVtYmVyLGFkbWluIiwiY2NSb2xlcyI6ImFkbSxtZW0iLCJpYXQiOjE3MDcyODM5MTgsImV4cCI6MTcwNzI4NzUxOCwiaXNzIjoiaHR0cHM6Ly9jYy5zdGFnZS5oZWlkZWxiZXJnLmNsb3VkIiwic3ViIjoiUGVyc29uL2ZjMGQ3YjVlLWMwMzgtNDU5Mi04MTkyLTAxNzQwM2E3NGM0MCJ9.Z4sToQ7YvKEdOh9kqO4QoY3SmDjsP3e2jxIsdkVESRYAfj62htc6YPDaGgKD2UPmeoXvrW4l0pDS4gjNF0aVnLkD_txceBj4TuiTyr4HwKWuntwwfISbcvAqqc7a-YtFvA4Y2_6CUMGrWdnmFXKgTjyhUxrrpKBtw57stK_eT3k2VV1iHn35wkZRa4JqU_o2WjiH3SowOKwFg0k3j6DObFx19rNpDPp_qKXAaERoVPj4w_z9ZZ8LdjUsiLFZePH7mXGy07XtA7fbAQWVUks_rKmOY9xP2ovZrm9yWc87WNKDVT6W_zoE6UpFjqwDqPluYQ6pc7a7eTBPDvaPsti7XQ',
      rootPath: 'maintenance-manager'
    },
  };
}
