<<<<<<< HEAD
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
=======
## Properties
### position

•  **position**: [`left` | `top` | `bottom` | `right` | `bottom-end` | `bottom-start` | `left-end` | `left-start` | `right-end` | `right-start` | `top-end` | `top-start`] = `ODS_TOOLTIP_POSITION.top`


### triggerId

•  **triggerId**: [_string_] 


### withArrow

• `Optional` **withArrow**: [_boolean_] 


## Methods
### hide

▸ **hide**(): `Promise`<_void_>



#### Returns
`Promise`<_void_>
### show

▸ **show**(): `Promise`<_void_>



#### Returns
`Promise`<_void_>

## Enums
### Enumeration: ODS_TOOLTIP_POSITION
>>>>>>> 396769406 (feat(storybook): tooltip doc & stories)

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

