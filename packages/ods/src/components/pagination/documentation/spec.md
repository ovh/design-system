## OdsPagination
### Properties
| Property | Type | Required | Default value |
| --- | --- | --- | --- |
| defaultCurrentPage | `number` | `true` | `1` |
| defaultItemsPerPage | `OdsPaginationPerPage` | `true` | `ODS_PAGINATION_PER_PAGE.option_10` |
| isDisabled | `boolean` | `true` | `false` |
| labelTooltipNext | `string` | `false` | `undefined` |
| labelTooltipPrevious | `string` | `false` | `undefined` |
| totalItems | `number` | `false` | `undefined` |
| totalPages | `number` | `true` | `1` |
### Methods
• **getCurrentPage**(): `Promise<number>`

• **setCurrentPage**(): `Promise<void>`
### Events
• **odsChange**(): `EventEmitter<OdsPaginationChangedEventDetail>`

• **odsItemPerPageChange**(): `EventEmitter<OdsPaginationItemPerPageChangedEventDetail>`
### Enums
#### ODS_PAGINATION_PER_PAGE

• **option_10** = `"10"`

• **option_100** = `"100"`

• **option_25** = `"25"`

• **option_300** = `"300"`

• **option_50** = `"50"`

