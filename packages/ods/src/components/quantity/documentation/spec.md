## OdsQuantity
### Properties
| Property | Type | Required | Default value |
| --- | --- | --- | --- |
| ariaLabel | `null | string` | `true` | `null` |
| ariaLabelledby | `string` | `false` | `undefined` |
| defaultValue | `number` | `false` | `undefined` |
| hasError | `boolean` | `true` | `false` |
| isDisabled | `boolean` | `true` | `false` |
| isReadonly | `boolean` | `true` | `false` |
| isRequired | `boolean` | `true` | `false` |
| max | `number` | `false` | `undefined` |
| min | `number` | `false` | `undefined` |
| name | `string` | `true` | `undefined` |
| placeholder | `string` | `false` | `undefined` |
| step | `number` | `false` | `undefined` |
| value | `null | number` | `true` | `null` |
### Methods
• **clear**(): `Promise<void>`

• **getValidity**(): `Promise<undefined | ValidityState>`

• **reset**(): `Promise<void>`
### Events
• **odsBlur**(): `EventEmitter<void>`

• **odsChange**(): `EventEmitter<OdsQuantityChangeEventDetail>`

• **odsClear**(): `EventEmitter<void>`

• **odsFocus**(): `EventEmitter<void>`

• **odsReset**(): `EventEmitter<void>`