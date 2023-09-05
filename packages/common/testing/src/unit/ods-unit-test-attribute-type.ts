export enum OdsUnitTestAttributeType {
  /** testing the expected default value */
  DEFAULT = 'default',
  /** testing that the expected value is reflected into the DOM */
  REFLECTED = 'reflected',
  /** testing that the specific value is correctly set in component's property */
  PROPERTY = 'property',
  /** testing that the value can be modified */
  MODIFIABLE = 'modifiable',
  /** testing the mutability of the property */
  MUTABLE = 'mutable'
}
