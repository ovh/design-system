import {OdsUnitTestAttributeOptions} from './ods-unit-test-attribute-options';
import {OdsUnitTestAttributeType} from './ods-unit-test-attribute-type';
import {OdsGetDifferentElement} from '../helpers/ods-get-different-element';

export interface odsGetUnitTestAttributeBaseOptionsArgs<InstanceAttributes,
  Name extends keyof InstanceAttributes,
  InstanceType extends InstanceAttributes = InstanceAttributes,
  Instance extends () => InstanceType = () => InstanceType,
  Value extends InstanceAttributes[Name] | undefined = InstanceAttributes[Name] | undefined
  > {
  name: Name,
  list: Value[],
  defaultValue: Value,
  instance: Instance,
  root: () => Element | undefined,
  wait: () => Promise<unknown>,
  setup: (value: Value) => Promise<unknown>,
}

/**
 * build base options in order to make unit test on attributes.
 * It set by default the MUTABLE test as excluded.
 * If you want to exclude something else, don't forget to add the MUTABLE
 * test to the exclude array as:
 * ```
 * [OdsUnitTestAttributeType.MUTABLE, OdsUnitTestAttributeType.REFLECTED]
 * ```
 * @example
 * ```typescript
 * odsGetUnitTestAttributeBaseOptions<OdsTileAttributes, 'color'>({
 *     name: 'color',
 *     list: OdsThemeColorIntentList,
 *     defaultValue: odsTileDefaultAttributes.color,
 *     instance: () => instance,
 *     root: () => page.root,
 *     wait: () => page.waitForChanges(),
 *     setup: (value) => {
 *       const attributes: Partial<OdsTileAttributes> = {};
 *       attributes[ 'color' ] = value;
 *       return yourSetup({ attributes });
 *   }
 * })
 * ```
 * @param name - attribute name to test
 * @param list - array of values to test. they will be filtered and used by the system
 * @param defaultValue - value that is expected by default
 * @param instance - arrow function to execute to get the component's instance
 * @param root - arrow function to execute to get the HTML root element
 * @param wait - arrow function to execute when we have to wait a cycle of rendering
 * @param setup - arrow function to execute in order to build the test (component build for instance)
 */
export function odsGetUnitTestAttributeBaseOptions<InstanceAttributes,
  Name extends keyof InstanceAttributes,
  InstanceType extends InstanceAttributes = InstanceAttributes>({
  name,
  list,
  defaultValue,
  instance,
  root,
  wait,
  setup,
}: odsGetUnitTestAttributeBaseOptionsArgs<InstanceAttributes, Name, InstanceType>):
  Pick<OdsUnitTestAttributeOptions<InstanceAttributes, Name, InstanceType>,
    'name' | 'instance' | 'wait' | 'root' | 'exclude' | 'value' | 'newValue' | 'defaultValue' | 'setup'> {

  // we want two values but not a value that equals to the defaultValue
  let filtered = list.filter((el) => el !== defaultValue);

  // but if there is not any value to test, keep the original list even if some value equals to default
  if (!filtered.length) {
    filtered = list;
  }
  const values = OdsGetDifferentElement(filtered);
  return {
    name,
    instance,
    root,
    wait,
    exclude: [OdsUnitTestAttributeType.MUTABLE],
    value: values.element,
    newValue: values.elementNext,
    defaultValue,
    setup,
  };
}
