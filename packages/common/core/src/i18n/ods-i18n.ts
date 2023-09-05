import { OdsI18nHook } from './ods-i18n-hook';
import { Ods } from '../configure/ods';
import { OdsLogger } from '../logger/ods-logger';

export class OdsI18n {
  private logger = new OdsLogger('OdsI18N');
  private static instance: OdsI18n;

  public static get(): OdsI18n {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new OdsI18n();
    return this.instance;
  }

  handle(key: string, values: { [ key: string ]: string | number | undefined }, overrideHook?: OdsI18nHook): string {
    const hook: OdsI18nHook | undefined = overrideHook ? overrideHook : Ods.instance().getI18n();
    if (hook) {
      try {
        return hook(key, values);
      } catch (e) {
        this.logger.error('osds-cart', 'error handling i18n hook', { i18n: hook, key, values });
      }
    }
    return key;
  }
}
