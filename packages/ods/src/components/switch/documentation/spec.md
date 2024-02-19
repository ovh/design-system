## OdsSwitch
### Properties
| Property | Type | Required | Default value |
| --- | --- | --- | --- |
| isDisabled | `boolean` | `false` | `false` |
| isRequired | `boolean` | `false` | `false` |
| name | `string` | `true` | `undefined` |
| size | `OdsSwitchSize` | `true` | `ODS_SWITCH_SIZE.md` |
### Methods
• **clear**(): `Promise<void>`

• **reset**(): `Promise<void>`
### Events
• **odsBlur**(): `EventEmitter<CustomEvent>`

• **odsChange**(): `EventEmitter<OdsRadioChangeEventDetail>`

• **odsClear**(): `EventEmitter<void>`

• **odsFocus**(): `EventEmitter<CustomEvent>`

• **odsReset**(): `EventEmitter<void>`
## OdsSwitchItem
### Properties
| Property | Type | Required | Default value |
| --- | --- | --- | --- |
| ariaLabel | `null | string` | `true` | `null` |
| ariaLabelledby | `string` | `false` | `undefined` |
| inputId | `string` | `false` | `undefined` |
| isChecked | `boolean` | `true` | `false` |
| isDisabled | `boolean` | `true` | `false` |
| isRequired | `boolean` | `true` | `false` |
| name | `string` | `true` | `undefined` |
| value | `null | string` | `true` | `null` |
### Methods
• **clear**(): `Promise<void>`

• **getValidity**(): `Promise<undefined | ValidityState>`

• **reset**(): `Promise<void>`
### Events
• **odsBlur**(): `EventEmitter<void>`

• **odsFocus**(): `EventEmitter<void>`
### Enums
#### ODS_SWITCH_SIZE

• **md** = `"md"`

• **sm** = `"sm"`

