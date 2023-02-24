import { odsDefaultConfig } from '../configure/ods-default-config';
import { getOdsWindow } from '../configure/ods-get-window';
export class OdsLogger {
  constructor(context, prefix) {
    this.id = Math.floor(Math.random() * 10e6);
    this.prefixColor = "color: white;background:#004fd6;font-weight: bold; font-size:10px; padding:2px 6px; border-radius: 5px 0px 0px 5px";
    this.contextColor = "color: black;background:#d4e0e7;font-weight: bold; font-size:10px; padding:2px 6px; border-radius: 0px 5px 5px 0px";
    this.prefix = "ODS";
    this.context = "";
    this.prefix = prefix ? prefix : this.prefix;
    this.context = context;
  }
  get log() {
    return this.getConsole('log');
  }
  get warn() {
    return this.getConsole('warn');
  }
  get error() {
    return this.getConsole('error');
  }
  get info() {
    return this.getConsole('info');
  }
  get debug() {
    return this.getConsole('debug');
  }
  get trace() {
    return this.getConsole('trace');
  }
  getConsole(method) {
    if (this.logging) {
      if (this.color) {
        // eslint-disable-next-line no-console
        return console[method].bind(null, `${this.prefix ? '%c' : '%s'}${this.prefix} %c${this.context}`, this.prefix ? this.prefixColor : '', this.contextColor);
      }
      // eslint-disable-next-line no-console
      return console[method].bind(null, `[${this.prefix}${this.prefix ? '|' : ''}${this.context}]`);
    }
    else {
      // dummy function if nlog not enabled
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      return (() => {
      });
    }
  }
  get logging() {
    var _a, _b, _c;
    const win = getOdsWindow();
    const active = (_c = (_b = (_a = win === null || win === void 0 ? void 0 : win.ods) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.logging) === null || _c === void 0 ? void 0 : _c.active;
    return active === undefined ? odsDefaultConfig.logging.active : active;
  }
  get color() {
    var _a, _b, _c;
    const win = getOdsWindow();
    const color = (_c = (_b = (_a = win === null || win === void 0 ? void 0 : win.ods) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.logging) === null || _c === void 0 ? void 0 : _c.color;
    return color === undefined ? odsDefaultConfig.logging.color : color;
  }
}
