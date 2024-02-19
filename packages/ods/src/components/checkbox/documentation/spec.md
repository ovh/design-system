## OdsCheckbox
### Properties
| Property | Type | Required | Default value |
| --- | --- | --- | --- |
| ariaLabel | `null | string` | `true` | `null` |
| ariaLabelledby | `string` | `false` | `undefined` |
| inputId | `string` | `false` | `undefined` |
| isChecked | `boolean` | `true` | `false` |
| isDisabled | `boolean` | `true` | `false` |
| isIndeterminate | `boolean` | `true` | `false` |
| isRequired | `boolean` | `true` | `false` |
| name | `string` | `true` | `undefined` |
| value | `null | string` | `true` | `null` |
### Methods
• **clear**(): `Promise<void>`

• **getValidity**(): `Promise<undefined | ValidityState>`

• **reset**(): `Promise<void>`
### Events
• **odsBlur**(): `EventEmitter<void>`

• **odsChange**(): `EventEmitter<OdsCheckboxChangeEventDetail>`

• **odsClear**(): `EventEmitter<void>`

• **odsFocus**(): `EventEmitter<void>`

• **odsReset**(): `EventEmitter<void>`