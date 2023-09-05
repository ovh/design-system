export interface odsGetUnitTestAttributeContextOptions<InstanceAttributes,
  Name extends keyof InstanceAttributes = keyof InstanceAttributes,
  Value extends InstanceAttributes[Name] | undefined = InstanceAttributes[Name] | undefined,
  > {
  name: Name,
  list: Value[],
  defaultValue: Value
}
