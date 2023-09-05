import { OcdkWindow } from '../configure/ocdk-window';
import { ocdkDefaultConfig } from '../configure/ocdk-default-config';

export class OcdkLogger {
  protected prefixColor = "color: black;background:#ff8c00;font-weight: bold; font-size:10px; padding:2px 6px; border-radius: 5px 0px 0px 5px";
  protected contextColor = "color: black;background:#e5bd8c;font-weight: bold; font-size:10px; padding:2px 6px; border-radius: 0px 5px 5px 0px";
  protected prefix = "OCDK";
  protected context = "";
  protected withDatetime = true;

  // dummy function if nlog not enabled
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  static dummyLog = ():void => {};

  get getDatetime(): string {
    return new Date().toISOString();
  }

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
        return console[ method ].bind(null, `${this.withDatetime ? this.getDatetime : ''} ${this.prefix ? '%c' : '%s'}${this.prefix} %c${this.context}`, this.prefix ? this.prefixColor : '', this.contextColor);
      }
      // eslint-disable-next-line no-console
      return console[ method ].bind(null, `${this.withDatetime ? this.getDatetime : ''} [${this.prefix}${this.prefix ? '|' : ''}${this.context}]`);
    } else {
      return OcdkLogger.dummyLog
    }
  }

  get logging(): boolean {
    const win: OcdkWindow = window;
    const active = win.ocdk?.config?.logging?.active;
    return active === undefined ? ocdkDefaultConfig.logging.active : active;
  }

  get color(): boolean {
    const win: OcdkWindow = window;
    const color = win.ocdk?.config?.logging?.color;
    return color === undefined ? ocdkDefaultConfig.logging.color : color;
  }
}
