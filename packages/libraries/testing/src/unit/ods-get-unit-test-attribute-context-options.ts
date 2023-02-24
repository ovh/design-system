import { PropType } from '@ovhcloud/ods-core';

export interface odsGetUnitTestAttributeContextOptions<InstanceAttributes,
  Name extends keyof InstanceAttributes = keyof InstanceAttributes,
  Value extends PropType<InstanceAttributes, Name> | undefined = PropType<InstanceAttributes, Name> | undefined,
  > {
  name: Name,
  list: Value[],
  defaultValue: Value
}
