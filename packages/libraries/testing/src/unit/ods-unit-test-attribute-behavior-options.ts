import { OdsUnitTestAttributeType } from './ods-unit-test-attribute-type';
import { PropType } from '@ovhcloud/ods-core';

/**
 * @example
 * ```typescript
 * const option: OdsUnitTestAttributeBehaviorOptions<OsdsTile, 'color'> = {...}
 * ```
 */
export interface OdsUnitTestAttributeBehaviorOptions<
InstanceAttribute,
  Name extends string & keyof InstanceAttribute = string & keyof InstanceAttribute,
  InstanceType extends InstanceAttribute = InstanceAttribute,
  Value extends PropType<InstanceAttribute, Name> | undefined = PropType<InstanceAttribute, Name> | undefined,
  Type extends OdsUnitTestAttributeType = OdsUnitTestAttributeType,
  > {
  name: Name,
  instance: () => InstanceType,
  type: Type,
  setup: () => Promise<unknown>,
  root: () => Element | undefined,
  expected: Value,
  newValue?: Value,
  wait: Type extends OdsUnitTestAttributeType.MODIFIABLE ? () => Promise<unknown> : never,
  isBoolean: boolean
}
