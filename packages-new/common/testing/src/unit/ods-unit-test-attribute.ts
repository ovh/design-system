import { odsUnitTestAttributeBehavior } from './ods-unit-test-attribute-behavior';
import { OdsUnitTestAttributeOptions } from './ods-unit-test-attribute-options';
import { OdsUnitTestAttributeType } from './ods-unit-test-attribute-type';

/**
 * testing an attribute of a component in different use cases (test types).
 * @example direct use
 * ```typescript
 * let instance: OsdsTile;
 * let page: SpecPage;
 * function yourSetup(color?: OdsThemeColorIntent) {
 *   // setup stuff ....
 *   instance = page.rootInstance;
 * }
 * odsUnitTestAttribute<OdsTileAttributes, 'color'>({
 *   name: "color",
 *   defaultValue: OdsThemeColorIntent.default,
 *   value: OdsThemeColorIntent.error,
 *   newValue: OdsThemeColorIntent.warning,
 *   setup: (value) => yourSetup(value),
 *   exclude: [OdsUnitTestAttributeType.MUTABLE],
 *   instance: () => instance,
 *   root: () => page.root,
 *   wait: () => page.waitForChanges()
 * });
 * ```
 *
 * @example using with odsGetUnitTestAttributeBaseOptions
 * ```typescript
 * odsUnitTestAttribute<OdsTileAttributes, 'color'>({
 *   ...odsGetUnitTestAttributeBaseOptions<OdsTileAttributes, 'color'>({
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
 *     },
 *   }),
 *   include: [OdsUnitTestAttributeType.MUTABLE]
 * });
 * ```
 * @see OdsUnitTestAttributeType
 * @param name - attribute name
 * @param defaultValue - default value to test for the `default` test type
 * @param value - value to set in the different test type
 * @param newValue - new value to set for the `mutable` test type
 * @param setup - function to execute in order to set up the test (creating the component for instance)
 * @param root - function to execute in order to get the DOM element that correspond to the component
 * @param wait - function to execute in order to wait for changes on the component (used by the test type `modifable` and `mutable`)
 * @param instance - function to execute in order to get the component instance
 * @param exclude - test type to exclude and not to test
 * @param include - test type to include and to test (a test inside include is more prioritized than exclude)
 */
export function odsUnitTestAttribute<InstanceAttribute,
  Name extends string & keyof InstanceAttribute = string & keyof InstanceAttribute,
  InstanceType extends InstanceAttribute = InstanceAttribute,
  Value extends InstanceAttribute[Name] | undefined = InstanceAttribute[Name] | undefined>({
                                                                                                                 name,
                                                                                                                 defaultValue,
                                                                                                                 value,
                                                                                                                 newValue,
                                                                                                                 setup,
                                                                                                                 root,
                                                                                                                 wait,
                                                                                                                 instance,
                                                                                                                 exclude = [OdsUnitTestAttributeType.MUTABLE],
                                                                                                                 include = []
                                                                                                               }: OdsUnitTestAttributeOptions<InstanceAttribute, Name, InstanceType>): void {
  const isBoolean = typeof value === 'boolean';
  const defaultValueIsUndef = defaultValue === undefined;
  const defaultValueIsNull = defaultValue === null;
  const propertyValue = isBoolean ? (!defaultValue as unknown as Value) : value;

  /**
   * use cases for reflected test:
   * - attribute is a boolean: we need to set it to true in order to test reflexion (false does not be reflected)
   * - attribute is undefined/null: we need to set it with a value (not undefined) to test reflexion (undefined/null is not reflected)
   * - else: we use the default value of the component that will be reflected
   */
  const reflectedSetup = () => {
    if (isBoolean) {
      return () => setup((true as unknown as Value));
    } else if (defaultValueIsUndef || defaultValueIsNull) {
      return () => setup(value);
    } else {
      return () => new Promise<unknown>((r) => r(undefined));
    }
  };

  const reflectedExpected = () => {
    if (isBoolean) {
      return (true as unknown as Value)
    } else if (defaultValueIsUndef || defaultValueIsNull) {
      return value;
    } else {
      return defaultValue;
    }
  };

  const allTests = [
    {
      type: OdsUnitTestAttributeType.DEFAULT,
      expected: defaultValue
    },
    {
      type: OdsUnitTestAttributeType.REFLECTED,
      setup: reflectedSetup(),
      expected: reflectedExpected()
    },
    {
      type: OdsUnitTestAttributeType.PROPERTY,
      setup: () => setup(propertyValue),
      expected: propertyValue
    },
    {
      type: OdsUnitTestAttributeType.MODIFIABLE,
      expected: value,
      newValue: value
    },
    {
      type: OdsUnitTestAttributeType.MUTABLE,
      setup: () => setup(value),
      expected: value,
      newValue: newValue
    }
  ];

  allTests
    .filter(test => !exclude.some(t => test.type === t))
    // add included tests
    .concat(allTests.filter(test => include.some(t => test.type === t)))
    // keep only unique values of tests
    .filter((value, index, all) => all.indexOf(value) === index)
    .forEach(test => odsUnitTestAttributeBehavior({
      name, type: test.type, root, expected: test.expected, instance,
      setup: test.setup || (() => setup(undefined)),
      newValue: test.newValue,
      wait,
      isBoolean
    }));
}
