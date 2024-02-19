## OdsModal
### Properties
| Property | Type | Required | Default value |
| --- | --- | --- | --- |
| color | `OdsModalColor` | `true` | `ODS_MODAL_COLOR.information` |
| isDismissible | `boolean` | `true` | `true` |
| isOpen | `boolean` | `true` | `false` |
### Methods
• **close**(): `Promise<void>`

• **open**(): `Promise<void>`
### Events
• **odsClose**(): `EventEmitter<void>`

• **odsOpen**(): `EventEmitter<void>`
### Enums
#### ODS_MODAL_COLOR

• **critical** = `"critical"`

• **information** = `"information"`

• **neutral** = `"neutral"`

• **success** = `"success"`

• **warning** = `"warning"`

