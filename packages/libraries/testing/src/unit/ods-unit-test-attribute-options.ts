import { OdsUnitTestAttributeType } from './ods-unit-test-attribute-type';
import { PropType } from '@ovhcloud/ods-core';

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
  Value extends PropType<InstanceAttribute, Name> | undefined = PropType<InstanceAttribute, Name> | undefined
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
  include?: OdsUnitTestAttributeType[]
}
