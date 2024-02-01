import {Directive, Inject, inject, Input} from '@angular/core';
import { RouterLink } from '@angular/router';

@Directive({
  selector: '[wcRouterLink]',
  standalone: true,
  hostDirectives: [RouterLink],
})
export class WcRouterLinkDirective {
  routerLink = inject(RouterLink);
  private rootPath = 'mfe';

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() set wcRouterLink(commands: any[] | string | null | undefined) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let withRoutPath: any[] | string | null | undefined;

    let arrCommands;
    if (!commands) {
      arrCommands = [this.rootPath];
    } else {
      arrCommands = Array.isArray(commands) ? commands : [this.formatString(commands)];
    }

    if (commands && commands.length === 1 && (commands[0] as string).length === 0) {
      withRoutPath = this.rootPath;
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      withRoutPath = [this.rootPath, ...arrCommands];
    }
    this.routerLink.routerLink = withRoutPath;
  }

  private formatString(str: string): string {
    return str.startsWith('/') ? str.slice(1) : str;
  }
}
