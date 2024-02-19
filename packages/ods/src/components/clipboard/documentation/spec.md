## OdsClipboard
### Properties
| Property | Type | Required | Default value |
| --- | --- | --- | --- |
| isDisabled | `boolean` | `true` | `false` |
| labelCopy | `string` | `true` | `'Copy to clipboard'` |
| labelCopySuccess | `string` | `true` | `'Copied!'` |
| value | `string` | `false` | `undefined` |
### Methods
• **copy**(): `Promise<void>`
### Events
• **odsCopy**(): `EventEmitter<string>`