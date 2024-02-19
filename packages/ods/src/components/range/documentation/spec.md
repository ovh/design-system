## OdsRange
### Properties
| Property | Type | Required | Default value |
| --- | --- | --- | --- |
| defaultValue | `number | [number | number]` | `false` | `undefined` |
| hasError | `boolean` | `true` | `false` |
| isDisabled | `boolean` | `true` | `false` |
| isRequired | `boolean` | `true` | `false` |
| max | `number` | `true` | `100` |
| min | `number` | `true` | `0` |
| name | `string` | `true` | `undefined` |
| step | `number` | `false` | `undefined` |
| value | `null | number | [number | number]` | `true` | `0` |
### Methods
• **clear**(): `Promise<void>`

• **getValidity**(): `Promise<undefined | ValidityState>`

• **reset**(): `Promise<void>`
### Events
• **odsBlur**(): `EventEmitter<void>`

• **odsChange**(): `EventEmitter<OdsRangeChangeEventDetail>`

• **odsClear**(): `EventEmitter<void>`

• **odsFocus**(): `EventEmitter<void>`

• **odsReset**(): `EventEmitter<void>`