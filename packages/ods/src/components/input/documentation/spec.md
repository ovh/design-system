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

• **email** = `"email"`

• **number** = `"number"`

• **password** = `"password"`

• **range** = `"range"`

• **text** = `"text"`

• **time** = `"time"`

• **url** = `"url"`

