import { OdsUnitTestAttributeBehaviorOptions } from './ods-unit-test-attribute-behavior-options';
import { OdsUnitTestAttributeType } from './ods-unit-test-attribute-type';
import { odsCamelCase2KebabCase } from '../helpers/case';

/**
 * test an attribute depending the indicated test type.
 * @example
 * ```typescript
 * let instance: OsdsTile;
 * let page: SpecPage;
 * function yourSetup() {
 *   // setup stuff ....
 *   instance = page.rootInstance;
 * }
 * odsUnitTestAttributeBehavior<OdsTileAttributes, 'color'>({
 *   name: 'color',
 *   instance: () => instance,
 *   type: OdsUnitTestAttributeType.REFLECTED, root: () => page.root, expected: OdsThemeColorIntent.info,
 *   setup: () => yourSetup(),
 *   wait: () => page.waitForChanges()
 * });
 * ```
 * @internal
 */
export function odsUnitTestAttributeBehavior<InstanceAttribute,
  Name extends string & keyof InstanceAttribute = string & keyof InstanceAttribute,
  InstanceType extends InstanceAttribute = InstanceAttribute>(
  {
    name,
    instance,
    type,
    setup,
    root,
    expected,
    newValue,
    wait,
    isBoolean
  }: OdsUnitTestAttributeBehaviorOptions<InstanceAttribute, Name, InstanceType>
): void {

  const trueAttributeToString = (v: any) => (isBoolean && v === '') ? 'true' : v;

  switch (type) {
    case OdsUnitTestAttributeType.DEFAULT:
      it(`[DEFAULT] should have the correct default value`, async () => {
        await setup();
        expect(`${trueAttributeToString(instance()[ name ])}`).toBe(`${expected}`);
      });
      break;

    case OdsUnitTestAttributeType.REFLECTED:
      it('[REFLECTED] default value should be reflected', async () => {
        await setup();
        expect(`${trueAttributeToString(root()?.getAttribute(odsCamelCase2KebabCase(`${name}`)))}`).toEqual(`${expected}`);
      });
      break;

    case OdsUnitTestAttributeType.PROPERTY:
      it('[PROPERTY] should be a property/attribute', async () => {
        await setup();
        const value = instance()[ name ];
        expect(`${trueAttributeToString(value)}`).toEqual(`${expected}`);
      });
      break;

    case OdsUnitTestAttributeType.MODIFIABLE:
      it('[MODIFIABLE] should be modifiable', async () => {
        await setup();
        const el = root() as any;
        if (el) {
          el[name] = `${newValue}`;
        }
        wait && (await wait());
        expect(`${trueAttributeToString(instance()[ name ])}`).toEqual(`${expected}`);
      });
      break;

    case OdsUnitTestAttributeType.MUTABLE:
      it('[MUTABLE] should be reflected on changes', async () => {
        const spyConsoleWarn = jest.spyOn(console, 'warn');
        await setup();
        expect(`${trueAttributeToString(instance()[ name ])}`).toEqual(`${expected}`);
        (instance()[ name ] as any) = newValue;
        wait && (await wait());
        expect(`${trueAttributeToString(root()?.getAttribute(odsCamelCase2KebabCase(`${name}`)))}`).toEqual(`${newValue}`);
        // detect stencil mutable error message
        // add another if needed (with a new expect line)
        expect(spyConsoleWarn).not.toHaveBeenCalledWith(expect.stringMatching(/is immutable but was modified from within the component/));
      });
      break;
    default:
      break;
  }
}
