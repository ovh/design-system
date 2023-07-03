import { OdsDeepPartial } from './ods-deep-partial';

export type OdsDeepSelectivePartial<T, K = never> =
// in case of no given properties, consider a classical deep partial
  [K] extends [never] ? OdsDeepPartial<T> :
    {
      [P in keyof T]:
      // current property is in the property list: transform itself and each property as optional
      [P] extends [K] ? Partial<OdsDeepSelectivePartial<T[P], K>> | undefined :
        // not in the property list: render selective partial of it
        OdsDeepSelectivePartial<T[P], K>;
    };
