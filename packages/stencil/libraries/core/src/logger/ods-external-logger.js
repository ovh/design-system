import { OdsLogger } from './ods-logger';
export class OdsExternalLogger extends OdsLogger {
  constructor(context, prefix) {
    super(context, prefix);
    this.prefixColor = "color: white;background:#403f3e;font-weight: bold; font-size:10px; padding:2px 6px; border-radius: 5px 0px 0px 5px";
    this.contextColor = "color: black;background:#d4e0e7;font-weight: bold; font-size:10px; padding:2px 6px; border-radius: 0px 5px 5px 0px";
    // specific prefix for an external logging that using this logger
    this.prefix = 'CUSTOM';
  }
}
