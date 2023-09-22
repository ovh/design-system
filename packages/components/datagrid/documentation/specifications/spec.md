* [**Interfaces**](#interfaces)
* [**Classes**](#classes)

## Interfaces

### OdsDatagridAttribute
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`columns`** | `string` \| `OdsDatagridColumn[]` | ✴️ |  | The list of the column|
|**`rows`** | `string` \| `OdsDatagridRow[]` | ✴️ |  | The list of the rowsThe key need to be according to the column field|

### OdsDatagridColumn
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`field`** | _string_ | ✴️ |  | |
|**`title`** | _string_ | ✴️ |  | |

### OdsDatagridRow
|Key | Type | Description|
|---|:---:|---|
|_string_ | _unknown_ | |

## Classes

### OsdsDatagrid