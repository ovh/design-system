import { OdsUnitTestAttributeType } from './ods-unit-test-attribute-type';

/**
 * @example
 * ```typescript
 * const option: OdsUnitTestAttributeOptions<OsdsTileAttributes, 'color'> = {...}
 * ```
 */
export interface OdsUnitTestAttributeOptions<
  InstanceAttribute,
  Name extends keyof InstanceAttribute = keyof InstanceAttribute,
  InstanceType extends InstanceAttribute = InstanceAttribute,
  Value extends InstanceAttribute[Name] | undefined = InstanceAttribute[Name] | undefined
  > {
  name: Name,
  instance: () => InstanceType,
  defaultValue: Value,
  value: Value,
  newValue: Value,
  setup: (value: Value) => Promise<unknown>,
  root: () => Element | undefined,
  wait: () => Promise<unknown>,
  exclude?: OdsUnitTestAttributeType[],
  include?: OdsUnitTestAttributeType[],
}
