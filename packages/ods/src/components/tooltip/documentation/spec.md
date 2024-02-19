## OdsTooltip
### Properties
| Property | Type | Required | Default value |
| --- | --- | --- | --- |
| position | `OdsTooltipPosition` | `true` | `ODS_TOOLTIP_POSITION.top` |
| shadowDomTriggerId | `string` | `false` | `undefined` |
| triggerId | `string` | `true` | `undefined` |
| withArrow | `boolean` | `true` | `false` |
### Methods
• **hide**(): `Promise<void>`

• **show**(): `Promise<void>`
### Events
• **odsHide**(): `EventEmitter<void>`

• **odsShow**(): `EventEmitter<void>`
### Enums
#### ODS_TOOLTIP_POSITION

• **bottom** = `"bottom"`

• **bottomEnd** = `"bottom-end"`

• **bottomStart** = `"bottom-start"`

• **left** = `"left"`

• **leftEnd** = `"left-end"`

• **leftStart** = `"left-start"`

• **right** = `"right"`

• **rightEnd** = `"right-end"`

• **rightStart** = `"right-start"`

• **top** = `"top"`

• **topEnd** = `"top-end"`

• **topStart** = `"top-start"`

