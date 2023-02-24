import { Ods } from '../configure/ods';
import { OdsLogger } from '../logger/ods-logger';
export class OdsI18n {
  constructor() {
    this.logger = new OdsLogger('OdsI18N');
  }
  static get() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new OdsI18n();
    return this.instance;
  }
  handle(key, values, overrideHook) {
    const hook = overrideHook ? overrideHook : Ods.instance().getI18n();
    if (hook) {
      try {
        return hook(key, values);
      }
      catch (e) {
        this.logger.error('osds-cart', 'error handling i18n hook', { i18n: hook, key, values });
      }
    }
    return key;
  }
}
