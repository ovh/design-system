<<<<<<< HEAD
## OdsInput
### Properties
| Property | Type | Required | Default value |
| --- | --- | --- | --- |
| ariaLabel | `null | string` | `true` | `null` |
| ariaLabelledby | `string` | `false` | `undefined` |
| defaultValue | `string | number` | `false` | `undefined` |
| hasError | `boolean` | `true` | `false` |
| isClearable | `boolean` | `true` | `false` |
| isDisabled | `boolean` | `true` | `false` |
| isLoading | `boolean` | `true` | `false` |
| isMasked | `boolean` | `false` | `undefined` |
| isReadonly | `boolean` | `true` | `false` |
| isRequired | `boolean` | `true` | `false` |
| max | `number` | `false` | `undefined` |
| maxlength | `number` | `false` | `undefined` |
| min | `number` | `false` | `undefined` |
| minlength | `number` | `false` | `undefined` |
| name | `string` | `true` | `undefined` |
| pattern | `string` | `false` | `undefined` |
| placeholder | `string` | `false` | `undefined` |
| step | `number` | `false` | `undefined` |
| type | `OdsInputType` | `true` | `ODS_INPUT_TYPE.text` |
| value | `null | string | number` | `true` | `null` |
### Methods
• **clear**(): `Promise<void>`

• **getValidity**(): `Promise<undefined | ValidityState>`

• **reset**(): `Promise<void>`

• **toggleMask**(): `Promise<void>`
### Events
• **odsBlur**(): `EventEmitter<void>`

• **odsChange**(): `EventEmitter<OdsInputChangeEventDetail>`

• **odsClear**(): `EventEmitter<void>`

• **odsFocus**(): `EventEmitter<void>`

• **odsReset**(): `EventEmitter<void>`

• **odsToggleMask**(): `EventEmitter<void>`
### Enums
#### ODS_INPUT_TYPE
=======
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
>>>>>>> 564af4416 (refactor(input): v18 first step)

• **email** = `"email"`

• **number** = `"number"`

<<<<<<< HEAD
• **password** = `"password"`

• **range** = `"range"`

• **text** = `"text"`

• **time** = `"time"`

=======
• **text** = `"text"`

>>>>>>> 564af4416 (refactor(input): v18 first step)
• **url** = `"url"`

