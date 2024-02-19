## OdsFileUpload
### Properties
| Property | Type | Required | Default value |
| --- | --- | --- | --- |
| accept | `string` | `true` | `''` |
| acceptedFileLabel | `string` | `false` | `undefined` |
| browseFileLabel | `string` | `true` | `'Browse files'` |
| dropzoneLabel | `string` | `true` | `'Drag & drop a file'` |
| error | `string` | `true` | `''` |
| files | `OdsFile[]` | `true` | `[]` |
| isDisabled | `boolean` | `true` | `false` |
| maxFile | `number` | `false` | `undefined` |
| maxFileLabel | `string` | `false` | `undefined` |
| maxSize | `number` | `false` | `undefined` |
| maxSizeLabel | `string` | `false` | `undefined` |
| uploadSuccessLabel | `string` | `true` | `'File uploaded'` |


### Events
• **odsCancel**(): `EventEmitter<OdsFile>`

• **odsChange**(): `EventEmitter<OdsFileChangeEventDetail>`

• **odsRejected**(): `EventEmitter<OdsFileRejectedEventDetail>`
### Enums
#### ODS_FILE_REJECTION_CAUSE

• **maxFileReached** = `"max-file-reached"`

• **sizeTooLarge** = `"size-too-large"`

• **wrongFormat** = `"wrong-format"`

