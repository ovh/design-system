## Properties
### ariaLabel

•  **ariaLabel**: [`undefined` | `string`] = `null`


### ariaLabelledby

• `Optional` **ariaLabelledby**: [_string_] 


### defaultValue

• `Optional` **defaultValue**: [`string` | `number`] 


### hasError

•  **hasError**: [_boolean_] = `false`


### isClearable

• `Optional` **isClearable**: [_boolean_] 


### isDisabled

•  **isDisabled**: [_boolean_] = `false`


### isLoading

• `Optional` **isLoading**: [_boolean_] 


### isMasked

• `Optional` **isMasked**: [_boolean_] 


### isReadonly

• `Optional` **isReadonly**: [_boolean_] 


### isRequired

• `Optional` **isRequired**: [_boolean_] 


### max

• `Optional` **max**: [_number_] 


### maxlength

• `Optional` **maxlength**: [_number_] 


### min

• `Optional` **min**: [_number_] 


### minlength

• `Optional` **minlength**: [_number_] 


### name

•  **name**: [_string_] 


### pattern

• `Optional` **pattern**: [_string_] 


### placeholder

• `Optional` **placeholder**: [_string_] 


### step

• `Optional` **step**: [_number_] 


### type

•  **type**: [`number` | `url` | `text` | `email`] = `ODS_INPUT_TYPE.text`


### value

• `Optional` **value**: [`string` | `number`] = `undefined`


## Methods
### clear

▸ **clear**(): `Promise`<_void_>



#### Returns
`Promise`<_void_>
### getValidity

▸ **getValidity**(): `Promise`<`undefined` | `ValidityState`>



#### Returns
`Promise`<`undefined` | `ValidityState`>
### reset

▸ **reset**(): `Promise`<_void_>



#### Returns
`Promise`<_void_>
### toggleMask

▸ **toggleMask**(): `Promise`<_void_>



#### Returns
`Promise`<_void_>
## Events
### odsBlur

▸ **odsBlur**(): `EventEmitter`<_void_>



#### Returns
`EventEmitter`<_void_>
### odsClear

▸ **odsClear**(): `EventEmitter`<_void_>



#### Returns
`EventEmitter`<_void_>
### odsReset

▸ **odsReset**(): `EventEmitter`<_void_>



#### Returns
`EventEmitter`<_void_>
### odsToggleMask

▸ **odsToggleMask**(): `EventEmitter`<_void_>



#### Returns
`EventEmitter`<_void_>
### odsValueChange

▸ **odsValueChange**(): `EventEmitter`<`OdsInputEventValueChange`>



#### Returns
`EventEmitter`<`OdsInputEventValueChange`>
## Enums
### Enumeration: ODS_INPUT_TYPE

• **email** = `"email"`

• **number** = `"number"`

• **text** = `"text"`

• **url** = `"url"`

