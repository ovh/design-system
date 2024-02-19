## OdsPassword
### Properties
| Property | Type | Required | Default value |
| --- | --- | --- | --- |
| ariaLabel | `null | string` | `true` | `null` |
| ariaLabelledby | `string` | `false` | `undefined` |
| defaultValue | `string` | `false` | `undefined` |
| hasError | `boolean` | `true` | `false` |
| isClearable | `boolean` | `true` | `false` |
| isDisabled | `boolean` | `true` | `false` |
| isLoading | `boolean` | `true` | `false` |
| isMasked | `boolean` | `true` | `true` |
| isReadonly | `boolean` | `true` | `false` |
| isRequired | `boolean` | `true` | `false` |
| name | `string` | `true` | `undefined` |
| pattern | `string` | `false` | `undefined` |
| placeholder | `string` | `false` | `undefined` |
| value | `null | string` | `true` | `null` |
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