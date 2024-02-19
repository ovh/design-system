## OdsToggle
### Properties
| Property | Type | Required | Default value |
| --- | --- | --- | --- |
| defaultValue | `boolean` | `false` | `undefined` |
| isDisabled | `boolean` | `true` | `false` |
| isRequired | `boolean` | `true` | `false` |
| name | `string` | `true` | `undefined` |
| value | `null | boolean` | `true` | `null` |
| withLabel | `boolean` | `true` | `false` |
### Methods
• **clear**(): `Promise<void>`

• **getValidity**(): `Promise<undefined | ValidityState>`

• **reset**(): `Promise<void>`
### Events
• **odsBlur**(): `EventEmitter<void>`

• **odsChange**(): `EventEmitter<OdsToggleChangeEventDetail>`

• **odsClear**(): `EventEmitter<void>`

• **odsFocus**(): `EventEmitter<void>`

• **odsReset**(): `EventEmitter<void>`