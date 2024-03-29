* [**Interfaces**](#interfaces)

## Interfaces

### OdsDatagridAttribute
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`columns`** | `string` \| `OdsDatagridColumn[]` | ✴️ |  | The list of the column|
|**`hasHideableColumns`** | _boolean_ |  |  | Can you hide columns|
|**`height`** | _number_ | ✴️ |  | Height of the datagrid, in pixel|
|**`hideableColumns`** | string[] |  |  | List of the hide columnsThe key need to be according to the column field|
|**`isSelectable`** | _boolean_ |  |  | The rows can be selected|
|**`noResultLabel`** | _string_ |  |  | Text when the datagrid has no rows|
|**`rowHeight`** | _number_ |  |  | Height for each row, in pixel|
|**`rows`** | `string` \| `OdsDatagridRow[]` | ✴️ |  | The list of the rowsThe key needs to be according to the column field|

### OdsDatagridColumn
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`field`** | _string_ | ✴️ |  | |
|**`isSortable`** | _boolean_ |  |  | |
|**`title`** | _string_ | ✴️ |  | |
|**`formatter`** | _string_ |  |  | |

### OdsDatagridEvent
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`odsBottomScroll`** | `EventEmitter<void>` | ✴️ |  | |
|**`odsRowSelectionChange`** | `EventEmitter<reflection>` | ✴️ |  | |
|**`odsSortChange`** | `EventEmitter<reflection>` | ✴️ |  | |