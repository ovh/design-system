## OdsTag
### Properties
| Property | Type | Required | Default value |
| --- | --- | --- | --- |
| color | `OdsTagColor` | `true` | `ODS_TAG_COLOR.information` |
| icon | `OdsIconName` | `false` | `undefined` |
| isDisabled | `boolean` | `true` | `false` |
| label | `string` | `true` | `undefined` |
| size | `OdsTagSize` | `true` | `ODS_TAG_SIZE.md` |


### Events
• **odsRemove**(): `EventEmitter<OdsTagRemoveEventDetail>`
### Enums
#### ODS_TAG_COLOR

• **critical** = `"critical"`

• **information** = `"information"`

• **neutral** = `"neutral"`

• **success** = `"success"`

• **warning** = `"warning"`


#### ODS_TAG_SIZE

• **lg** = `"lg"`

• **md** = `"md"`

