## OdsTextarea
### Properties
| Property | Type | Required | Default value |
| --- | --- | --- | --- |
| ariaLabel | `null | string` | `true` | `null` |
| ariaLabelledby | `string` | `false` | `undefined` |
| cols | `number` | `false` | `undefined` |
| defaultValue | `string` | `false` | `undefined` |
| hasError | `boolean` | `true` | `false` |
| hasSpellcheck | `boolean` | `true` | `false` |
| isDisabled | `boolean` | `true` | `false` |
| isReadonly | `boolean` | `true` | `false` |
| isRequired | `boolean` | `true` | `false` |
| isResizable | `boolean` | `true` | `false` |
| name | `string` | `true` | `undefined` |
| placeholder | `string` | `false` | `undefined` |
| rows | `number` | `false` | `undefined` |
| value | `null | string` | `true` | `null` |
### Methods
• **clear**(): `Promise<void>`

• **getValidity**(): `Promise<undefined | ValidityState>`

• **reset**(): `Promise<void>`
### Events
• **odsBlur**(): `EventEmitter<void>`

• **odsChange**(): `EventEmitter<OdsTextareaChangeEventDetail>`

• **odsClear**(): `EventEmitter<void>`

• **odsFocus**(): `EventEmitter<void>`

• **odsReset**(): `EventEmitter<void>`