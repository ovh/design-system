import { odsDefaultConfig } from '../configure/ods-default-config';
import { getOdsWindow } from '../configure/ods-get-window';

export class OdsLogger {
  protected readonly id = Math.floor(Math.random()*10e6);
  protected prefixColor = 'color: white;background:#004fd6;font-weight: bold; font-size:10px; padding:2px 6px; border-radius: 5px 0px 0px 5px';
  protected contextColor = 'color: black;background:#d4e0e7;font-weight: bold; font-size:10px; padding:2px 6px; border-radius: 0px 5px 5px 0px';
  protected prefix = 'ODS';
  protected context = '';

  constructor(context: string, prefix?: string) {
    this.prefix = prefix ? prefix : this.prefix;
    this.context = context;
  }

  get log(): Console['log'] {
    return this.getConsole('log');
  }

  get warn(): Console['warn'] {
    return this.getConsole('warn');
  }

  get error(): Console['error'] {
    return this.getConsole('error');
  }

  get info(): Console['info'] {
    return this.getConsole('info');
  }

  get debug(): Console['debug'] {
    return this.getConsole('debug');
  }

  get trace(): Console['trace'] {
    return this.getConsole('trace');
  }

  getConsole<T extends 'trace' | 'debug' | 'log' | 'info' | 'error' | 'warn'>(method: T): Console[T] {
    if (this.logging) {
      if (this.color) {
        // eslint-disable-next-line no-console
        return console[ method ].bind(null, `${this.prefix ? '%c' : '%s'}${this.prefix} %c${this.context}`, this.prefix ? this.prefixColor : '', this.contextColor);
      }
      // eslint-disable-next-line no-console
      return console[ method ].bind(null, `[${this.prefix}${this.prefix ? '|' : ''}${this.context}]`);
    } else {
      // dummy function if nlog not enabled
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      return (() => {
      });
    }
  }

  get logging(): boolean {
    const win = getOdsWindow();
    const active = win?.ods?.config?.logging?.active;
    return active === undefined ? odsDefaultConfig.logging.active : active;
  }

  get color(): boolean {
    const win = getOdsWindow();
    const color = win?.ods?.config?.logging?.color;
    return color === undefined ? odsDefaultConfig.logging.color : color;
  }
}

