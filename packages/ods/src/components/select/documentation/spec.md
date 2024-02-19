## OdsSelect
### Properties
| Property | Type | Required | Default value |
| --- | --- | --- | --- |
| allowMultiple | `boolean` | `true` | `false` |
| ariaLabel | `null | string` | `true` | `null` |
| ariaLabelledby | `string` | `false` | `undefined` |
| customRenderer | `OdsSelectCustomRenderer` | `false` | `undefined` |
| defaultValue | `string | string[]` | `false` | `undefined` |
| hasError | `boolean` | `true` | `false` |
| isDisabled | `boolean` | `true` | `false` |
| isReadonly | `boolean` | `true` | `false` |
| isRequired | `boolean` | `true` | `false` |
| multipleSelectionLabel | `string` | `true` | `'Selected item'` |
| name | `string` | `true` | `undefined` |
| placeholder | `string` | `false` | `undefined` |
| value | `null | string | string[]` | `true` | `null` |
### Methods
• **clear**(): `Promise<void>`

• **close**(): `Promise<void>`

• **getValidity**(): `Promise<undefined | ValidityState>`

• **open**(): `Promise<void>`

• **reset**(): `Promise<void>`
### Events
• **odsBlur**(): `EventEmitter<void>`

• **odsChange**(): `EventEmitter<OdsSelectChangeEventDetail>`

• **odsClear**(): `EventEmitter<void>`

• **odsFocus**(): `EventEmitter<void>`

• **odsReset**(): `EventEmitter<void>`