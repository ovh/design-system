import { odsGetUnitTestAttributeBaseOptions, odsGetUnitTestAttributeContextOptions } from '@ovhcloud/ods-testing';

import { SpecPage } from '@stencil/core/testing';

/**
 * @example
 * ```typescript
 * odsUnitTestAttribute<OdsButtonAttributes, 'color'>({
 *     ...getAttributeContextOptions<OdsButtonAttributes, OsdsButton, 'color'>({
 *        name: 'color',
 *        list: OdsThemeColorIntentList,
 *        defaultValue: odsButtonDefaultAttributes.color,
 *        page: () => page,
 *        instance: () => instance,
 *        setup
 *     })
 *   });
 * })
 * ```
 */
 export function getAttributeContextOptions<InstanceAttributes,
 InstanceType extends InstanceAttributes = InstanceAttributes,
 Name extends keyof InstanceAttributes = keyof InstanceAttributes
 >({
 name,
 list,
 defaultValue,
 page,
 instance,
 setup
}: odsGetUnitTestAttributeContextOptions<InstanceAttributes, Name>
 & { instance: () => InstanceType, page: () => SpecPage, setup: (...args: unknown[]) => Promise<void> }
) {
 return odsGetUnitTestAttributeBaseOptions<InstanceAttributes, Name, InstanceType>({
   name,
   list,
   defaultValue,
   instance: () => instance(),
   root: () => page().root,
   wait: () => page().waitForChanges(),
   setup: (value) => {
     const attributes: Partial<InstanceAttributes> = {};
     attributes[ name ] = value;
     return setup({ attributes });
   },
 })
}
